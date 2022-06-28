import api from '../framework/services';

const key = 'IReNjm77Udih92Y0FlPBgFD82N6Dl3tf7QAvSsXZ';

describe('API тесты на сервис NASA', () => {
    
    test('Получаем астрономическую картинку дня', async () => {
        const response = await api().Apod().get(key);
        const json = await response.json();
        expect(response.status).toEqual(200);
        expect(json.url).toContain('https://apod.nasa.gov/apod/image/2206/');
    });

    test('Получаем астрономическую картинку дня без api_key', async () => {
        const response = await api().Apod().get();
        const json = await response.json();
        expect(response.status).toEqual(403);
        expect(json.error.code).toEqual('API_KEY_INVALID');
        expect(json.error.message).toEqual('An invalid api_key was supplied. Get one at https://api.nasa.gov:443');
    });

    test('Получаем доступ к сайту библиотеки изображений', async () => {
        const response = await api().Image().get('as11-40-5874');
        const json = await response.json();
        expect(response.status).toEqual(200);
        expect(json.location).toEqual('https://images-assets.nasa.gov/image/as11-40-5874/metadata.json');
    });

    test('Проверяем доступность данных технологического проекта', async () => {
        const response = await api().Techport().get('96236', key);
        const json = await response.json();
        expect(response.status).toEqual(200);
        expect(json.project.title).toEqual('Direct RF Digitization Receiver for Multi-GNSS Receiver and More');
    });

    test('Проверяем конечную точку изображения', async () => {
        const response = await api().Assets().get('-95.33', '29.78', '2018-01-01', '0.10', key);
        const json = await response.json();
        expect(response.status).toEqual(200);
        expect(json.url).toContain('https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/thumbnails/');
    });

});
