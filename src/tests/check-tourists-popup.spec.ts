// @ts-check
import { test } from '@playwright/test';
import { ToursMainPage } from 'src/pages/tours-main-page';

test('Open tourists dropdown', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.openToursPage();
    await toursPage.clickOnField('tourists');
    await toursPage.expectTouristsDropdownIsExist();
});

test('Open tourists dropdown and decrease adults', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.openToursPage();
    await toursPage.clickOnField('tourists');
    await toursPage.decreaseTourists();
    await toursPage.expectTouristsNumberIsCorrect();
});
