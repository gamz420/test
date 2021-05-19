import { NAVIGATION_ACTION_TYPE } from './navigation.constant';

export interface AuthStoreState {
  activePath: string | null;
  pageLoading: boolean | null;
  query: object;
}

export interface LangStoreAction extends AuthStoreState {
  type: NAVIGATION_ACTION_TYPE;
}
