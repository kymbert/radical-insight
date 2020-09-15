const initialState = {
  moodEntryFormDidSubmit: false,
  token: "",
  user: {},
};

const moodEntryFormDidSubmit = (state) => {
  return {
    ...state,
    moodEntryFormDidSubmit: !state.moodEntryFormDidSubmit,
  };
};

const reset = () => {
  return {
    moodEntryFormDidSubmit: false,
    token: "",
    user: {},
  };
};

const updateToken = (state, payload) => {
  return {
    ...state,
    token: payload.token,
  };
};

const updateUser = (state, payload) => {
  return {
    ...state,
    user: payload,
  };
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "persist/REHYDRATE":
      return { ...state, persistedState: action.payload };
    case "MOOD_ENTRY_FORM_DID_SUBMIT":
      return moodEntryFormDidSubmit(state);
    case "UPDATE_TOKEN":
      return updateToken(state, action.payload);
    case "UPDATE_USER":
      return updateUser(state, action.payload);
    case "RESET":
      return reset();
    default:
      return state;
  }
};

const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
