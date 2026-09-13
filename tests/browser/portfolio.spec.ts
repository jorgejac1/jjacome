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

for (const locale of ['en', 'es']) {
 test(`${locale} compact phone header keeps language beside identity`, async ({page}) => {
  for (const width of [320, 360, 384, 412, 480, 760]) {
   await page.setViewportSize({width, height:915});
   await page.goto(locale === 'es' ? '/es' : '/');
   const brand = await page.locator('header .wordmark').boundingBox();
   const language = await page.locator('header .language-switch').boundingBox();
   expect(brand).not.toBeNull(); expect(language).not.toBeNull();
   expect(Math.abs((brand!.y + brand!.height / 2) - (language!.y + language!.height / 2))).toBeLessThan(2);
   expect(brand!.x + brand!.width).toBeLessThan(language!.x);
   expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
 });
}
test('scroll entrance respects reduced motion', async ({page}) => {
 await page.emulateMedia({reducedMotion:'no-preference'});
 await page.goto('/');
 const target = page.locator('main > .contact');
 await target.scrollIntoViewIfNeeded();
 await expect.poll(() => target.evaluate(el => el.getAnimations().length)).toBeGreaterThan(0);
 await page.emulateMedia({reducedMotion:'reduce'});
 await expect.poll(() => target.evaluate(el => el.getAnimations().length)).toBe(0);
 await expect(target).toHaveCSS('opacity','1');
});
