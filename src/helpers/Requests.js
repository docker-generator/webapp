import axios from 'axios';

export default class Requests {
  constructor(options = {
    baseURL: 'https://api.hetic.camillearsac.fr',
    timeout: 10000
  }) {
    this.options = options
    if (!options.token) {
      this.axios = axios.create({
        baseURL: options.baseURL || process.env.REACT_APP_BACKEND_URL,
        timeout: options.timeout,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      this.axios = axios.create({
        baseURL: options.baseURL || process.env.REACT_APP_BACKEND_URL,
        timeout: options.timeout,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': options.token,
        },
      });
    }

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.delete = this.delete.bind(this);
    this.patch = this.patch.bind(this);
  }

  get(url) {
    return this.axios.get(`${this.options.baseURL}${url}`);
  }

  post(url, data) {
    return this.axios.post(`${this.options.baseURL}${url}`, data);
  }

  delete(url) {
    return this.axios.delete(`${this.options.baseURL}${url}`);
  }

  patch(url, data) {
    return this.axios.patch(`${this.options.baseURL}${url}`, data);
  }

  put(url, data) {
    return this.axios.put(`${this.options.baseURL}${url}`, data);
  }
}
