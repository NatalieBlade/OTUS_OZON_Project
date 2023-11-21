// @ts-check
import { test } from '@playwright/test';
import { ToursMainPage } from 'src/pages/tours-main-page';

test('Open calendar dropdown', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.openToursPage();
    await toursPage.clickOnField('calendar');
    await toursPage.expectCalendarDropdownIsExist();
});

test('Open calendar and apply day-round toggle', async ({ page }) => {
    const toursPage = new ToursMainPage(page);
    await toursPage.openToursPage();
    await toursPage.clickOnField('calendar');
    await toursPage.applyToggle();
    await toursPage.expectDateToggleIsApplied();
});
