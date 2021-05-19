import { AUTH_ACTION_TYPE, AuthStoreState, AuthStoreAction } from './auth.type';

const initialState: AuthStoreState = {
  token: null,
  logged: null,
  user: null,
};

export function authStore(
  state = initialState,
  action: AuthStoreAction,
): AuthStoreState {
  switch (action.type) {
    case AUTH_ACTION_TYPE.SET_DATA:
      return {
        ...state,
        token: action.token,
        user: action.user,
        logged: action.logged,
      };

    default:
      return state;
  }
}
