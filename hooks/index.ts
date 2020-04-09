import { useMemo } from 'react';

import { EpubSpineItem, BookListItem } from '../interfaces/books';
import { ViewerCount } from '../interfaces/viewer';

import { getLibraryOrder } from '../lib/localStorage';

import { VIEWER_PAGE_GAP } from '../constants/viewer';

export const useSpineIndex = (
  viewerCountList: ViewerCount[],
  viewerPageCount: number,
): number => useMemo(() => {
  let spineIndex = -1;
  let accurateCount = 0;
  viewerCountList.some((viewerCount) => {
    if (accurateCount + viewerCount.count > viewerPageCount) {
      spineIndex = viewerCount.index;
      return true;
    }
    accurateCount += viewerCount.count;
    return false;
  });
  return spineIndex;
}, [viewerPageCount]);

export const useSpineLinkInfo = (
  viewerCountList: ViewerCount[],
  selectedLink: {
    href: string;
    tag: string;
  },
): {
  index: number;
  tag: string;
} => useMemo(() => {
  const { href, tag } = selectedLink;
  let spineIndex = -1;
  viewerCountList.some((viewerCount) => {
    if (href.includes(viewerCount.href)) {
      spineIndex = viewerCount.index;
      return true;
    }
    return false;
  });

  return {
    index: spineIndex,
    tag,
  };
}, [selectedLink]);

export const useSpinePosition = (
  viewerCountList: ViewerCount[],
  viewerPageCount: number,
  viewerIndex: number,
): number => useMemo(() => {
  if (viewerCountList.length > 0) {
    let columnOffset = viewerPageCount;
    viewerCountList.some((viewerCount, index) => {
      if (index < viewerIndex) {
        columnOffset -= (viewerCount.count);
        return false;
      }
      return true;
    });
    return columnOffset < 0 ? 0 : columnOffset;
  }
  return -1;
}, [viewerPageCount, viewerIndex]);

export const useIsSetAllViewerCountList = (
  viewerCountList: ViewerCount[],
  spines: EpubSpineItem[],
): boolean => useMemo(() => viewerCountList.length >= spines.length, [viewerCountList, spines]);

export const usePageWithWithRatio = (
  nowWidth: number, newRatio: number,
): number => useMemo(() => Math.floor(Number(nowWidth) * (Number(newRatio) / 100)), [nowWidth, newRatio]);

export const useOrderedBookList = (
  bookListItems: BookListItem[] | null,
): BookListItem[] | null => useMemo(
  () => {
    if (bookListItems) {
      const orderedItems = getLibraryOrder();
      if (bookListItems && orderedItems) {
        const newOrderedItems: BookListItem[] = [];
        orderedItems.forEach((orderedItem) => {
          bookListItems.some((bookListItem) => {
            if (bookListItem.fileName === orderedItem) {
              newOrderedItems.push(bookListItem);
              return true;
            }
            return false;
          });
        });

        bookListItems.forEach((bookListItem) => {
          if (!newOrderedItems.includes(bookListItem)) {
            newOrderedItems.push(bookListItem);
          }
        });
        return [...newOrderedItems];
      }
    }
    return null;
  }, [bookListItems],
);

export const useIsFirstPage = (viewerPageCount: number): boolean => useMemo(
  () => viewerPageCount === 0, [viewerPageCount],
);
export const useIsLastPage = (viewerPageCount: number, viewerWholePageCount: number): boolean => useMemo(
  () => viewerPageCount === viewerWholePageCount,
  [viewerPageCount, viewerWholePageCount],
);

export const useScrollLeft = (offsetNumber: number, viewerWidth: number): number => useMemo(
  () => Math.floor(offsetNumber * (viewerWidth + VIEWER_PAGE_GAP)),
  [offsetNumber, viewerWidth],
);
