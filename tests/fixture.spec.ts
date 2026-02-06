import { sampleTest } from '../fixtures/sample.fixture';

sampleTest('should login with valid credentials', async ({ username, password }) => {
    console.log(`Logging in with username: ${username}
                 and password: ${password}`);
});