export interface ViewerState {
  viewerCountList: ViewerCount[];
  viewerPageCount: number;
}

export interface ViewerSettingState {
  fontSize: number;
  padding: number;
  lineHeight: number;
  backgroundColor: string;
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
  minValue?: number;
  maxValue?: number;
  colors?: string[];
  action: (param: number | string) => void;
}
