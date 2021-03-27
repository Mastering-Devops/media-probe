import { IViewedArticle } from './entities';

export interface IRootState {
  currentArticle: IViewedArticle | undefined;
}
