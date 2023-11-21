// @ts-check
import { test, expect } from '@playwright/test';
import { ToursMainPage } from 'src/pages/tours-main-page';

test('Open "from" dropdown', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.openToursPage();
    await toursPage.clickOnField('from');
    await toursPage.expectDirectionFieldDropdownIsExist();
});

test('Choose city', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.openToursPage();
    await toursPage.clickOnField('from');
    await toursPage.chooseDirectionVariant();
    await toursPage.expectFromFieldIsExist('changed');
});
