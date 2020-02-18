const assert = require('assert');
describe('Google Page', () => {
    it('should have the right title', async () => {
        await browser.url('https://www.google.com/');
        const title = await browser.getTitle();
        assert.strictEqual(title,'Google');
    })
})