import { createRoot } from "react-dom/client";
import GlobalStyle from "./styles/globalStyles.js";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </StrictMode>
);
