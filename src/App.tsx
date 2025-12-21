import { Route, Routes } from "react-router";
import Header from "./components/header";
import { ThemeProvider } from "./components/theme-provider";
import LandingPage from "./pages/public/landing";
import HomePage from "./pages/protected/home";
import LoginPage from "./pages/public/login";
import RegisterPage from "./pages/public/register";
import NotFoundPage from "./pages/not-found";
import TasksPage from "./pages/protected/tasks";
import ProtectedRoute from "./components/auth/protected-route";
import ProtectedLayout from "./components/auth/protected-layout";
import PublicRoute from "./components/auth/public-route";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/tasks" element={<TasksPage />} />
          </Route>
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
