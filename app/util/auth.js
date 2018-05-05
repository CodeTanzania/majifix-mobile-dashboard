import jwtDecode from 'jwt-decode';

const isTokenExpired = (token) => {
  const expirationDate = jwtDecode(token).exp;

  if (expirationDate <= Math.round(Date.now() / 1000)) {
    // divided by 1000 to convert to unix timestamp
    return true;
  }
  return false;
};

export default isTokenExpired;
