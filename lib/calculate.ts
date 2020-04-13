import {
  VIEWER_PAGE_GAP,
  VIEWER_WIDTH_RATIO,
  VIEWER_HEIGHT_RATIO,
} from '../constants/viewer';

export const getSpineViewerCount = (
  spineScrollWidth: number,
  viewerWidth: number,
): number => Math.floor(spineScrollWidth / (viewerWidth + VIEWER_PAGE_GAP));

export const getTagPostion = (
  tagElementScroll: number,
  tagSpineIndex: number,
  viewerWidth: number,
): number => {
  const pageMargin = (window.innerWidth - viewerWidth) / 2;
  const pageScroll = Math.floor(
    tagElementScroll - (tagSpineIndex * viewerWidth) - pageMargin,
  );
  return Math.floor(pageScroll / viewerWidth);
};

export const getViewerWidth = (): number => Math.floor(window.innerWidth * (VIEWER_WIDTH_RATIO / 100));
export const getViewerHeight = (): number => Math.floor(window.innerHeight * (VIEWER_HEIGHT_RATIO / 100));
export const getMenuHeight = (): number => (
  (window.innerHeight - Math.floor(window.innerHeight * (VIEWER_HEIGHT_RATIO / 100))) / 2
);
export const getScrollLeft = (offset: number, viewerWidth: number): number => (
  Math.floor(offset * (viewerWidth + VIEWER_PAGE_GAP))
);
