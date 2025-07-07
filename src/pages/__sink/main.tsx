import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../index.css";
import SinkPage from "@/pages/__sink/sink-page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SinkPage />
  </StrictMode>,
);
