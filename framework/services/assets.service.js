import fetch from 'node-fetch';
import { urls } from '../config';

const Assets = {
    get: async(lon, lat, date, dim, key) => {
        const r = await fetch(`${urls.nasa}planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&dim=${dim}&api_key=${key}`, { method: 'GET' });
        return r;
    },
};

export default Assets;
