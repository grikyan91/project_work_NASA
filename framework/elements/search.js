const searchField = '#basic-search-field-small';
const sagest = '#headerSearch';
const donki = '#b-a3';

const Search = {
    getSearchContent: async (page) => {
        await page.press(searchField, 'D');
        await page.press(searchField, 'O');
        await page.click(sagest);
        await page.waitForTimeout(1000);
        const element = await page.locator(donki);
        const hidden = await element.getAttribute('aria-hidden');
        return hidden;
    },
}

export default Search;
