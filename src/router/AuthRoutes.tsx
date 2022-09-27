import React from "react";
import {Routes, Route} from "react-router-dom";

import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<LoginScreen />} path="/" />
      <Route element={<RegisterScreen />} path="/register" />
    </Routes>
  );
};

export default AuthRoutes;
