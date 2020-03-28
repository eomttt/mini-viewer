import { useMemo } from 'react';

export const usePagesOffset = (viewerCountList, viewerPageCount) => useMemo(() => {
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
