import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";
import Competitions from "./pages/Competitions";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/Profile.jsx";

function AnimatedRoutes() {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/results" element={<Results />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>

    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;