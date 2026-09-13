import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = await readFile(resolve(root, 'data/portfolio.json'), 'utf8');
const content = JSON.parse(source);
const object = (v, path) => { if (!v || typeof v !== 'object' || Array.isArray(v)) throw new Error(`${path} must be an object`); };
const string = (v, path) => { if (typeof v !== 'string' || !v.trim()) throw new Error(`${path} must be a nonempty string`); };
const strings = (v, path) => { if (!Array.isArray(v) || !v.length) throw new Error(`${path} must be a nonempty array`); v.forEach((x,i) => string(x,`${path}[${i}]`)); };
const fields = (v, keys, path) => { object(v,path); keys.forEach(k => string(v[k],`${path}.${k}`)); };
const records = (v,path) => { if (!Array.isArray(v) || !v.length) throw new Error(`${path} must be nonempty records`); const ids = v.map(x=>x.id); if(new Set(ids).size !== ids.length) throw new Error(`${path} has duplicate ids`); };
fields(content,['version'],'content');
if (!/^\d{4}-\d{2}-\d{2}\.\d+$/.test(content.version)) throw new Error('Invalid public-content version');
fields(content.identity,['name','targetRole','currentRole','currentCompany','headline','intro','summary','portrait','portraitAlt'],'identity');
fields(content.links,['email','github','linkedin','website','resume'],'links');
strings(content.languages,'languages'); records(content.roles,'roles'); records(content.projects,'projects');
for (const role of content.roles) {
 fields(role,['id','company'],'role');
 if (!Array.isArray(role.positions) || !role.positions.length) throw new Error('Missing role positions');
 for (const p of role.positions) { fields(p,['title','period'],'position'); strings(p.highlights,'highlights'); strings(p.technologies,'technologies'); }
}
if(content.projects.length !== 3) throw new Error('Expected three featured projects');
for(const p of content.projects) {
 fields(p,['id','name','discipline','summary','contribution','outcome','image','fullImage','imageAlt','evidenceLabel','github'],'project'); strings(p.technologies,'project technologies');
 fields(p.story,['id','name','discipline','title','summary','image','fullImage','alt','problemTitle','problem','contributionTitle','contribution','decisionTitle','decision','tradeoff','captureBoundary','outcomeTitle','outcome','limits','source'],'story'); strings(p.story.tags,'story.tags');
 if(p.story.id !== p.id) throw new Error('Project/story id mismatch');
 for(const key of ['flow','steps']) { if(!Array.isArray(p.story[key]) || !p.story[key].length) throw new Error(`Missing story ${key}`); p.story[key].forEach(x => fields(x,['title','body'],key)); }
}
fields(content.enterpriseStory,['id','company','title','problem','constraints','contribution','decision','tradeoff','outcome','limits','evidence'],'enterpriseStory');strings(content.enterpriseStory.technologies,'enterpriseStory.technologies');
fields(content.teaching,['title','summary','scope'],'teaching');fields(content.teaching.exercise,['title','prompt','failure','download','command','result','limits'],'exercise');strings(content.teaching.exercise.criteria,'exercise.criteria');
fields(content.architecture,['title','constraint','decision','result','scope','image'],'architecture');
if(!Array.isArray(content.strengths) || !content.strengths.length) throw new Error('Missing strengths');
content.strengths.forEach(s=>{fields(s,['title'],'strength');strings(s.items,'strength.items');});
fields(content.education,['degree','institution','period'],'education');fields(content.rag,['summary','boundary'],'rag');
if(!Array.isArray(content.awards)) throw new Error('Missing awards');content.awards.forEach(a=>fields(a,['title','organization','description','date'],'award'));
const output = resolve(process.argv[2] || resolve(root, 'output/public-content'));
await mkdir(output, { recursive: true });
await writeFile(resolve(output, 'public-content.json'), source);
await writeFile(resolve(output, 'public-content.manifest.json'), JSON.stringify({ version: content.version, sha256: createHash('sha256').update(source).digest('hex'), source: 'data/portfolio.json' }, null, 2) + '\n');
console.log(`Exported public content ${content.version} to ${output}`);
