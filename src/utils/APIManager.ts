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
        'api-key': 'jqg16VP0rtKyj9DXZ1xJDNLeU35BNRGL',
        ...config.params,
      },
    });
  },
};
