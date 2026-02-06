import { test as mytest } from '@playwright/test';

type loginDetails = {
    username: string;
    password: string;
}

const myFixture = mytest.extend<loginDetails>({
    username: 'standard_user',
    password: 'secret_sauce',
});

export const sampleTest = myFixture;