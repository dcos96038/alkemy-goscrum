import React from "react";
import {Route, Routes} from "react-router-dom";

import AuthRoutes from "./AuthRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AuthRoutes />} path="auth/*" />
    </Routes>
  );
};

export default AppRouter;
