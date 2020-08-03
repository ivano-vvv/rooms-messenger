export const CHANGE_VALUE = "CHANGE_VALUE";
export function changeValue(value) {
  return {
    type: CHANGE_VALUE,
    value,
  };
}

export const RESET_VALUE = "RESET_VALUE";
export function resetValue() {
  return {
    type: RESET_VALUE,
  };
}
