let token;

const setToken = (_token) => {
  token = _token;
};

const getToken = () => {
  return token;
};

export const TokenService = {
  setToken,
  getToken,
};
