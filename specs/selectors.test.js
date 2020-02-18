describe('Selectors Test', () => {
    beforeEach(async () => {
        await browser.url('http://www.webdriveruniversity.com/');
    })
    it('By Id', async () => {
        const clickById = await $('#contct-us');
        clickById.click();
        await browser.pause(2000);
    })
    it('By Class', async () => {
        const clickByClass = await $('.section-title');
        clickByClass.click();
        await browser.pause(2000);
    })
    it('By XPATH', async () => {
        const clickByXpath = await $('//h1[text() = "CONTACT US"]/../..');
        clickByXpath.click();
        await browser.pause(2000);
    })
    it('By CSS', async () => {
        const clickByCss = await $('#contact-us h1');
        clickByCss.click();
        await browser.pause(2000);
    })
})