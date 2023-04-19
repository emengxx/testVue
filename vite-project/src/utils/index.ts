// 获取cookie 方法
export function getCookie(name: string) {
  const arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr != null) return decodeURIComponent(arr[2]);
  return null;
}
// 设置cookie 方法
export function setCookie(name: string, value: string, days: number) {
  const exp = new Date();
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toUTCString();
}
// 删除cookie 方法
export function delCookie(name: string) {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = getCookie(name);
  if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
}