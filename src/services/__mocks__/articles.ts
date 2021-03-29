import { IViewedArticle } from '../../common/interfaces/entities';
import { Period } from '../../common/types';

const viewedArticles: IViewedArticle[] = [
  {
    abstract: 'Abstract',
    byline: 'By Me',
    media: [],
    published_date: '2021-03-25',
    title: 'Title',
    url: '',
  },
];

export function getArticles(period: Period = '7'): Promise<IViewedArticle[]> {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(viewedArticles));
  });
}
