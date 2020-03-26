import { ViewerCount } from '../../interfaces/viewer';

export const viewerPagesReducerStates = {
  countItems: [],
};

const VIEWER_PAGES_INIT_COUNT_ACTION = 'InitCount';
const VIEWER_PAGES_ADD_COUNT_ACTION = 'AddCount';

export const initCount = () => ({
  type: VIEWER_PAGES_INIT_COUNT_ACTION,
});

export const addCount = (countData: ViewerCount) => ({
  type: VIEWER_PAGES_ADD_COUNT_ACTION,
  payload: countData,
});

// countItems 중복 제거
const getNewCountItems = (wholeItem: ViewerCount[], newItem: ViewerCount): ViewerCount[] => {
  const { index } = newItem;
  let existIndex = -1;

  wholeItem.some((item) => {
    if (item.index === index) {
      existIndex = index;
      return true;
    }
    return false;
  });

  if (existIndex > -1) {
    return wholeItem.map((item) => {
      if (item.index === existIndex) {
        return newItem;
      }
      return item;
    });
  }

  return [...wholeItem, newItem];
};

export const viewerPagesReducer = (state = viewerPagesReducerStates, action) => {
  switch (action.type) {
    case VIEWER_PAGES_ADD_COUNT_ACTION: {
      const data = action.payload;
      return {
        ...state,
        countItems: getNewCountItems(state.countItems, data),
      };
    }
    case VIEWER_PAGES_INIT_COUNT_ACTION: {
      return {
        ...state,
        countItems: [],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
