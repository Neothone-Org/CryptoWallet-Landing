
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  if (window.location.pathname === "/index.html") {
    const normalizedUrl = `${window.location.origin}/${window.location.search}${window.location.hash}`;
    window.history.replaceState(null, "", normalizedUrl);
  }

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
  
