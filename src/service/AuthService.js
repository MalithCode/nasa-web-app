// AuthService.js
export const SetSession = (token) => {
  localStorage.setItem("token", token);
  localStorage.setItem("status", "success");
};

export const GetSession = () => {
  return localStorage.getItem("token");
};

export const ClearSession = () => {
  localStorage.clear();
};

export const isAuthenticated = () => {
  const token = GetSession();
  if (token) {
    return true;
  }
  return false;
};
