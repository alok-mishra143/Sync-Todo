import { Routes, Route } from "react-router";
import { ThemeProvider } from "./components/theme/theme-provider";
import NotFound from "./components/shared/NotFound";
import Login from "./components/pages/auth/Login";
import Signup from "./components/pages/auth/Signup";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Home from "./components/pages/Home/Home";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
