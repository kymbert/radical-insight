const initialState = {
  token: "",
  user: {}
};

const reset = (state) => {
  return {
    token: "",
    user: {}
  }
};

const updateToken = (state, payload) => {
  return {
    ...state,
    token: payload.token
  };
};

const updateUser = (state, payload) => {
  return {
    ...state,
    user: payload
  };
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "persist/REHYDRATE":
      return { ...state, persistedState: action.payload };
    case "UPDATE_TOKEN":
      return updateToken(state, action.payload);
    case "UPDATE_USER":
      return updateUser(state, action.payload);
    case "RESET":
      return reset(state);
    default:
      return state;
  }
};

const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    state = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;
