/* eslint-disable no-await-in-loop */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';

type SetupOptions = {
  componentsPage: ComponentsPage;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage } = args;
  await componentsPage.mount({
    html: `
      <mdc-virtualizedwrapper></mdc-virtualizedwrapper>
    `,
    clearDocument: true,
  });
  const virtualizedList = componentsPage.page.locator('mdc-virtualizedlist');
  await virtualizedList.waitFor();
  return virtualizedList;
};

test.describe('mdc-virtualizedlist', () => {
  test('default virtualized list behavior', async ({ componentsPage }) => {
    await setup({
      componentsPage,
    });

    // check to see if first element is in the list and last element is not
    let currentFirstElement = await componentsPage.page.getByRole('listitem').first();
    expect(await currentFirstElement.getAttribute('data-index')).toBe('0');

    let currentLastElement = await componentsPage.page.getByRole('listitem').last();
    expect(await currentLastElement.getAttribute('data-index')).not.toBe('99');

    currentLastElement = await componentsPage.page.getByRole('listitem').last();
    await currentLastElement.waitFor();
    await currentLastElement.scrollIntoViewIfNeeded();

    await componentsPage.page.getByText('list item number 99').waitFor();

    // check if last element is in the list and that the first element is not
    currentFirstElement = await componentsPage.page.getByRole('listitem').first();
    expect(await currentFirstElement.getAttribute('data-index')).not.toBe('0');

    currentLastElement = await componentsPage.page.getByRole('listitem').last();
    expect(await currentLastElement.getAttribute('data-index')).toBe('99');
  });
});
