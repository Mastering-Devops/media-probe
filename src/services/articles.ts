import { apiUrls } from '../common/constants/apiUrls';
import { ArticleResponse } from '../common/interfaces/api-response';
import { IViewedArticle } from '../common/interfaces/entities';
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
