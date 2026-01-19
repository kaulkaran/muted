import { Routes, Route } from "react-router-dom";
import { routes } from "./routeConfig";
import PageWrapper from "../components/layout/PageWrapper";
import ChatLayout from "../pages/Chat/ChatLayout";
import MessagesPage from "../pages/Chat/MessagesPage";
import ContactsPage from "../pages/Chat/ContactsPage";
import FilesPage from "../pages/Chat/FilesPage";
import ProtectedRoute from "./ProtectedRoute";
import ProfileSettings from "../pages/Settings/ProfileSettings";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<PageWrapper>{element}</PageWrapper>}
        />
      ))}

      {/* Protected Chat Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/chat" element={<ChatLayout />}>
          <Route index element={<MessagesPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="files" element={<FilesPage />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Route>

    </Routes>
  );
};


export default AllRoutes;