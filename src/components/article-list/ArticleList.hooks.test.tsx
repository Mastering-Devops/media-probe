import { renderHook } from '@testing-library/react-hooks';
import { useViewedArticles } from './ArticleList.hooks';

import * as ArticlesService from '../../services/articles';
import { act } from '@testing-library/react';

test('should return  counter', () => {
  const spy = jest.spyOn(ArticlesService, 'getArticles');
  const { result } = renderHook(() => useViewedArticles('7'));
  act(() => {
    spy.mockResolvedValueOnce([]);
  });

  expect(spy).toHaveBeenCalledWith('7');
  expect(JSON.stringify(result.current[1])).toBe(JSON.stringify([]));
});
