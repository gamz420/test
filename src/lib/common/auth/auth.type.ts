export enum AUTH_USER_DATA {
  ID = 'id',
}

export interface AuthUserDto {
  id: number;
}

export interface AuthStoreState {
  token: string | null;
  logged: boolean | null;
  user: AuthUserDto | null;
}

export interface AuthStoreAction extends AuthStoreState {
  type: AUTH_ACTION_TYPE;
}

export enum AUTH_ACTION_TYPE {
  SET_DATA = 'AUTH.SET_DATA',
}
