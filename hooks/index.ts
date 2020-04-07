import { useMemo } from 'react';

import { EpubSpineItem } from '../interfaces/books';
import { ViewerCount } from '../interfaces/viewer';

import { getLibraryOrder } from '../lib/localStorage';

export const useSpineIndex = (
  viewerCountList: ViewerCount[],
  viewerPageCount: number,
) => useMemo(() => {
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
}, [viewerCountList, viewerPageCount]);

export const useSpinePosition = (
  viewerCountList: ViewerCount[],
  viewerPageCount: number,
  viewerIndex: number,
) => useMemo(() => {
  if (viewerCountList.length > 0) {
    let columnOffset = viewerPageCount;
    viewerCountList.some((viewerCount, index) => {
      if (index < viewerIndex) {
        columnOffset -= (viewerCount.count);
        return false;
      }
      return true;
    });
    return columnOffset;
  }
  return -1;
}, [viewerCountList, viewerPageCount, viewerIndex]);

export const useSetBookCount = (
  viewerCountList: ViewerCount[],
  spines: EpubSpineItem[],
) => useMemo(() => viewerCountList.length >= spines.length, [viewerCountList, spines]);

export const usePageWithWithRatio = (
  nowWidth: number, newRatio: number,
) => useMemo(() => Math.floor(Number(nowWidth) * (Number(newRatio) / 100)), [nowWidth, newRatio]);

export const useOrderedBookList = (bookListItems) => useMemo(() => {
  if (bookListItems) {
    const orderedItems = getLibraryOrder();
    if (bookListItems && orderedItems) {
      const newOrderedItems = [];
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
}, [bookListItems]);
