import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { UserDeletionPage } from "./pages/UserDeletionPage";
import { SupportPage } from "./pages/SupportPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: HomePage,
    },
    {
      path: "/index.html",
      Component: HomePage,
    },
    {
      path: "/privacy",
      Component: PrivacyPage,
    },
    {
      path: "/terms-and-conditions",
      Component: TermsPage,
    },
    {
      path: "/user-deletion",
      Component: UserDeletionPage,
    },
    {
      path: "/support",
      Component: SupportPage,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
