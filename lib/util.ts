import { ViewerCount } from '../interfaces/viewer';

export const isProduction = () => process.env.NODE_ENV === 'production';

export const getPageCountBySpineId = (viewerCountList: ViewerCount[], spineId: string) => {
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
};

export const getMaxPageOffset = (viewerCountList: ViewerCount[], spineId: string) => {
  let pageOffset = 0;
  viewerCountList.some((viewerCount) => {
    if (viewerCount.spineId === spineId) {
      pageOffset = viewerCount.count;
      return true;
    }
    return false;
  });

  return pageOffset;
};


export const getString = (items: string[]) => items.reduce((acc, cur, index) => `${acc}${index > 0 ? ', ' : ''}${cur}`, '');
