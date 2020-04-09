import { EpubBookViewer } from './books';
import {
  ViewerState, ViewerSettingState,
  ViewerCount, ViewerLinkPagePosition, ViewerLink,
} from './viewer';

export interface BookPayload {
  book?: EpubBookViewer;
}

export interface ViewerPayload {
  countList?: ViewerCount[];
  spineIndex?: number;
  spinePosition?: number;
  wholeCount?: number;
  pageCount?: number;
  viewerLink?: ViewerLink;
  viewerLinkPosition?: ViewerLinkPagePosition;
}

export interface ViewerSettingPayload {
  width?: number;
  height?: number;
  fontSize?: number;
  widthRatio?: number;
  lineHeight?: number;
  backgroundColor?: string;
}

export interface ReducerAction {
  type: string;
}

export interface BookReducerAction extends ReducerAction {
  payload?: BookPayload;
}

export interface ViewerReducerAction extends ReducerAction {
  payload?: ViewerPayload;
}

export interface ViewerSettingReducerAction extends ReducerAction {
  payload?: ViewerSettingPayload; 
}

export interface ReducerStates {
  book: EpubBookViewer | null;
  viewer: ViewerState;
  viewerSetting: ViewerSettingState;
}
