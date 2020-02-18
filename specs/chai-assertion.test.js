describe('Chai Assertion', () => {

    beforeEach(async () => {
        await browser.setWindowSize(1800,1200);
        await browser.url('http://www.webdriveruniversity.com/');
    })

    it('Test Web driveruni by login portal', async () => {
        const clickById = await $('#login-portal');
        await clickById.click();

        await browser.switchWindow('WebDriver | Login Portal')
        const loginPageTitle = await browser.getTitle();
        const loginUrl = await browser.getUrl();
        expect(loginPageTitle).to.contains('Login Portal');
        expect(loginUrl).to.contains('Login-Portal');
    })
})