import {run, stop} from '../lib/browser';
import chai from 'chai';

const assert = chai.assert;

describe ('UI тесты для NasaApi', () => {
    let page;

    beforeEach( async () => {
        page = await run('https://api.nasa.gov/');
    });
    afterEach(async() => {
        await stop();
    });

    /*it ('Добавление товара на странице women', async () => { 
        await app().Women().goToPage(page);
        const popupText = await app().Women().getSuccessText(page);
        assert.strictEqual(popupText, '\n\t\t\t\t\tProduct successfully added to your shopping cart\n\t\t\t\t', 'Невалидное сообщение об успешном добавлении товара в корзину');
        const num = await app().Women().getCountCart(page);
        assert.equal(num, '1' , 'Элемент не добавился в корзину');
    });*/

});
