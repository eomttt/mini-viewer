import { EpubNcxItem } from '../books';

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
