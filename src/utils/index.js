import queryString from 'query-string';
import { format } from 'date-fns';

// Session Storage
export function setSessionStore(key, value) {
  return sessionStorage.setItem(key, JSON.stringify(value));
}
export function getSessionStore(key) {
  return JSON.parse(sessionStorage.getItem(key));
}
export function removeSessionStore(key) {
  return sessionStorage.removeItem(key);
}
export function clearSessionStore() {
  return sessionStorage.clear();
}

// Local Storage
export function setLocalStore(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}
export function getLocalStore(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function removeLocalStore(key) {
  return localStorage.removeItem(key);
}
export function clearLocalStore() {
  return localStorage.clear();
}

// Encode
export function getEncode(value) {
  return encodeURI(encodeURIComponent(value));
}

// Decode
export function getDecode(value) {
  return decodeURI(decodeURIComponent(value));
}

// GetParse
export function getParse(type, data) {
  if (type === 'query') {
    return queryString.parse(data);
  } else if (type === 'json') {
    return JSON.parse(data);
  }
}

// GetStringfy
export function getStringfy(type, data) {
  if (type === 'query') {
    return queryString.stringify(data);
  } else if (type === 'json') {
    return JSON.stringify(data);
  }
}

// GetEllipsis
export function getEllipsis(text, length, lastText) {
  if (length === "" || length === null) {
    length = 100;
  }
  if (lastText === "" || lastText === null) {
    lastText = "...";
  }
  if (text.length > length) {
    text = text.substr(0, length) + lastText;
  }
  return text;
}

// GetText
export function getText(html, length) {
  return html.replace(/<[^>]*>?/gm, '').slice(0, length);
}

// Date Format
export function formatDate8(date){
  return date.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
}
export function formatDate14(date){
  return date.replace(/(\d{4})(\d{2})(\d{2})(\d{6})/, '$1-$2-$3');
}
export function formatDateTime(date){
  return date.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5:$6');
}
export function getDate(date, type = 'yyyy-MM-dd') {
  return format(new Date(date), type);
}
export function getDateTime(date, type = 'yyyy-MM-dd HH:mm') {
  return format(new Date(date), type);
}

// GetShareUrl
export function getShareUrl(event) {
  const target = event.target.nextSibling;
  target.select();
  target.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("URL이 클립보드에 복사되었습니다.");
}