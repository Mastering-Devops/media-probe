import { Dispatch } from 'react';
import { IAction } from '../action';
import { IRootState } from './root-state';

export interface IMainContext {
  state: IRootState;
  dispatch?: Dispatch<IAction>;
}
