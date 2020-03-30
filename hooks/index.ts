import { useMemo } from 'react';
import { ViewerCount } from '../interfaces/viewer';

export const usePagesOffset = (
  viewerCountList: ViewerCount[], viewerPageCount: number,
) => useMemo(() => {
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

export const usePageOffset = (
  viewerCountList: ViewerCount[],
  viewerPageCount: number,
  viewerIndex: number,
) => useMemo(() => {
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

export const usePageWithWithRatio = (
  nowWidth: number, newRatio: number,
) => useMemo(() => Math.floor(Number(nowWidth) * (Number(newRatio) / 100)), [nowWidth, newRatio]);

export const useViewerSpineId = (
  viewerCountList: ViewerCount[],
  viewerPageCount: number,
) => useMemo(() => {
  let spineId = '';
  let accurateCount = 0;
  viewerCountList.some((viewerCount) => {
    if (accurateCount > viewerPageCount) {
      return true;
    }
    accurateCount += viewerCount.count;
    spineId = viewerCount.spineId;
    return false;
  });

  return spineId;
}, [viewerCountList, viewerPageCount]);
