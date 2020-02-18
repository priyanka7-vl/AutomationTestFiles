describe('WaitForEnabled Command', () => {

    beforeEach(async () => {
        await browser.setWindowSize(1800,1200);
        await browser.url('http://www.webdriveruniversity.com/');
    })

    it('Test waitForEnabled', async () => {
        const clickByXpathSelector = await $('//h1[text()="AJAX LOADER"]/..');
        await clickByXpathSelector.click();
        await browser.switchWindow('WebDriver | Ajax-Loader')
    
        const clickMeButton = await $('//*[text()="CLICK ME!"]/..');
        clickMeButton.waitForEnabled(10000,true);
        clickMeButton.waitForEnabled(10000,false);
        await browser.pause(8000);
        clickMeButton.waitForEnabled(10000,true);
        clickMeButton.click();
        await browser.pause(8000);
        clickMeButton.waitForEnabled(10000,false);
        clickMeButton.click();
})
})