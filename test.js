describe('Electron', () => {
    it('should allow to resize the window with Chromedriver', async () => {
        await browser.setWindowSize(1600, 1200)
        expect(await browser.getWindowSize()).toEqual({
            width: 1600,
            height: 1200
        })
    })
})