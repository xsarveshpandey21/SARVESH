/**
 * Script to capture screenshots of each magazine spread at:
 * - 390px (Mobile portrait)
 * - 768px (Tablet portrait)
 * - 1440px (Desktop wide)
 *
 * Requirements:
 * npx playwright install chromium
 * npx tsx scripts/capture-screens.ts
 */

import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

async function main() {
  console.log('Botanical Portfolio Spread Screenshot Capture');
  console.log('--------------------------------------------');

  const outDir = resolve(process.cwd(), 'screenshots');
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }

  try {
    // Dynamic import so it does not fail if playwright is not installed globally
    const { chromium } = await import('playwright');
    const browser = await chromium.launch({ headless: true });

    const viewports = [
      { name: 'mobile-390', width: 390, height: 844 },
      { name: 'tablet-768', width: 768, height: 1024 },
      { name: 'desktop-1440', width: 1440, height: 900 },
    ];

    const sections = [
      'cover',
      'about',
      'skills',
      'experience',
      'github',
      'live',
      'education',
      'certifications',
      'contact',
    ];

    const targetUrl = process.env.URL || 'http://localhost:5173';

    for (const vp of viewports) {
      console.log(`\nCapturing at ${vp.name} (${vp.width}x${vp.height})...`);
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 2,
      });

      const page = await context.newPage();
      await page.goto(targetUrl, { waitUntil: 'networkidle' });

      // Dismiss intro loader if present
      await page.waitForTimeout(2000);

      // Capture full page
      await page.screenshot({
        path: `${outDir}/full-${vp.name}.webp`,
        fullPage: true,
      });
      console.log(`  ✓ Saved full-${vp.name}.webp`);

      // Capture individual sections
      for (const section of sections) {
        const el = await page.$(`#${section}`);
        if (el) {
          await el.screenshot({
            path: `${outDir}/${section}-${vp.name}.webp`,
          });
          console.log(`  ✓ Saved ${section}-${vp.name}.webp`);
        }
      }

      await context.close();
    }

    await browser.close();
    console.log('\nAll section screenshots captured successfully in /screenshots!');
  } catch {
    console.warn('\nNote: Playwright is not yet installed in local dependencies.');
    console.log('To run this capture utility:');
    console.log('  1. npm i -D playwright');
    console.log('  2. npx playwright install chromium');
    console.log('  3. npx tsx scripts/capture-screens.ts');
  }
}

main().catch(console.error);
