import { useMemo } from 'react';

import { EpubSpineItem, BookListItem } from '../interfaces/books';
import { ViewerCount, ViewerLinkInfo } from '../interfaces/viewer';

import { getLibraryOrder } from '../lib/localStorage';
import { getScrollLeft } from '../lib/calculate';

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
  selectedLink: ViewerLinkInfo,
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
  let accurateCount = 0;
  let viewerIndexCount = 0;
  viewerCountList.some((viewerCount) => {
    if (viewerCount.index > viewerIndex) {
      return true;
    }
    accurateCount += viewerCount.count;
    viewerIndexCount = viewerCount.count;
    return false;
  });

  const positionOffset = accurateCount - viewerPageCount;
  // positionOffset <= 0 이면 현재 viewerIndex 에 count 가 넘어갔다는 이야기
  // viewerIndex 가 가질 수 있는 max page count (accurateCount) 가
  // 현재 viewerPageCount 보다 작기 때문
  // 즉, viewerIndex 가 바뀐 다음에 계산한 값을 넘겨주어야한다.
  if (positionOffset <= 0 || viewerCountList.length <= 0) {
    return -1;
  }
  return viewerIndexCount - positionOffset;
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
      if (orderedItems) {
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
      } else {
        return [...bookListItems];
      }
    }
    return [];
  }, [bookListItems],
);

export const useIsFirstPage = (viewerPageCount: number): boolean => useMemo(
  () => viewerPageCount === 0, [viewerPageCount],
);
export const useIsLastPage = (viewerPageCount: number, viewerWholePageCount: number): boolean => useMemo(
  () => viewerPageCount === viewerWholePageCount,
  [viewerPageCount, viewerWholePageCount],
);

export const useIsSetViewerSize = (width: number, height: number): boolean => useMemo(
  () => width > 0 && height > 0,
  [width, height],
);

export const useIsShowNowSpineIndexViewer = (nowViewerSpineIndex: number, spineIndex: number): boolean => useMemo(
  () => nowViewerSpineIndex === spineIndex,
  [nowViewerSpineIndex, spineIndex],
);

export const useScrollLeft = (offsetNumber: number, viewerWidth: number): number => useMemo(
  () => getScrollLeft(offsetNumber, viewerWidth),
  [offsetNumber, viewerWidth],
);
