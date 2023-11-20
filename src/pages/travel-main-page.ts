import { expect, type Locator, type Page } from '@playwright/test';

export class TravelMainPage {
    readonly travelMainPage: Page;
    readonly _goToToursTab: Locator;

    constructor(page) {
        this.travelMainPage = page;
        this._goToToursTab = page.getByRole('button', { name: 'NEW Туры' });
    }

    // Open pages ------------------------------------------------------------------------

    async openTravelPage() {
        await this.travelMainPage.goto('https://ozon.ru/travel')
    }

    // Actions ------------------------------------------------------------------------

    async clickOnGoToToursTab() {
        await this._goToToursTab.click();
    }
}
