import { mount } from 'enzyme';
import { IViewedArticle } from '../../common/interfaces/entities';
import ArticleList, { filteredValues } from './ArticleList';

const articles: IViewedArticle[] = [
  {
    abstract: 'abstract',
    byline: 'By Javier',
    media: [],
    published_date: '',
    title: 'Javier title',
    url: '',
  },
  {
    abstract: 'abstract',
    byline: 'By Jaime',
    media: [],
    published_date: '',
    title: 'Jaime title',
    url: '',
  },
];

describe('filteredValues should filter', () => {
  expect(filteredValues(articles, 'Javier')).toHaveLength(1);
});

describe('ArticleList', () => {
  const wrapper = mount(<ArticleList />);

  it('should render without crashing', () => {
    expect(wrapper).toBeTruthy();
  });
});
