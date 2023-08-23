import React from "react";
import Login from "./pages/login/";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main.jsx";
import Template from "./pages/componentList/Template";
import Homepage from "./pages/Homepage";
import { Rebranding } from "./pages/rebranding/pages/rebrading";
import DefaultError from "./pages/templates/error-pages/default-error";
import AuthenticationError from "./pages/templates/error-pages/authentication-error";
import SystemFailureError from "./pages/templates/error-pages/system-failure-error";
import ServiceUnavailableError from "./pages/templates/error-pages/service-unavailable-error";
import LoadingTimeError from "./pages/templates/error-pages/loading-time-error";
import OfflineError from "./pages/templates/error-pages/offline-error";
import PageNotFoundError from "./pages/templates/error-pages/page-not-found-error";
import ClockError from "./pages/templates/error-pages/clock-error";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blip-ds-test-react" element={<Template />} />
      <Route path="/login-portal" element={<Login />} />
      <Route path="/main/*" element={<Main />} />
      <Route path="/rebranding/*" element={<Rebranding />} />
      <Route path="/templates/*" element={<DefaultError />} />
      <Route path="/default-error/*" element={<DefaultError />} />
      <Route path="/auth-error/*" element={<AuthenticationError />} />
      <Route path="/system-failure-error/*" element={<SystemFailureError />} />
      <Route path="/service-unavailable-error/*" element={<ServiceUnavailableError />} />
      <Route path="/loading-time-error/*" element={<LoadingTimeError />} />
      <Route path="/offline-error/*" element={<OfflineError />} />
      <Route path="/page-not-found-error/*" element={<PageNotFoundError />} />
      <Route path="/clock-error/*" element={<ClockError />} />
    </Routes>
  );
}
