const initialState = {
  token: "",
  user: {}
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

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "persist/REHYDRATE":
      return { ...state, persistedState: action.payload };
    case "UPDATE_TOKEN":
      return updateToken(state, action.payload);
    case "UPDATE_USER":
      return updateUser(state, action.payload);
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default reducers;
