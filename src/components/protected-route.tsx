import { useUserSession } from "@/store";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  const { token } = useUserSession();
  return token ? <Outlet /> : <Navigate to={"/login"} />;
}
