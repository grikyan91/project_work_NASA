const searchInput = '#basic-search-field-small';
const sagest = '#headerSearch';


const Header = {
    SearchText: async (page, text) => {
        await page.click(searchInput);
        await page.fill(text);
        await page.waitForSelector(sagest);
        const popupText = await page.textContent(success);
        return popupText;
    },
}

export default Header;
