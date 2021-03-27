import { IMedia } from './media';

export interface IViewedArticle {
  title: string;
  abstract: string;
  media: IMedia[];
  published_date: string;
  byline: string;
  url: string;
}
