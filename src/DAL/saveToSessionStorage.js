export default function saveToSessionStorage(name, item) {
  sessionStorage.setItem(name, JSON.stringify(item));
}
