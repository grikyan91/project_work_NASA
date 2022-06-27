import Header from './header';
import API from './api';
import List from './list';
import Search from './search';

const app = () => ({
    Header: () => ({...Header}),
    API: () => ({...API}),
    List: () => ({...List}),
    Search: () => ({...Search}),
})

export default app;
