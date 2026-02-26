
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");
  if (redirect) {
    const target = redirect.startsWith("/") ? redirect : `/${redirect}`;
    params.delete("redirect");
    const qs = params.toString();
    const newUrl = `${target}${qs ? `?${qs}` : ""}${window.location.hash}`;
    window.history.replaceState(null, "", newUrl);
  }

  createRoot(document.getElementById("root")!).render(<App />);
  
