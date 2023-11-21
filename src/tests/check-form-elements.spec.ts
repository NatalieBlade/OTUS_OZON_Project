// @ts-check
import { test } from '@playwright/test';
import { ToursMainPage } from 'src/pages/tours-main-page';

test.beforeEach(async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.openToursPage();
});

test('Check tours page heading', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.expectHeadingIsExist();
});

test('Check from field', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.expectFromFieldIsExist('default');
});

test('Check to field', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.expectToFieldIsExist('default');
});

test('Check date field', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.expectDateFieldIsExist();
});

test('Check nights field', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.expectNightsFieldIsExist();
});

test('Check tourists field', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.expectTouristsFieldIsExist();
});

test('Check search tours button', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.expectSearchToursButtonIsExist();
});
