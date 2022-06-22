import fetch from 'node-fetch';
import { urls } from '../config';

const Image = {
    get: async(nasa_id) => {
        const r = await fetch(`${urls.image}metadata/${nasa_id}`, { method: 'GET' });
        return r;
    },
};

export default Image;
