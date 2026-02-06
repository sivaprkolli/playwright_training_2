import { Page, Locator } from '@playwright/test';

export class SalesforceSignupPage {
    readonly page: Page;

    // Page 1 locators
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly jobRoleSelect: Locator;
    readonly nextButton: Locator;

    // Page 2 locators
    readonly employeeCountSelect: Locator;
    readonly companyNameInput: Locator;
    readonly countrySelect: Locator;

    // Page 3 locators
    readonly phoneInput: Locator;
    readonly emailInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize Page 1 locators
        this.firstNameInput = page.locator('input[name="UserFirstName"]');
        this.lastNameInput = page.locator('input[name="UserLastName"]');
        this.jobRoleSelect = page.locator('select[name="UserTitle"]');
        this.nextButton = page.locator('button:has-text("Next")').first();

        // Initialize Page 2 locators
        this.employeeCountSelect = page.locator('select[name="CompanyEmployees"]');
        this.companyNameInput = page.locator('input[name="CompanyName"]');
        this.countrySelect = page.locator('select[name="CompanyCountry"]');

        // Initialize Page 3 locators
        this.phoneInput = page.locator('input[name="UserPhone"]');
        this.emailInput = page.locator('input[name="UserEmail"]');
        this.submitButton = page.locator('button[type="submit"]:has-text("Submit")');
    }

    async navigateToSignup() {
        await this.page.goto('https://www.salesforce.com/in/form/signup/sales-ee/?d=70130000000Enyk', {
            waitUntil: 'domcontentloaded'
        });
        await this.page.waitForLoadState('networkidle');
    }

    async fillFirstPage(firstName: string, lastName: string, jobRoleIndex: number = 1) {
        console.log('Filling first page: Basic information...');

        await this.firstNameInput.waitFor({ state: 'visible' });
        await this.firstNameInput.fill(firstName);

        await this.lastNameInput.fill(lastName);

        await this.jobRoleSelect.selectOption({ index: jobRoleIndex });

        await this.nextButton.click();
        await this.page.waitForTimeout(2000); // Wait for page transition
    }

    async fillSecondPage(employeeCount: string, companyName: string, countryCode: string = 'IN') {
        console.log('Filling second page: Company information...');

        await this.employeeCountSelect.waitFor({ state: 'visible', timeout: 10000 });

        // Try to select by label pattern or by index
        try {
            await this.employeeCountSelect.selectOption({ label: employeeCount });
        } catch {
            await this.employeeCountSelect.selectOption({ index: 2 });
        }

        await this.companyNameInput.fill(companyName);

        await this.countrySelect.selectOption(countryCode);

        await this.nextButton.click();
        await this.page.waitForTimeout(2000); // Wait for page transition
    }

    async fillFinalPage(phone: string, email: string) {
        console.log('Filling final page: Contact information...');

        await this.phoneInput.waitFor({ state: 'visible', timeout: 10000 });
        await this.phoneInput.fill(phone);

        await this.emailInput.fill(email);
    }

    async submitForm() {
        console.log('Submitting the form...');
        await this.submitButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(3000);
    }

    async completeSignupFlow(userData: {
        firstName: string;
        lastName: string;
        jobRoleIndex?: number;
        employeeCount: string;
        companyName: string;
        countryCode?: string;
        phone: string;
        email: string;
    }) {
        await this.navigateToSignup();
        await this.fillFirstPage(userData.firstName, userData.lastName, userData.jobRoleIndex);
        await this.fillSecondPage(userData.employeeCount, userData.companyName, userData.countryCode);
        await this.fillFinalPage(userData.phone, userData.email);
        await this.submitForm();
    }
}
