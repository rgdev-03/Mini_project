export const getJwtPayload = (token) => {
    try {
      const [, payloadBase64] = token.split('.'); // Split the JWT token and extract the payload part
      const payloadJson = decodeURIComponent(atob(payloadBase64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')); // Decode the payload from base64 and decode URI components
      const payload = JSON.parse(payloadJson); // Parse the payload as JSON
      return payload;
    } catch (error) {
      console.error('Error extracting JWT payload:', error.message);
      return null;
    }
  };

export const getUserIdFromJwt = () => {
  const jwtToken = localStorage.getItem('json-web-token');

  // Call function to extract and print JWT payload
  const jwtPayload = getJwtPayload(jwtToken);
//   console.log('User:', jwtPayload.user_id);

  const userId = jwtPayload.user_id;
  return userId;

};