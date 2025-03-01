import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Login from "./Container/login";
import GlobalStyle from "./styles/globalStyles.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStyle />
    <Login />
  </BrowserRouter>
);
