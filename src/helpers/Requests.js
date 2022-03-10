import axios from 'axios';

export default class Requests {
  constructor(options = {
    baseURL: 'https://api.hetic.camillearsac.fr',
    timeout: 10000
  }) {
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
          'Authorization': options.token
        },
      });
    }

    console.log('env', process.env)
    console.log('axios', { ...this.axios })
    console.log('options', options)

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.delete = this.delete.bind(this);
    this.patch = this.patch.bind(this);
  }

  get(url) {
    return this.axios.get(url);
  }

  post(url, data) {
    return this.axios.post(url, data);
  }

  delete(url) {
    return this.axios.delete(url);
  }

  patch(url, data) {
    return this.axios.patch(url, data);
  }
}
