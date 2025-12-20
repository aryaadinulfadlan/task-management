import { Route, Routes } from "react-router";
import Header from "./components/header";
import { ThemeProvider } from "./components/theme-provider";
import LandingPage from "./pages/public/landing";
import HomePage from "./pages/protected/home";
import ProtectedRoute from "./components/protected-route";
import PublicRoute from "./components/public-route";
import LoginPage from "./pages/public/login";
import RegisterPage from "./pages/public/register";
import NotFoundPage from "./pages/not-found";
import ProtectedLayout from "./components/protected-layout";
import TodosPage from "./pages/protected/todos";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/todos" element={<TodosPage />} />
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
