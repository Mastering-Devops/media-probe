import axios from "axios";

export const APIManager = {
  async get(url: string) {
    return axios.get(url, {
      params: {
        "api-key": "jqg16VP0rtKyj9DXZ1xJDNLeU35BNRGL",
      },
    });
  },
};
