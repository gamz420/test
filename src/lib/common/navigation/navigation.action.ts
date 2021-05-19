import { Dispatch } from 'redux';
import { NAVIGATION_ACTION_TYPE } from './navigation.constant';

export const setActivePath = (path: string | Function, query?: object) => {
  if (typeof path === 'function') {
    path = path();
  }

  return (dispatch: Dispatch) =>
    dispatch({
      type: NAVIGATION_ACTION_TYPE.SET_ACTIVE_PATH,
      activePath: path,
      query,
    });
};

export const setNavigationQuery = (query: object) => ({
  type: NAVIGATION_ACTION_TYPE.SET_QUERY,
  query,
});

export const setPageLoading = (pageLoading: boolean) => ({
  type: NAVIGATION_ACTION_TYPE.SET_PAGE_LOADING,
  pageLoading,
});
