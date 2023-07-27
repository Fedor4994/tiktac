import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import Layout from "./views/Layout/Layout";
import ProfilePage from "./views/ProfilePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
