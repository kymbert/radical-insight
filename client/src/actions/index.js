export function updateToken(content) {
  return {
    type: "UPDATE_TOKEN",
    payload: content
  };
}

export function updateUser(content) {
  return {
    type: "UPDATE_USER",
    payload: content
  };
}


export function reset() {
  return {
    type: "RESET"
  };
}
