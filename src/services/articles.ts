import { AxiosResponse } from 'axios';
import { apiUrls } from '../common/constants/apiUrls';
import { ArticleResponse } from '../common/interfaces/api-response';
import { ArticleSearchResponse } from '../common/interfaces/api-response/article-search';
import { Period } from '../common/types';
import { APIManager } from '../utils/APIManager';

export const ArticleApi = {
  getArticles: (
    period: Period = '7',
  ): Promise<AxiosResponse<ArticleResponse>> => {
    const url = `${apiUrls.MOST_VIEWED_ARTICLES}/${period}.json`;
    return APIManager.get(url);
  },
  searchArticles: (
    year: string,
    month: string,
    day: string,
    section: string,
    subsection: string,
    title: string,
  ): Promise<AxiosResponse<ArticleSearchResponse>> => {
    const url = `${apiUrls.SEARCH_ARTICLES}`;
    const params = {
      q: `${year}/${month}/${day}/${section}${
        subsection ? `/${subsection}` : ''
      }/${title}`,
    };
    return APIManager.get(url, { params });
  },
};
