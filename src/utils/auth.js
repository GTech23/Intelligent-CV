import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const { exp } = jwtDecode(token);
    if (!exp) return true;

    const now = Date.now() / 1000;
    return exp < now;
  } catch (err) {
    return true;
  }
};

export const getValidToken = () => {
  const token = localStorage.getItem("token");
  if (!token || isTokenExpired(token)) {
    localStorage.removeItem("token");
    return null;
  }
  return token;
};
