export function normalizeName(value) {
  let tempValue = value.startsWith(" ") ? value.trim() : value;

  if (value) return maxLength40(tempValue);

  return value;
}

export function normalizeID(value) {
  if (value) return value.startsWith(" ") ? value.trim() : value;

  return value;
}

function maxLength40(value) {
  return maxLength(40, value);
}

function maxLength(n, value) {
  if (value) return value.slice(0, n);

  return value;
}
