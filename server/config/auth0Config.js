import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "https://dev-ailu4icbwb268s5f.us.auth0.com/api/v2/",
  issuerBaseURL: "https://dev-ailu4icbwb268s5f.us.auth0.com",
});

export default jwtCheck;
