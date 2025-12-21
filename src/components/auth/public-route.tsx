import { Navigate, Outlet } from "react-router";
import { useUserSession } from "@/store";

export default function PublicRoute() {
  const { token } = useUserSession();
  return token ? <Navigate to={"/home"} /> : <Outlet />;
}
