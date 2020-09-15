export function moodEntryFormDidSubmit() {
  return {
    type: "MOOD_ENTRY_FORM_DID_SUBMIT",
  };
}

export function updateToken(content) {
  return {
    type: "UPDATE_TOKEN",
    payload: content,
  };
}

export function updateUser(content) {
  return {
    type: "UPDATE_USER",
    payload: content,
  };
}

export function reset() {
  return {
    type: "RESET",
  };
}
