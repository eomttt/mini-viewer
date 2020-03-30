export interface ViewerState {
  viewerWidth: number;
  viewerHeight: number;
  viewerCountList: ViewerCount[];
  viewerPageCount: number;
  viewerWholePageCount: number;
  viewerSpineId: string;
  viewerLink?: ViewerLink;
  viewerPageOffsetInfo?: ViewerPageOffsetInfo;
}

export interface ViewerSettingState extends ViewerStyle {
  backgroundColor: string;
  settingChangeToggle: boolean;
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
}

export interface ViewerLink {
  spineId: string;
  tag: string;
}

export interface ViewerPageOffsetInfo {
  spineId: string;
  offset: number;
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
