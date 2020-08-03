export const AUTH_USER = "AUTH_USER";
export function authUser(userData) {
  return {
    type: AUTH_USER,
    userData,
  };
}

export const LOG_OUT = "LOG_OUT";
export function logOut() {
  return { type: LOG_OUT };
}
