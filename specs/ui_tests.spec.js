import {run, stop} from '../lib/browser';
import app from '../framework/elements';
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

    it ('Получаем активный таб', async () => { 
        const activeHeader = await app().Header().getActiveHeader(page);
        assert.equal(activeHeader, 'usa-nav-link currentDiv' , 'Не активен нужный таб в шапке');
    });

});
