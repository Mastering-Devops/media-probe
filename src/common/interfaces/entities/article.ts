import { IMedia } from './media';

export interface IArticle {
  title: string;
  abstract: string;
  media: IMedia[];
  published_date: string;
}
