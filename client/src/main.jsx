import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ailu4icbwb268s5f.us.auth0.com"
      clientId="2xLld0j2yhJ66wc6IizqVYcVdvPC2Ghj"
      authorizationParams={{
        redirect_uri: "https://roamrental-client.vercel.app",
      }}
      audience="https://dev-ailu4icbwb268s5f.us.auth0.com/api/v2/"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
