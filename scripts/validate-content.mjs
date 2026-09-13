import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url);
const hash=b=>createHash('sha256').update(b).digest('hex');
const en=JSON.parse(readFileSync(new URL('data/portfolio.json',root)));
function shape(a,b,path='content') {
  assert.equal(Array.isArray(a),Array.isArray(b),path);
  assert.equal(typeof a,typeof b,path);
  if(Array.isArray(a)){assert.equal(a.length,b.length,path);a.forEach((v,i)=>shape(v,b[i],`${path}[${i}]`));}
  else if(a&&typeof a==='object'){assert.deepEqual(Object.keys(a).sort(),Object.keys(b).sort(),path);for(const key of Object.keys(a))shape(a[key],b[key],`${path}.${key}`);}
  else if(typeof b==='string')assert.ok(b.trim(),`Empty ${path}`);
}
for(const locale of ['en','es']){
 const dataPath=`data/portfolio${locale==='es'?'.es':''}.json`,bytes=readFileSync(new URL(dataPath,root)),data=JSON.parse(bytes);
 shape(en,data);
 for(const key of ['roles','projects'])assert.deepEqual(data[key].map(x=>x.id),en[key].map(x=>x.id));
 const prefix=locale==='es'?'public/es/':'public/';
 const manifest=JSON.parse(readFileSync(new URL(prefix+'resume.manifest.json',root)));
 assert.equal(manifest.version,data.version);assert.equal(manifest.contentSHA,hash(bytes));assert.equal(manifest.pdfSHA,hash(readFileSync(new URL(prefix+'resume.pdf',root))));
 for(const asset of [data.identity.portrait,data.architecture.image,data.enterpriseStory.artifactDownload,data.teaching.exercise.download,...data.projects.flatMap(p=>[p.image,p.fullImage])])assert.ok(existsSync(new URL('public'+asset,root)),asset);
}
console.log('Both locales, artifact links and PDF provenance pass.');
