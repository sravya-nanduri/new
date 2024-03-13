export const getCookie = (name: string) => {
  const cookies = document.cookie.split(";");
  let cookieValue = "";
  cookies.forEach(item => {
    if (item.search(name) !== -1) {
      cookieValue = item.split("=")[1];
    }
  });
  return cookieValue;
}