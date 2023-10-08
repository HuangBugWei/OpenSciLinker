import { useEffect, useState } from "react";
import FrontPage from "./pages/frontPage";
import SignInSide from "./pages/signIn";
import { Route, Routes, Navigate } from "react-router-dom";
import ProjectPage from "./pages/projectPage";
import { useBar } from "./hooks/hooks";

function App() {
  const { auth, setAuth, location } = useBar();
  return (
    <div style={{ margin: 0 }}>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
