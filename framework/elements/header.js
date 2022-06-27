const Header = {
    getActiveTab: async (page, tab) => {
        await page.click(tab);
        await page.waitForTimeout(1000);
        const element = await page.locator(tab);
        const className = await element.getAttribute('class');
        return className;
    },
}

export default Header;
