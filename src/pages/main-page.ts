import { expect, type Locator, type Page } from '@playwright/test';

export class MainPage {
    readonly mainPage: Page;
    readonly _goToTravelButton: Locator;

    constructor(page) {
        this.mainPage = page;
        this._goToTravelButton = page.getByText('Билеты, отели, туры');
    }

    // Open pages ------------------------------------------------------------------------

    async openMainPage() {
        await this.mainPage.goto('https://ozon.ru')
    }

    // Actions ------------------------------------------------------------------------

    async clickOnGoToTravelButton() {
        await this._goToTravelButton.click()
    }
}
