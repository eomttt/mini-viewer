export interface ViewerState {
  viewerCountList: ViewerCount[];
  viewerPageCount: number;
  viewerWholePageCount: number;
  viewerSpineIndex: number;
  viewerSpinePosition: number;
}

export interface ViewerSettingState extends ViewerStyle {
  viewerWidth: number;
  viewerHeight: number;
  backgroundColor: string;
  isOpenSettingMenu: boolean;
}

export interface ViewerStyle {
  widthRatio: number;
  fontSize: number;
  lineHeight: number;
}

export interface ViewerCount {
  index: number;
  count: number;
  spineId: string;
  href: string;
}

export interface SettingItem {
  label: string;
  key: string;
  value: number | string;
  valueUnit?: number;
  minValue?: number;
  maxValue?: number;
  colors?: string[];
  action: (param: number | string) => void;
}
