import { IArticle } from './entities';

export interface IRootState {
  currentArticle: IArticle | undefined;
}
