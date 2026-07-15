import { expect, test } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/LoginPage';

const validEmail = 'admin@admin.com';
const validPassword = 'qweqwe';

test('logs in successfully with valid email and password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.login(validEmail, validPassword);

  await expect(dashboardPage.usersLink).toBeVisible();
});

test('shows dashboard links after a successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.login(validEmail, validPassword);

  await expect(dashboardPage.supportTicketsLink).toBeVisible();
});

test('does not log in with an invalid email', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.login('wrong-email@example.com', validPassword);

  await expect(loginPage.signInButton).toBeVisible();
  await expect(dashboardPage.usersLink).not.toBeVisible();
});
  
test('does not log in with a valid email and an invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.login(validEmail, 'wrong-password');

  await expect(loginPage.signInButton).toBeVisible();
  await expect(dashboardPage.usersLink).not.toBeVisible();
});
