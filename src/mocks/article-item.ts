export const articleItemMockWithMedia = {
  url: 'https://www.nytimes.com/2021/03/25/business/auto-shop-pennies.html',
  source: 'New York Times',
  published_date: '2021-03-25',
  updated: '2021-03-26 13:08:27',
  section: 'Business',
  subsection: '',
  byline: 'By Heather Murphy',
  type: 'Article',
  title:
    'A Man Demanded His Final Paycheck. The Auto Shop Delivered 91,500 Greasy Pennies.',
  abstract:
    'It’s not technically illegal to do so, according to the Department of Labor, but that doesn’t make it OK, according to the former employee’s new Instagram fans.',
  media: [
    {
      type: 'image',
      subtype: 'photo',
      caption: '',
      copyright: 'Olivia Oxley',
      approved_for_syndication: 1,
      'media-metadata': [
        {
          url:
            'https://static01.nyt.com/images/2021/03/24/multimedia/24xp-pennies-04/24xp-pennies-04-thumbStandard.jpg',
          format: 'Standard Thumbnail',
          height: 75,
          width: 75,
        },
        {
          url:
            'https://static01.nyt.com/images/2021/03/24/multimedia/24xp-pennies-04/24xp-pennies-04-mediumThreeByTwo210.jpg',
          format: 'mediumThreeByTwo210',
          height: 140,
          width: 210,
        },
        {
          url:
            'https://static01.nyt.com/images/2021/03/24/multimedia/24xp-pennies-04/24xp-pennies-04-mediumThreeByTwo440.jpg',
          format: 'mediumThreeByTwo440',
          height: 293,
          width: 440,
        },
      ],
    },
  ],
};

export const articleItemMockWithEmptyMedia = {
  url: 'https://www.nytimes.com/2021/03/25/business/auto-shop-pennies.html',
  source: 'New York Times',
  published_date: '2021-03-25',
  updated: '2021-03-26 13:08:27',
  section: 'Business',
  subsection: '',
  byline: 'By Heather Murphy',
  type: 'Article',
  title:
    'A Man Demanded His Final Paycheck. The Auto Shop Delivered 91,500 Greasy Pennies.',
  abstract:
    'It’s not technically illegal to do so, according to the Department of Labor, but that doesn’t make it OK, according to the former employee’s new Instagram fans.',
  media: [],
};

export const articleItemMockWithoutFormatRequired = {
  url: 'https://www.nytimes.com/2021/03/25/business/auto-shop-pennies.html',
  source: 'New York Times',
  published_date: '2021-03-25',
  updated: '2021-03-26 13:08:27',
  section: 'Business',
  subsection: '',
  byline: 'By Heather Murphy',
  type: 'Article',
  title:
    'A Man Demanded His Final Paycheck. The Auto Shop Delivered 91,500 Greasy Pennies.',
  abstract:
    'It’s not technically illegal to do so, according to the Department of Labor, but that doesn’t make it OK, according to the former employee’s new Instagram fans.',
  media: [
    {
      type: 'image',
      subtype: 'photo',
      caption: '',
      copyright: 'Olivia Oxley',
      approved_for_syndication: 1,
      'media-metadata': [
        {
          url:
            'https://static01.nyt.com/images/2021/03/24/multimedia/24xp-pennies-04/24xp-pennies-04-thumbStandard.jpg',
          format: 'Standard Thumbnail',
          height: 75,
          width: 75,
        },
      ],
    },
  ],
};
