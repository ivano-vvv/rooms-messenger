export default function getItemFromSessionStorage(name) {
  return JSON.parse(sessionStorage.getItem(name));
}

export function getSavedUserId() {
  return getItemFromSessionStorage("userId");
}

export function getSavedUsername() {
  return getItemFromSessionStorage("username");
}

export function getSavedRoomId() {
  return getItemFromSessionStorage("roomId");
}

export function getDataForRejoin() {
  return {
    userId: getSavedUserId(),
    username: getSavedUsername(),
    roomId: getSavedRoomId(),
  };
}
