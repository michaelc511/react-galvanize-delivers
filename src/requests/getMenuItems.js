export default function getMenuItems() {
  // gets the Response object and chain it
  // get response.json() to parse it
  return fetch('/data/menu-items.json').then(response => response.json());
}
