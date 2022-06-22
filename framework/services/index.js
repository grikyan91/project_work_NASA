import Apod from './apod.service';
import Image from './image_library.service';
import Techport from './techport.service';
import Assets from './assets.service';

const api = () => ({
    Apod: () => ({...Apod}),
    Image: () => ({...Image}),
    Techport: () => ({...Techport}),
    Assets: () => ({...Assets}),
});

export default api;
