const browseAPI = '#headerContent > li:nth-child(5) > a';


const Header = {
    getActiveHeader: async (page) => {
        await page.click(browseAPI);
        await page.waitForTimeout(1000);
        const element = await page.locator(browseAPI);
        const className = await element.getAttribute('class');
        return className;
    },
}

export default Header;
