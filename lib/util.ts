import { ViewerCount } from '../interfaces/viewer';

export const isProduction = () => process.env.NODE_ENV === 'production';

export const getSpineIndexById = (
  viewerCountList: ViewerCount[],
  id: string,
) => {
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
) => {
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

export const getPageCountBySpineIndex = (viewerCountList: ViewerCount[], index: number) => {
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

export const getMaxSpinePosition = (viewerCountList: ViewerCount[], spineIndex: number) => {
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


export const getString = (items: string[]) => items.reduce((acc, cur, index) => `${acc}${index > 0 ? ', ' : ''}${cur}`, '');
