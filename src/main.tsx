import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";
import "./index.css";
import App from "./App.tsx";
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        gray: {
          50: "#f9f9f9",
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider value={system}>
      <App />
    </Provider>
  </StrictMode>
);
