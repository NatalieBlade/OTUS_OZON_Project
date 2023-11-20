// @ts-check
import { test, expect } from '@playwright/test';
import { ToursMainPage } from 'src/pages/tours-main-page';

test('Open "to" dropdown', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.openToursPage();
    await toursPage.clickOnField('to');
    await toursPage.expectDirectionFieldDropdownIsExist();
});

test('Choose country', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.openToursPage();
    await toursPage.clickOnField('to');
    await toursPage.chooseDirectionVariant();
    await toursPage.expectToFieldIsExist('changed');
});
