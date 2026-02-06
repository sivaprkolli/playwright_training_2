import { test, expect } from '@playwright/test';
import { SalesforceSignupPage } from '../pages/SalesforceSignupPage';

test.describe('Salesforce Signup - Page Object Pattern', () => {
    let signupPage: SalesforceSignupPage;

    test.beforeEach(async ({ page }) => {
        signupPage = new SalesforceSignupPage(page);
    });

    test('Complete signup flow using Page Object Model', async ({ page }) => {
        test.setTimeout(90000);

        await signupPage.completeSignupFlow({
            firstName: 'John',
            lastName: 'Doe',
            jobRoleIndex: 1,
            employeeCount: '201–10000',
            companyName: 'TestAutomation',
            countryCode: 'IN',
            phone: '1234567890',
            email: 'siva@yopmail.com'
        });

        console.log('✓ Signup flow completed successfully!');
    });

    test('Signup flow with step-by-step execution', async ({ page }) => {
        test.setTimeout(90000);

        try {
            // Step 1: Navigate to signup page
            await signupPage.navigateToSignup();

            // Step 2: Fill first page (Basic information)
            await signupPage.fillFirstPage('John', 'Doe', 1);

            // Step 3: Fill second page (Company information)
            await signupPage.fillSecondPage('201–10000', 'TestAutomation', 'IN');

            // Step 4: Fill final page (Contact information)
            await signupPage.fillFinalPage('1234567890', 'siva@yopmail.com');

            // Step 5: Submit the form
            await signupPage.submitForm();

            console.log('✓ All steps completed successfully!');

            // Optional: Add assertions for success page
            // await expect(page).toHaveURL(/thank-you|success/);

        } catch (error) {
            console.error('❌ Error during signup:', error);
            await page.screenshot({ path: 'salesforce-signup-error.png', fullPage: true });
            throw error;
        }
    });

    test('Signup with different test data', async ({ page }) => {
        test.setTimeout(90000);

        const testData = {
            firstName: 'Test',
            lastName: 'User',
            jobRoleIndex: 2,
            employeeCount: '201–10000',
            companyName: 'QA Automation Inc',
            countryCode: 'IN',
            phone: '9876543210',
            email: 'testuser@yopmail.com'
        };

        await signupPage.completeSignupFlow(testData);

        console.log('✓ Signup completed with custom test data!');
    });
});
