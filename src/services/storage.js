export const Storage = {
  response: () => localStorage.getItem('response'),
  setItems: response => localStorage.setItem('response', JSON.stringify(response))
}
