import { test as mytest } from '@playwright/test';

type loginDetails = {
    username: string;
    password: string;
    email: string;
    phone: number;
}

const myfixture = mytest.extend<loginDetails>({
    username: "standard_user",
    password: "secret_sauce",
    email: "siva@yopmail.com",
    phone: 1234567890
});

export const sampleTest = myfixture;
