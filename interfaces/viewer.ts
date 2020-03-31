export interface ViewerState {
  viewerCountList: ViewerCount[];
  viewerPageCount: number;
  viewerWholePageCount: number;
  viewerSpineId: string;
  viewerSpineOffset: number;
  viewerLink?: ViewerLink;
  viewerLinkPageOffset?: ViewerLinkPageOffset;
}

export interface ViewerSettingState extends ViewerStyle {
  viewerWidth: number;
  viewerHeight: number;
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

export interface ViewerLinkPageOffset extends ViewerLink {
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
