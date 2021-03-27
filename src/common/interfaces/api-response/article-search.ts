import { IArticleSearch } from '../entities';

export interface ArticleSearchResponse {
  response: {
    docs: IArticleSearch[];
  };
}
