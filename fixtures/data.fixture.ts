import { test as base, expect } from '@playwright/test';

type UserCredentials = {
    username: string;
    password: string;
};

type MyFixture = {
    user: UserCredentials;
};

export const testData = base.extend<MyFixture>({
    user: async ({ }, use) => {
        const data = {
            username: "standard_user",
            password: "secret_sauce"
        }
        await use(data);
    }
})