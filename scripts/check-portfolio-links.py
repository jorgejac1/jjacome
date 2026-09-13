"""Check rendered local portfolio links, images and fragment destinations."""
from html.parser import HTMLParser
from urllib.parse import urljoin, urlparse, urldefrag
from urllib.request import urlopen
from pathlib import Path
import sys,json
base=sys.argv[1].rstrip('/')+'/'
class Page(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.ids=set();self.images=[]
 def handle_starttag(self,t,a):
  d=dict(a)
  if 'id' in d:self.ids.add(d['id'])
  if t=='a' and 'href' in d:self.links.append(d['href'])
  if t=='img':
   if 'src' in d:self.images.append((d['src'],d.get('alt')))
   # Validate every generated responsive variant, not just the fallback src.
   # This also prepares the local image cache before co-located lab testing.
   for candidate in d.get('srcset','').split(','):
    parts=candidate.strip().split()
    if parts:self.images.append((parts[0],d.get('alt')))
cache={};issues=[]
def get(url):
 if url not in cache:
  with urlopen(url,timeout=30) as r:
   data=r.read();typ=r.headers.get('Content-Type','');p=None
   if 'text/html' in typ:p=Page();p.feed(data.decode())
   cache[url]=(typ,p)
 return cache[url]
queue=[base];done=set()
while queue:
 url=queue.pop(0)
 if url in done:continue
 done.add(url)
 try:typ,p=get(url)
 except Exception as e:issues.append(f'{url}: {e}');continue
 if not p:continue
 for src,alt in p.images:
  if alt is None:issues.append(f'{url}: missing alt on {src}')
  image=urljoin(url,src)
  if urlparse(image).netloc==urlparse(base).netloc:
   try:get(image)
   except Exception as e:issues.append(f'{image}: {e}')
 for href in p.links:
  dest,fragment=urldefrag(urljoin(url,href))
  if urlparse(dest).netloc!=urlparse(base).netloc:continue
  try:
   _,target=get(dest)
   if fragment and target and fragment not in target.ids:issues.append(f'{url}: missing fragment {href}')
   if target and dest not in done:queue.append(dest)
  except Exception as e:issues.append(f'{url} -> {href}: {e}')
print(json.dumps({'pages':len(done),'resources':len(cache),'issues':issues},indent=2))
sys.exit(bool(issues))
