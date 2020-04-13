import { EpubSpineItem, EpubBookViewer } from '../books';

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
