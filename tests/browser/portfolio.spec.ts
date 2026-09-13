import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
for(const locale of ['en','es']) {
 const prefix=locale==='es'?'/es':'';
 for(const route of ['', '/experience','/work/allylab','/work/conductor','/work/evalgate','/work/espn-platform','/work/rag','/notes/evidence-before-completion','/privacy']) {
  test(`${locale} ${route||'/'} accessible and responsive`,async({page})=>{
   const response=await page.goto(prefix+route||'/');expect(response?.status()).toBe(200);
   await expect(page.locator('html')).toHaveAttribute('lang',locale);
   await expect(page.locator('h1')).toHaveCount(1);
   await page.emulateMedia({reducedMotion:'reduce'});
   const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
   expect(results.violations).toEqual([]);
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth)).toBe(true);
  });
 }
 test(`${locale} project keyboard and locale switch`,async({page})=>{
  await page.goto(prefix||'/');
  const buttons=page.locator('.project-tabs button');await buttons.first().focus();await page.keyboard.press('End');await expect(buttons.last()).toHaveAttribute('aria-pressed','true');
  await page.keyboard.press('Home');await expect(buttons.first()).toHaveAttribute('aria-pressed','true');
  const other=locale==='en'?'es':'en';await page.locator(`header a[hreflang="${other}"]`).click();await expect(page.locator('html')).toHaveAttribute('lang',other);
 });
}
test('resume compatibility and real missing-page status',async({request})=>{
 const legacy=await request.get('/ResumeJorge.docx',{maxRedirects:0});expect([301,308]).toContain(legacy.status());expect(legacy.headers().location).toBe('/resume.pdf');
 for(const path of ['/resume.pdf','/es/resume.pdf']){const r=await request.get(path);expect(r.status()).toBe(200);expect(r.headers()['content-type']).toContain('application/pdf');}
 for(const path of ['/missing-page','/es/missing-page'])expect((await request.get(path)).status()).toBe(404);
});
