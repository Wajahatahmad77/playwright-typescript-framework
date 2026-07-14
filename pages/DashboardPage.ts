import { type Locator, type Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly usersLink: Locator;
  readonly supportTicketsLink: Locator;
  readonly shopsLink: Locator;
  readonly offerRequestsLink: Locator;
  readonly notificationRequestsLink: Locator;
  readonly categoriesLink: Locator;
  readonly bannersLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usersLink = page.getByRole('link', { name: 'Users' });
    this.supportTicketsLink = page.getByRole('link', { name: 'Support Tickets' });
    this.shopsLink = page.getByRole('link', { name: 'Shops' });
    this.offerRequestsLink = page.getByRole('link', { name: /Offer Requests/ });
    this.notificationRequestsLink = page.getByRole('link', { name: /Notification Requests/ });
    this.categoriesLink = page.getByRole('link', { name: 'Categories' });
    this.bannersLink = page.getByRole('link', { name: 'Banners' });
  }

  async openUsers(): Promise<void> {
    await this.usersLink.click();
  }

  async openSupportTickets(): Promise<void> {
    await this.supportTicketsLink.click();
  }

  async openShops(): Promise<void> {
    await this.shopsLink.click();
  }

  async openOfferRequests(): Promise<void> {
    await this.offerRequestsLink.click();
  }

  async openNotificationRequests(): Promise<void> {
    await this.notificationRequestsLink.click();
  }

  async openCategories(): Promise<void> {
    await this.categoriesLink.click();
  }

  async openBanners(): Promise<void> {
    await this.bannersLink.click();
  }
}
