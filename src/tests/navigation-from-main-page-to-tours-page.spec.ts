// @ts-check
import { test, expect } from '@playwright/test';
import { MainPage } from 'src/pages/main-page';
import { TravelMainPage } from 'src/pages/travel-main-page';

test('Go to travel page', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    await mainPage.clickOnGoToTravelButton();
    // Страница открывается в новой вкладке
    await page.waitForTimeout(3000);
    const context = await page.context();
    let pages = context.pages();
    expect(pages[1].url()).toContain('travel');
});

test('Go to tours page', async ({ page }) => {
    const travelPage = new TravelMainPage(page);
    await travelPage.openTravelPage();
    await travelPage.clickOnGoToToursTab();
    await page.waitForLoadState('networkidle');
    expect(page.url()).toContain('tours');
});
