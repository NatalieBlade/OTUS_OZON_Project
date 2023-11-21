// @ts-check
import { test } from '@playwright/test';
import { ToursMainPage } from 'src/pages/tours-main-page';

test('Open nights dropdown', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.openToursPage();
    await toursPage.clickOnField('nights');
    await toursPage.expectNightsDropdownIsExist();
});

test('Open nights popup and apply night-round toggle', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.openToursPage();
    await toursPage.clickOnField('nights');
    await toursPage.applyToggle();
    await toursPage.expectNightsToggleIsApplied();
});
