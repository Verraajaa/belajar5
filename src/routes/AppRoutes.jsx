import { Routes, Route } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import NoteDetail from "../pages/NoteDetail";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Account from "../pages/Account";
import Login from "../pages/Login";
import ProtectedRoute from "../pages/ProtectedRoute";

function AppRoutes({ notes, setNotes, isLoggedIn }) {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute isLoggedId={isLoggedIn}>
            <Home notes={notes} setNotes={setNotes} />
          </ProtectedRoute>
        }
      />

      <Route path="/about" element={<About />} />

      <Route
        path="/notes/:id"
        element={<NoteDetail notes={notes} />}
      />

      <Route path="/settings" element={<Settings />}>
        <Route path="profile" element={<Profile />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
