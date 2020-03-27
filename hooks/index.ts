import { useMemo } from 'react';

export const useViewerIndex = (viewerCountList, viewerPageCount) => useMemo(() => {
  let spineIndex = 0;
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

export const usePageOffset = (viewerCountList, viewerPageCount, viewerIndex) => useMemo(() => {
  let columnOffset = viewerPageCount;
  viewerCountList.some((viewerCount, index) => {
    if (index < viewerIndex) {
      columnOffset -= (viewerCount.count);
      return false;
    }
    return true;
  });
  return columnOffset;
}, [viewerCountList, viewerPageCount, viewerIndex]);

export const usePageCountBySpineId = (viewerCountList, spineId) => useMemo(() => {
  let pageCountIndex = -1;
  let pageCount = -1;
  viewerCountList.some((viewerCount, index) => {
    if (viewerCount.spineId === spineId) {
      pageCountIndex = index;
      return true;
    }
    return false;
  });

  if (pageCountIndex > -1) {
    pageCount = 0;
    viewerCountList.some((viewerCount, index) => {
      if (index < pageCountIndex) {
        pageCount += viewerCount.count;
        return false;
      }
      return true;
    });
  }

  return pageCount;
}, [viewerCountList, spineId]);
