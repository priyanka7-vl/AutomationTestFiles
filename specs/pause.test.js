describe('Pause Command', () => {

    beforeEach(async () => {
        await browser.setWindowSize(1800,1200);
        await browser.url('http://www.webdriveruniversity.com/');
    })

    it('Test for Fixed TimeOut', async () => {
        const clickByXpathSelector = await $('//h1[text()="AJAX LOADER"]/..');
        await clickByXpathSelector.click();
        await browser.switchWindow('WebDriver | Ajax-Loader')
    
        const clickMeButton = await $('//*[text()="CLICK ME!"]/..'); 
        await browser.pause(15000);
        clickMeButton.click();
})
})