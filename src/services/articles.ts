import { AxiosResponse } from 'axios';
import { apiUrls } from '../common/constants/apiUrls';
import { ArticleResponse } from '../common/interfaces/api-response';
import { APIManager } from '../utils/APIManager';

type Period = '1' | '7' | '30';

export const NewsApi = {
  getArticles: (
    period: Period = '7',
  ): Promise<AxiosResponse<ArticleResponse>> => {
    const url = `${apiUrls.VIEWED_ARTICLES}/${period}.json`;
    return APIManager.get(url);
  },
};
