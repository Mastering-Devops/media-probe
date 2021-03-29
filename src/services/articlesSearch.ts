import { apiUrls } from '../common/constants/apiUrls';
import { ArticleSearchResponse } from '../common/interfaces/api-response';
import { IArticleSearch } from '../common/interfaces/entities';
import { APIManager } from '../utils/APIManager';

export function searchArticles(
  year: string,
  month: string,
  day: string,
  section: string,
  subsection: string,
  title: string,
): Promise<IArticleSearch[]> {
  const url = `${apiUrls.ARTICLES_SEARCH}`;
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
}
