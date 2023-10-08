import { Route, Routes, Navigate } from "react-router-dom";
import FrontPage from "./pages/frontPage";
import SignInSide from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ProjectPage from "./pages/projectPage";
import SearchPage from "./pages/searchPage";
import PostPage from "./pages/postPage";

function App() {
  return (
    <div style={{ margin: 0 }}>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
