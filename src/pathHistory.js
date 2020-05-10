import { createBrowserHistory } from 'history';

export function pushToAddress(adress){
    return createBrowserHistory().push(adress);
}

export default createBrowserHistory();
