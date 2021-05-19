import { LANG } from '../../../main/lang';
import { LANG_ACTION_TYPE } from './lang.constant';

export interface AuthStoreState {
  active: LANG | null;
}

export interface LangStoreAction extends AuthStoreState {
  type: LANG_ACTION_TYPE;
}
