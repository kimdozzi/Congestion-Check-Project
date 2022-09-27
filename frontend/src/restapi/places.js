import axios from 'axios';

function get_places() {
    return axios({
        method: 'GET',
        url: '/places'
    });
}

export { get_places };