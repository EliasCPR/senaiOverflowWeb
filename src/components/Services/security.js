import jwtDecode from "jwt-decode";
import { api } from "./api";

const USER_KEY = "@user";

export const signIn = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));

  //setando o token como padrão em todas as requisições
  api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
};

export const signOut = () => {
  localStorage.removeItem(USER_KEY);

  api.defaults.headers.common["Authorization"] = undefined;
};

export const getUser = () => {
  const { user } = JSON.parse(localStorage.getItem(USER_KEY));

  return user;
};

export const setUser = (user) => {
  const user = JSON.parse(localStorage.getItem(USER_KEY));

  user.user = user;

  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const isSignedIn = () => {

  //recupera o user do localstorage
  const user = JSON.parse(localStorage.getItem(USER_KEY));
  //verifica se existe user e existe um token
  if (user && user.token) {
    const jwtDecoded = jwtDecode(user.token);

    const nowTime = (Date.now() / 1000) | 0;

    if (jwtDecoded.exp < nowTime) {
      return signOut();
    }

    api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    return true;
  }

  return false;
};
