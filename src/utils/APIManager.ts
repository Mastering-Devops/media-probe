import axios from 'axios';

interface IRequestConfig {
  params?: {
    [x: string]: number | string;
  };
}

export const APIManager = {
  async get(url: string, config: IRequestConfig = {}) {
    return axios.get(url, {
      params: {
        'api-key': process.env.REACT_APP_API_TOKEN,
        ...config.params,
      },
    });
  },
};
