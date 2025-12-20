import { MdSpaceDashboard } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";
import SignOutButton from "./sign-out-button";

/* eslint-disable react-refresh/only-export-components */
export const privateNavLinks = [
  {
    href: "/home",
    label: "Home",
    icon: <MdSpaceDashboard className="size-4 md:size-5" />,
  },
  {
    href: "/todos",
    label: "Todos",
    icon: <LuListTodo className="size-4 md:size-5" />,
  },
];
export default function Sidebar() {
  const { pathname } = useLocation();
  return (
    <div className="grid gap-2 pt-10">
      {privateNavLinks.map(({ icon, label, href }) => (
        <Link
          to={href}
          key={label}
          className={cn(
            "flex items-center gap-4 p-3 hover:bg-sidebar-ring/20 dark:hover:bg-secondary",
            pathname === href && "bg-sidebar-ring/20 dark:bg-secondary"
          )}
        >
          {icon}
          <span className="font-bold text-sm md:text-base">{label}</span>
        </Link>
      ))}
      <SignOutButton />
    </div>
  );
}
