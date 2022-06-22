import fetch from 'node-fetch';
import { urls } from '../config';

const Apod = {
    get: async(key) => {
        const r = await fetch(`${urls.nasa}planetary/apod?api_key=${key}`, { method: 'GET' });
        return r;
    },
};

export default Apod;
