import axios from 'axios';

function get_places() {
    return axios({
        method: 'GET',
        url: '/places'
    });
}

function post_place(req_data) {
    return axios({
        method: 'POST',
        url: '/postplace',
        data: req_data
    })
}

export { get_places, post_place };