import { Routes, Route } from "react-router";
import { ThemeProvider } from "./components/theme/theme-provider";
import NotFound from "./components/shared/NotFound";
import Login from "./components/pages/auth/Login";
import Signup from "./components/pages/auth/Signup";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Home from "./components/pages/Home/Home";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
