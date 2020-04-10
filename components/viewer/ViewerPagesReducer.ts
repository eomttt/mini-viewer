import { ReducerAction } from '../../interfaces/index';
import { ViewerCount } from '../../interfaces/viewer';

interface ViewerPageReducerAction extends ReducerAction {
  payload?: {
    countData?: ViewerCount;
  };
}
interface ViewerPagesStates {
  countItems: ViewerCount[];
}

export const initialState: ViewerPagesStates = {
  countItems: [],
};

const VIEWER_PAGES_INIT_COUNT_ACTION = 'InitCount';
const VIEWER_PAGES_ADD_COUNT_ACTION = 'AddCount';

export const initCount = (): ViewerPageReducerAction => ({
  type: VIEWER_PAGES_INIT_COUNT_ACTION,
});

export const addCount = (
  countData: ViewerCount,
): ViewerPageReducerAction => ({
  type: VIEWER_PAGES_ADD_COUNT_ACTION,
  payload: {
    countData,
  },
});

const getNewCountItems = (
  wholeItem: ViewerCount[],
  newItem: ViewerCount,
): ViewerCount[] => {
  const { index } = newItem;
  const newWholeItem = [...wholeItem];
  newWholeItem[index] = newItem;
  return [...newWholeItem];
};

export const reducer = (
  state = initialState,
  action: ViewerPageReducerAction,
): ViewerPagesStates => {
  switch (action.type) {
    case VIEWER_PAGES_ADD_COUNT_ACTION: {
      const { payload } = action;
      const { countData } = payload;
      return {
        ...state,
        countItems: getNewCountItems(state.countItems, countData),
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
