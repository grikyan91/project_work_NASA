import {run, stop} from '../lib/browser';
import app from '../framework/elements';
import chai from 'chai';

const { faker } = require('@faker-js/faker');

const assert = chai.assert;

describe ('UI тесты для NasaApi', () => {
    let page;

    beforeEach( async () => {
        page = await run('https://api.nasa.gov/');
    });
    afterEach(async() => {
        await stop();
    });

    it ('Проверяем активизацию таба в шапке', async () => {
        const browseAPI = '#headerContent > li:nth-child(5) > a';
        const activeHeader = await app().Header().getActiveTab(page, browseAPI);
        assert.equal(activeHeader, 'usa-nav-link currentDiv' , 'После клика на таб он не стал активен');
    });

    it ('Проверка обязательных полей', async () => {
        const requiredFields = await app().API().getRequiredFields(page);
        assert.strictEqual(requiredFields, 'This value is required This value is required This value is required' , 'У некоторых полей не появился текст обязательного заполнения');
    });

    it ('Проверка сгенерированого ключа', async () => {
        const randomName = faker.name.findName();
        const randomLast = faker.name.lastName();
        const mail = faker.internet.email();
        assert.exists(await app().API().generateAPI(page, randomName, randomLast, mail), 'Отсутствует ключ'); 
    });

    it ('Проверка разворачивания списка', async () => {
        const isHidden = await app().List().getExpandedList(page);
        assert.equal(isHidden, 'false', 'Выбранный элемент не развернулся');
    });

    it ('Переход к разделу по саджесту', async () => {
        const isHidden = await app().Search().getSearchContent(page);
        assert.equal(isHidden, 'false', 'Список не развернулся для найденного текста');
    });

});
