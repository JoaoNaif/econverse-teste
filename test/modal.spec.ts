import { test, expect } from '@playwright/test'

test('to check if the modal is working', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.locator('div:nth-child(2) > .button-modal').first().click()

  const modal = page.getByText('Veja mais detalhes do produto')

  await expect(modal).toBeVisible()
})
