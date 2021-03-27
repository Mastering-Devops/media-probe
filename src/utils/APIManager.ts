import axios, { AxiosResponse } from 'axios';

interface IRequestConfig {
  params?: {
    [x: string]: number | string;
  };
}

export const APIManager = {
  get<T>(url: string, config: IRequestConfig = {}): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: {
            'api-key': process.env.REACT_APP_API_TOKEN,
            ...config.params,
          },
        })
        .then((response: AxiosResponse<T>) => resolve(response))
        .catch((error) => reject(error));
    });
  },
};
