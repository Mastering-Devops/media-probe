import { IAction } from './common/action';
import { IRootState } from './common/interfaces/root-state';

export function reducer(state: IRootState, action: IAction): IRootState {
  switch (action.type) {
    case 'PICK_ARTICLE':
      return { currentArticle: action.payload };
    default:
      throw new Error();
  }
}
