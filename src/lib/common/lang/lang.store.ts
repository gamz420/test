import { LangStoreAction } from './lang.type';

import { LANG_DEFAULT } from '../../../main/lang';
import { LANG_ACTION_TYPE } from './lang.constant';

const initialState = {
  active: LANG_DEFAULT,
};

export const langStore = (state = initialState, action: LangStoreAction) => {
  switch (action.type) {
    case LANG_ACTION_TYPE.SET_LANG: {
      return {
        ...state,
        active: String(action.active).toUpperCase(),
      };
    }
    default:
      return state;
  }
};
