import { IViewedArticle } from '../../../common/interfaces/entities';

export interface ArticleItemProps {
  article: IViewedArticle;
  onSelect: (value: IViewedArticle) => void;
}

export type ArticleImageFormat =
  | 'Standard Thumbnail'
  | 'mediumThreeByTwo210'
  | 'mediumThreeByTwo440';
