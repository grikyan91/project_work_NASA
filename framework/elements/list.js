const firstItem = '#apod';
const contentTitle = '#b-a1'

const List = {
    getExpandedList: async (page) => {
        await page.click(firstItem);
        await page.waitForTimeout(1000);
        const element = await page.locator(contentTitle);
        const hidden = await element.getAttribute('aria-hidden');
        return hidden;
    },
}

export default List;
