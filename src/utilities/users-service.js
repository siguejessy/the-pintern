import * as usersAPI from './users-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData)
  localStorage.setItem('token', token);
  return getUser();
}

export function logOut() {
  localStorage.removeItem('token');
}

export function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));

  // Check if the token is expired & remove if it is
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }

  return token;
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}

export function getUser() {
  const token = getToken();

  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function checkToken() {
  return usersAPI.checkToken()
  .then(dateStr => new Date(dateStr));
}