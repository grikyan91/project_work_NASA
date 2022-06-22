import fetch from 'node-fetch';
import { urls } from '../config';

const Techport = {
    get: async( id_parameter, key ) => {
        const r = await fetch(`${urls.nasa}techport/api/projects/${id_parameter}?api_key=${key}`, { method: 'GET' });
        return r;
    },
};

export default Techport;
