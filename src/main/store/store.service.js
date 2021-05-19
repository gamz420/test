export const setLocalData = (key, value) => {
  if (typeof localStorage === 'undefined') {
    return null;
  }
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalData = (key) => {
  if (typeof localStorage === 'undefined') {
    return null;
  }

  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export const setSessionData = (key, value) => {
  return sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionData = (key, defaultValue = null) => {
  const data = sessionStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return defaultValue;
};

// Initital state

const defaultData = {
  pending: null,
  success: null,
  error: null,
  errorMessage: null,
  updating: null,
  updated: null,
};

export const initRequestState = () => ({
  pending: null,
  success: null,
  error: null,
  errorMessage: null,
});

export const initRequestWithDataState = (
  subData = null,
  additional = null,
) => ({
  ...defaultData,
  data: {},
  ...(subData ? { data: subData } : null),
  ...(additional ? { additional } : null),
});

export const setRequestPending = (state) => {
  state.error = defaultData.error;
  state.errorMessage = defaultData.errorMessage;
  state.success = defaultData.success;
  state.pending = true;
  return state;
};

export const setRequestSuccess = (state, data = null) => {
  state.error = false;
  state.errorMessage = false;
  state.success = true;
  state.pending = false;

  if (data) {
    state.data = data;
  }

  return state;
};

export const setRequestError = (state, message = null) => {
  state.error = true;
  state.errorMessage = message;
  state.updated = false;
  state.updating = false;
  state.success = false;
  state.pending = false;
  return state;
};

export const setRequestUpdatePending = (state) => {
  state.error = defaultData.error;
  state.errorMessage = defaultData.errorMessage;
  state.updating = true;
  state.updated = false;
  return state;
};

export const resetRequestStatus = (state) => {
  state.error = null;
  state.errorMessage = null;
  state.success = null;
  state.updated = null;

  return state;
};
export const resetRequestErrorStatus = (state) => {
  state.error = null;
  state.errorMessage = null;

  return state;
};
export const updateRequestPaginationData = (state, data) => {
  state.data.pagination = data.pagination;

  if (data.pagination.skip === 0) {
    state.data.list = data.list;
  } else {
    state.data.list = [...state.data.list, ...data.list];
  }

  return state;
};

export const updateRequestData = (state, data) => {
  state.data = { ...state.data, ...data };

  if (data.pagination) {
    state = updateRequestPaginationData(state, data);
  }

  return state;
};

export const setRequestUpdateSuccess = (state, data = null) => {
  state.updating = false;
  state.updated = true;

  if (data) {
    state = updateRequestData(state, data);
  }

  return state;
};

export const editRequestData = (state, fn) => {
  state.data = fn(state.data);
  return state;
};

export const isRequestPending = (state = {}) => !!state.pending;
export const isRequestSuccess = (state = {}) => !!state.success;
export const isRequestError = (state = {}) => !!state.error;
export const isRequestUpdatePending = (state = {}) => !!state.updating;
export const isRequestUpdateSuccess = (state = {}) => !!state.updated;
export const getRequestData = (state = {}, defaultValue = {}) =>
  state.data || defaultValue;
export const getRequestErrorMessage = (state = {}) =>
  state.errorMessage || null;
