import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { UserDeletionPage } from "./pages/UserDeletionPage";

export const router = createBrowserRouter([
  {
    path: "/",
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
]);
