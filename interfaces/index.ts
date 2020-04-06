import { EpubBookViewer } from './books';
import { ViewerState, ViewerSettingState } from './viewer';

export interface ReducerAction {
  type: string;
  payload: any;
}

export interface ReducerStates {
  book: EpubBookViewer | null;
  viewer: ViewerState;
  viewerSetting: ViewerSettingState;
}
