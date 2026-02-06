import { test, expect } from '@playwright/test';

test.describe('Salesforce Signup Form Automation', () => {
    test('Complete end-to-end signup flow', async ({ page }) => {
        // Set timeout for this test as form submissions can take time
        test.setTimeout(90000);

        // Step 1: Navigate to Salesforce signup page
        await page.goto('https://www.salesforce.com/in/form/signup/sales-ee/?d=70130000000Enyk');

        // Wait for page to fully load
        await page.waitForLoadState('networkidle');

        // Step 2: Fill First Page
        console.log('Filling first page...');

        // Enter First Name
        await page.fill('input[name="UserFirstName"]', 'John');

        // Enter Last Name
        await page.fill('input[name="UserLastName"]', 'Doe');

        // Select Job Role - using dropdown
        await page.selectOption('select[name="UserTitle"]', { index: 1 }); // Select first valid option

        // Click Next button on first page
        await page.click('button:has-text("Next"), button[type="submit"]:has-text("Next")');

        // Wait for second page to load
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000); // Additional wait for dynamic content

        // Step 3: Fill Second Page
        console.log('Filling second page...');

        // Select employee count: 201–10000
        await page.selectOption('select[name="CompanyEmployees"]', { label: /201.*10000/ });

        // Enter company name
        await page.fill('input[name="CompanyName"]', 'TestAutomation');

        // Select region: India
        await page.selectOption('select[name="CompanyCountry"]', { value: 'IN' }); // or { label: 'India' }

        // Click Next button on second page
        await page.click('button:has-text("Next"), button[type="submit"]:has-text("Next")');

        // Wait for final page to load
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);

        // Step 4: Fill Final Page
        console.log('Filling final page...');

        // Enter Phone
        await page.fill('input[name="UserPhone"]', '1234567890');

        // Enter Email
        await page.fill('input[name="UserEmail"]', 'siva@yopmail.com');

        // Click Submit button
        await page.click('button[type="submit"]:has-text("Submit"), button:has-text("Submit")');

        // Wait for submission to complete
        await page.waitForLoadState('networkidle');

        // Optional: Verify submission success
        // You can add assertions here based on the success page content
        console.log('Form submitted successfully!');

        // Wait to see the result
        await page.waitForTimeout(3000);
    });

    test('Signup flow with better locators and error handling', async ({ page }) => {
        test.setTimeout(90000);

        try {
            // Navigate to the signup page
            await page.goto('https://www.salesforce.com/in/form/signup/sales-ee/?d=70130000000Enyk', {
                waitUntil: 'domcontentloaded'
            });

            // Wait for form to be visible
            await page.waitForSelector('form', { state: 'visible', timeout: 10000 });

            // PAGE 1: Basic Information
            console.log('Step 1: Filling basic information...');

            const firstNameInput = page.locator('input[name="UserFirstName"]').or(page.getByLabel(/first name/i));
            await firstNameInput.waitFor({ state: 'visible' });
            await firstNameInput.fill('John');

            const lastNameInput = page.locator('input[name="UserLastName"]').or(page.getByLabel(/last name/i));
            await lastNameInput.fill('Doe');

            const jobRoleSelect = page.locator('select[name="UserTitle"]').or(page.getByLabel(/job title|job role/i));
            await jobRoleSelect.selectOption({ index: 1 });

            // Click Next
            const nextButton1 = page.locator('button:has-text("Next")').first();
            await nextButton1.click();

            // Wait for navigation
            await page.waitForTimeout(3000);

            // PAGE 2: Company Information
            console.log('Step 2: Filling company information...');

            const employeeCountSelect = page.locator('select[name="CompanyEmployees"]').or(page.getByLabel(/employee/i));
            await employeeCountSelect.waitFor({ state: 'visible', timeout: 10000 });
            await employeeCountSelect.selectOption({ index: 2 }); // Adjust index based on actual options

            const companyNameInput = page.locator('input[name="CompanyName"]').or(page.getByLabel(/company name/i));
            await companyNameInput.fill('TestAutomation');

            const countrySelect = page.locator('select[name="CompanyCountry"]').or(page.getByLabel(/country|region/i));
            await countrySelect.selectOption('IN'); // India

            // Click Next
            const nextButton2 = page.locator('button:has-text("Next")').first();
            await nextButton2.click();

            // Wait for navigation
            await page.waitForTimeout(3000);

            // PAGE 3: Contact Information
            console.log('Step 3: Filling contact information...');

            const phoneInput = page.locator('input[name="UserPhone"]').or(page.getByLabel(/phone/i));
            await phoneInput.waitFor({ state: 'visible', timeout: 10000 });
            await phoneInput.fill('1234567890');

            const emailInput = page.locator('input[name="UserEmail"]').or(page.getByLabel(/email/i));
            await emailInput.fill('siva@yopmail.com');

            // Click Submit
            const submitButton = page.locator('button[type="submit"]:has-text("Submit")').or(page.locator('button:has-text("Submit")'));
            await submitButton.click();

            // Wait for submission
            await page.waitForLoadState('networkidle');
            await page.waitForTimeout(3000);

            console.log('✓ Form submission completed successfully!');

        } catch (error) {
            console.error('Error during form automation:', error);
            // Take screenshot on failure
            await page.screenshot({ path: 'salesforce-error.png', fullPage: true });
            throw error;
        }
    });
});
