import { apiUrls } from '../common/constants/apiUrls';
import {
  ArticleSearchResponse,
  ArticleResponse,
} from '../common/interfaces/api-response';
import { IArticleSearch, IViewedArticle } from '../common/interfaces/entities';
import { Period } from '../common/types';
import { APIManager } from '../utils/APIManager';

export function getArticles(period: Period = '7'): Promise<IViewedArticle[]> {
  const url = `${apiUrls.MOST_VIEWED_ARTICLES}/${period}.json`;

  return new Promise((resolve, reject) => {
    APIManager.get<ArticleResponse>(url).then((response) =>
      resolve(response.data.results),
    );
  });
}

export function searchArticles(
  year: string,
  month: string,
  day: string,
  section: string,
  subsection: string,
  title: string,
): Promise<IArticleSearch[]> {
  const url = `${apiUrls.SEARCH_ARTICLES}`;
  const params = {
    q: `${year}/${month}/${day}/${section}${
      subsection ? `/${subsection}` : ''
    }/${title}`,
  };
  return new Promise((resolve, reject) => {
    APIManager.get<ArticleSearchResponse>(url, { params }).then((response) =>
      resolve(response.data.response.docs),
    );
    // .catch((error) => reject(error));
  });
  // return APIManager.get(url, { params });
}
