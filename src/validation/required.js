export default function required(value) {
  return !value || value.trim() === "" ? "Required" : undefined;
}
