export interface ViewerState {
  viewerCountList: ViewerCount[];
  viewerPageCount: number;
}

export interface ViewerSettingState extends ViewerStyle {
  backgroundColor: string;
}

export interface ViewerStyle {
  fontSize: number;
  padding: number;
  lineHeight: number;
}

export interface ViewerCount {
  index: number;
  count: number;
  spineId: string;
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
