"""Generate a public, canonical résumé; never modifies the supplied original."""
from pathlib import Path
from xml.sax.saxutils import escape
import json, sys, hashlib
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
root = Path(__file__).resolve().parents[1]
d = json.loads((root/'data/portfolio.json').read_text())
out = Path(sys.argv[1]) if len(sys.argv)>1 else root/'public/resume.pdf'
out.parent.mkdir(parents=True,exist_ok=True)
styles = {k:ParagraphStyle(k,fontName='Helvetica-Bold' if k in ['name','section','job'] else 'Helvetica',fontSize=size,leading=leading,spaceAfter=after,textColor=HexColor('#172b25')) for k,size,leading,after in [('name',25,28,7),('section',12,16,8),('job',10,14,4),('body',9.5,13,6),('meta',9,12,5)]}
def clean(s):return escape(s.replace('–','-').replace('—','-').replace('’',"'").replace('“','"').replace('”','"'))
story=[]
def add(s,kind='body'):story.append(Paragraph(clean(s),styles[kind]))
def heading(s):story.append(Spacer(1,8));add(s,'section')
def role(r):
 add(r['company'],'job')
 for p in r['positions']:
  story.append(KeepTogether([Paragraph(clean(p['title']+' | '+p['period']),styles['meta']),Paragraph(clean('- '+p['highlights'][0]),styles['body'])]))
  for b in p['highlights'][1:]:add('- '+b)
add(d['identity']['name'],'name');add(d['identity']['targetRole']+' | Applied AI','job')
story.append(Paragraph(' · '.join('<link href="'+escape(url,{'"':'&quot;'})+'">'+label+'</link>' for label,url in [('jorgejac97@gmail.com',d['links']['email']),('jjacome.com',d['links']['website']),('LinkedIn',d['links']['linkedin']),('GitHub',d['links']['github'])]),styles['meta']))
add(d['identity']['summary']);heading('PROFESSIONAL EXPERIENCE')
for r in d['roles'][:3]:role(r)
story.append(PageBreak());add(d['identity']['name'],'name');add('Earlier experience, independent work and capabilities','meta')
heading('EARLIER EXPERIENCE')
for r in d['roles'][3:]:
 add(r['company']+' | '+r['positions'][0]['title']+' | '+r['positions'][0]['period'],'job')
 add(r['positions'][0]['highlights'][0])
heading('INDEPENDENT ENGINEERING')
for p in d['projects']:
 add(p['name']+': '+p['summary'])
 story.append(Paragraph('<link href="'+p['github']+'">'+p['github'].replace('https://','')+'</link>',styles['meta']))
add(d['rag']['summary']+' Public explanations use synthetic data.')
heading('CAPABILITIES')
for group in d['strengths']:add(group['title']+': '+', '.join(group['items']))
heading('EDUCATION, RECOGNITION & LANGUAGES')
add(d['education']['degree']+' | '+d['education']['institution']+' | '+d['education']['period'])
for a in d['awards']:add(a['title']+' | '+a['organization']+' | '+a['date'])
add(' · '.join(d['languages']))
def footer(c,doc):
 c.setFont('Helvetica',8);c.drawString(40,24,'Jorge Jacome | '+d['version']);c.drawRightString(572,24,str(doc.page))
SimpleDocTemplate(str(out),pagesize=(612,792),leftMargin=40,rightMargin=40,topMargin=32,bottomMargin=40,title='Jorge Jacome - Resume',author='Jorge Jacome').build(story,onFirstPage=footer,onLaterPages=footer)
(out.parent/'resume.manifest.json').write_text(json.dumps({'version':d['version'],'contentSHA':hashlib.sha256((root/'data/portfolio.json').read_bytes()).hexdigest(),'pdfSHA':hashlib.sha256(out.read_bytes()).hexdigest()},indent=2)+'\n')
print(out)
