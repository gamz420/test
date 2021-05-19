import { NAVIGATION_ACTION_TYPE } from './navigation.constant';
import { LangStoreAction } from './navigation.type';

const initialState = {
  activePath: null,
  pageLoading: true,
  query: {},
};

export const navigationStore = (
  state = initialState,
  action: LangStoreAction,
) => {
  switch (action.type) {
    case NAVIGATION_ACTION_TYPE.SET_ACTIVE_PATH:
      return {
        ...state,
        activePath: action.activePath,
        query: { ...state.query, ...action.query },
      };
    case NAVIGATION_ACTION_TYPE.SET_PAGE_LOADING:
      return {
        ...state,
        pageLoading: action.pageLoading,
      };
    case NAVIGATION_ACTION_TYPE.SET_QUERY: {
      return {
        ...state,
        query: { ...state.query, ...action.query },
      };
    }
    default:
      return state;
  }
};
