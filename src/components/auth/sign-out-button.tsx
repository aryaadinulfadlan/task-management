import { useUserSession } from "@/store";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function SignOutButton() {
  const navigate = useNavigate();
  const { logout } = useUserSession();
  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("Successfully logout!");
  };
  return (
    <div
      onClick={handleLogout}
      className="flex items-center gap-4 p-3 hover:bg-sidebar-ring/20 dark:hover:bg-secondary cursor-pointer"
    >
      <LuLogOut className="size-4 md:size-5" />
      <span className="font-bold text-sm md:text-base">Sign Out</span>
    </div>
  );
}
