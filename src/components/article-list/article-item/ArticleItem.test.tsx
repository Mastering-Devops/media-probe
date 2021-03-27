import { cleanup, render, screen } from '@testing-library/react';
import {
  articleItemMockWithMedia,
  articleItemMockWithEmptyMedia,
  articleItemMockWithoutFormatRequired,
} from '../../../mocks/article-item';
import ArticleItem from './ArticleItem';

describe('Article Item with image', () => {
  const onSelectMock = jest.fn((value) => {});

  afterEach(cleanup);

  it('should renders title', () => {
    render(
      <ArticleItem
        article={articleItemMockWithMedia}
        onSelect={onSelectMock}
      />,
    );
    const titleElement = screen.getByText(articleItemMockWithMedia.title);
    expect(titleElement).toBeInTheDocument();
  });

  it('should image not be present - empty media', () => {
    render(
      <ArticleItem
        article={articleItemMockWithEmptyMedia}
        onSelect={onSelectMock}
      />,
    );
    const { childNodes } = screen.getByTestId('article-image');
    expect(childNodes).toHaveLength(0);
  });

  it('should image not be present - missing format required', () => {
    render(
      <ArticleItem
        article={articleItemMockWithoutFormatRequired}
        onSelect={onSelectMock}
      />,
    );
    const { childNodes } = screen.getByTestId('article-image');
    expect(childNodes).toHaveLength(0);
  });

  it('should allow select article-item', () => {
    const { getByTestId } = render(
      <ArticleItem
        article={articleItemMockWithMedia}
        onSelect={onSelectMock}
      />,
    );
    const articleItem = getByTestId('article-item');
    articleItem.click();
    expect(onSelectMock).toHaveBeenCalled();
  });
});
