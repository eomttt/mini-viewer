import { ViewerCount } from '../interfaces/viewer';

export const isProduction = (): boolean => process.env.NODE_ENV === 'production';

export const getSpineIndexById = (
  viewerCountList: ViewerCount[],
  id: string,
): number => {
  let spineIndex = -1;
  viewerCountList.some((viewerCount, index) => {
    if (viewerCount.spineId === id) {
      spineIndex = index;
      return true;
    }
    return false;
  });

  return spineIndex;
};

export const getSpineIndexByHref = (
  viewerCountList: ViewerCount[],
  href: string,
): number => {
  let spineIndex = -1;
  viewerCountList.some((viewerCount) => {
    if (href.includes(viewerCount.href)) {
      spineIndex = viewerCount.index;
      return true;
    }
    return false;
  });

  return spineIndex;
};

export const getPageCountBySpineIndex = (
  viewerCountList: ViewerCount[],
  index: number,
): number => {
  let accuratePageCount = 0;
  viewerCountList.some((viewerCount) => {
    if (viewerCount.index >= index) {
      return true;
    }
    accuratePageCount += viewerCount.count;
    return false;
  });

  return accuratePageCount;
};

export const getMaxSpinePosition = (
  viewerCountList: ViewerCount[],
  spineIndex: number,
): number => {
  let maxPagePosition = 0;
  viewerCountList.some((viewerCount) => {
    if (viewerCount.index === spineIndex) {
      maxPagePosition = viewerCount.count;
      return true;
    }
    return false;
  });

  return maxPagePosition;
};

export const getSpinePosition = (
  viewerCountList: ViewerCount[],
  noewSpinePosition: number,
  spineIndex: number,
): number => {
  const maxSpinePosition = getMaxSpinePosition(viewerCountList, spineIndex);
  return noewSpinePosition >= maxSpinePosition
    ? maxSpinePosition - 1
    : noewSpinePosition;
};

export const getString = (
  items: string[],
): string => items.reduce((acc, cur, index) => `${acc}${index > 0 ? ', ' : ''}${cur}`, '');
export const isWindowDefined = (): boolean => typeof window !== 'undefined';
