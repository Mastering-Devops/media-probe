import { IViewedArticle } from '../../common/interfaces/entities';

export interface ArticleDetailProps {
  article: IViewedArticle;
  onBack: () => void;
}

export interface ArticleDetailParams {
  year: string;
  month: string;
  day: string;
  section: string;
  subsection: string;
  reference: string;
}
