const TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const USER = "user_data";

const TokenService = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  getUserData() {
    return localStorage.getItem(USER);
  },

  saveToken(accessToken: string) {
    localStorage.setItem(TOKEN_KEY, accessToken);
  },

  saveUserData(userData: string) {
    localStorage.setItem(USER, JSON.stringify(userData));
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  },

  removeUserData() {
    localStorage.removeItem(USER);
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },

  saveRefreshToken(refreshToken: string): void {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  },

  removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },
};

export default TokenService;
