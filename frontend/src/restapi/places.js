import axios from "axios";

function get_places() {
  return axios({
    method: "GET",
    url: "http://localhost:3000/places",
  });
}

function post_place(req_data) {
  return axios({
    method: "POST",
    url: "http://localhost:3000/postplace",
    data: req_data,
  });
}

export { get_places, post_place };
