import {
  EpubNcxItem,
  EpubSpineItem,
  EpubBookViewer,
} from '../books';

export interface ViewerBottomProps {
  menuHeight: number;
}

export interface ViewerSliderProps {
  maxValue: number;
}

export interface ViewerHeaderProps {
  menuHeight: number;
}

export interface ViewerNcxProps {
  ncxItem?: EpubNcxItem;
}

export interface ViewerSettingColorItemProps {
  label: string;
  value: number | string;
  colors: string[];
  action: (param: string | number) => void;
}

export interface ViewerSettingCountItemProps {
  label: string;
  value: string | number;
  valueUnit: number;
  minValue: number;
  maxValue: number;
  action: (param: string | number) => void;
}

export interface ViewerPageControllerProps {
  menuHeight: number;
  book: EpubBookViewer;
}

export interface ViewerPagesProps {
  spines: EpubSpineItem[];
  spineViewers: string[];
}

export interface ViewerPageProps {
  spineIndex: number;
  spineViewer: string;
  spine: EpubSpineItem;
  isSetAllViewerCountList: boolean;
  toggleCalculateCount: boolean;
  setCountCallback: (count: number, index: number) => void;
}

