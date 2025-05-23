import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/Global.css";
import App from "./routes/App";
// import { ProductContextProvider } from "./context/ProductContext";

createRoot(document.getElementById("root")).render(
  // <ProductContextProvider>
  <StrictMode>
    <App />
  </StrictMode>
  // {/* </ProductContextProvider> */}
);
