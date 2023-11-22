import {jwtDecode} from 'jwt-decode';

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  // Check if token is present
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }

  try {
    const decodedToken = jwtDecode(token);

    if (
      decodedToken.exp !== undefined &&
      decodedToken.exp < Date.now() / 1000
    ) {
      // Token has expired
      return false;
    }

    // Token is present and not expired
    return true;
  } catch (error) {
    // Error decoding token (might be malformed)
    console.error("Error decoding token:", error);
    return false;
  }
};
