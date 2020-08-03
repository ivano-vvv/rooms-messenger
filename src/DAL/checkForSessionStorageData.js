import {
  getSavedUserId,
  getSavedUsername,
  getSavedRoomId,
} from "./getItemFromSessionStorage";
import clearSessionStorage from "./clearSessionStorage";

export default function checkForSessionStorageData() {
  if (getSavedUserId() && getSavedUsername() && getSavedRoomId()) {
    return true;
  }

  clearSessionStorage();

  return false;
}
