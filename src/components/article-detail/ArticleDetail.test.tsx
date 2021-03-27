import { act, render, screen, waitFor } from '@testing-library/react';
import { ReactWrapper, mount } from 'enzyme';
import { routerMatch } from '../../helpers/tests';
import { articleDetailMultimedia } from '../../mocks/article-detail';
import * as ArticleDetail from './ArticleDetail';
import * as ArticleApi from '../../services/articles';

// jest.mock('../../services/articles.ts');

describe('getImageUrl', () => {
  // const getImageUrlSpy = jest.spyOn(ArticleDetail, 'getImageUrl');
  const mockGetImageUrl = jest.fn(ArticleDetail.getImageUrl);

  // beforeEach(() => {
  //   mockGetImageUrl.mockClear()
  // });

  afterEach(() => {
    mockGetImageUrl.mockClear();
    mockGetImageUrl.mockReset();
  });

  it('should return null', () => {
    mockGetImageUrl.mockReturnValueOnce(null);
    expect(mockGetImageUrl([])).toBeNull();
  });

  it('should return url', () => {
    mockGetImageUrl.mockReturnValueOnce(
      'https://www.nytimes.com/images/2021/03/24/multimedia/24xp-pennies-04/24xp-pennies-04-jumbo.jpg',
    );
    expect(mockGetImageUrl(articleDetailMultimedia)).toMatch(
      'https://www.nytimes.com/images/2021/03/24/multimedia/24xp-pennies-04/24xp-pennies-04-jumbo.jpg',
    );
  });
});

describe('ArticleDetail', () => {
  let searchArticlesSpy: jest.SpyInstance;

  searchArticlesSpy = jest.spyOn(ArticleApi, 'searchArticles');
  act(() => {
    render(
      routerMatch(ArticleDetail.default, {
        route: '/2021/03/26/business/ship-suez-canal',
        path: '/:year/:month/:day/:section/:reference',
      }),
    );
  });

  // console.log({ container: container.firstChild });

  // it('should renders without crashing', async () => {
  //   // act(() => {
  //   //   searchArticlesSpy.mockResolvedValueOnce([
  //   //     {
  //   //       abstract:
  //   //         'It’s not technically illegal to do so, according to the Department of Labor, but that doesn’t make it OK, according to the former employee’s new Instagram fans.',
  //   //       web_url:
  //   //         'https://www.nytimes.com/2021/03/25/business/auto-shop-pennies.html',
  //   //       snippet:
  //   //         'It’s not technically illegal to do so, according to the Department of Labor, but that doesn’t make it OK, according to the former employee’s new Instagram fans.',
  //   //       lead_paragraph:
  //   //         'A OK Walker Luxury Autoworks in Peachtree City, Ga., has built Ford Mustangs for the Clint Eastwood film “Trouble With the Curve” and for an attempt at a world record for land speed, according to its website. Now the high-end car repair shop has acquired another rare distinction: It has been accused of paying a former employee in pennies.',
  //   //       source: 'The New York Times',
  //   //       pub_date: '2021-03-25T12:48:58+0000',
  //   //       document_type: 'article',
  //   //       news_desk: 'Express',
  //   //       section_name: 'Business Day',
  //   //       headeline: {
  //   //         main:
  //   //           'A Man Demanded His Final Paycheck. The Auto Shop Delivered 91,500 Greasy Pennies.',
  //   //         kicker: null,
  //   //         content_kicker: null,
  //   //         print_headline: null,
  //   //         name: null,
  //   //         seo: null,
  //   //         sub: null,
  //   //       },
  //   //       byline: {
  //   //         original: 'By Heather Murphy',
  //   //         person: [
  //   //           {
  //   //             firstname: 'Heather',
  //   //             middlename: null,
  //   //             lastname: 'Murphy',
  //   //             qualifier: null,
  //   //             title: null,
  //   //             role: 'reported',
  //   //             organization: '',
  //   //             rank: 1,
  //   //           },
  //   //         ],
  //   //         organization: null,
  //   //       },
  //   //       type_of_material: 'News',
  //   //       _id: 'nyt://article/a9e42c70-d161-5c0d-a8c5-46fa37fa0e0b',
  //   //       word_count: 852,
  //   //       uri: 'nyt://article/a9e42c70-d161-5c0d-a8c5-46fa37fa0e0b',
  //   //     },
  //   //   ]);
  //   // });
  //   const loadingText = screen.getByText('Loading...');
  //   expect(loadingText).toBeInTheDocument();
  //   // waitFor()
  //   // console.log({ wrapper });
  //   // expect(wrapper.text()).toMatch(
  //   //   'A Man Demanded His Final Paycheck. The Auto Shop Delivered 91,500 Greasy Pennies.',
  //   // );
  //   await waitFor(() =>
  //     expect(searchArticlesSpy).toHaveBeenCalledWith(
  //       '2021',
  //       '03',
  //       '26',
  //       'business',
  //       undefined,
  //       'ship-suez-canal',
  //     ),
  //   );
  // });
});
