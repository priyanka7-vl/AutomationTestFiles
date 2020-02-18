describe('Close Tab', () => {
    beforeEach(async () => {
        await browser.setWindowSize(1800,1200);
        await browser.url('http://www.webdriveruniversity.com/');
    })
    it('close tabs', async () => {
        const clickById = await $('#contact-us');
        await clickById.click();
        console.log('HOMEPAGE HEADER:' + await browser.getTitle());
        await browser.pause(2000);
        await browser.switchWindow('WebDriver | Contact Us')
        console.log('CONTACT US HEADER:' + await browser.getTitle());
        await browser.closeWindow();
        await browser.pause(2000);
    })
})