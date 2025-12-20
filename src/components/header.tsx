import { ModeToggler } from "./mode-toggler";
import { Button } from "./ui/button";
import { useUserSession } from "@/store";
import GithubLink from "./github-link";
import MobileSidebar from "./mobile-sidebar";
import { Link } from "react-router";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Separator } from "./ui/separator";

export default function Header() {
  const { isLoggedIn } = useUserSession();
  return (
    <div className="sticky top-0 h-10 md:h-14 flex items-center z-10 bg-accent dark:bg-card">
      <div className="flex items-center justify-between mx-auto max-w-400 w-full px-3 md:px-6">
        <div className="flex items-center gap-1">
          {isLoggedIn && <MobileSidebar />}
          <Link to={"/"}>
            <p className="text-sm md:text-base font-bold">AryaTask</p>
          </Link>
        </div>
        <div className="flex items-center gap-4 xl:gap-4">
          <GithubLink />
          <ModeToggler />
          {!isLoggedIn ? (
            <HoverCard openDelay={100} closeDelay={200}>
              <HoverCardTrigger asChild>
                <Button size="icon-sm" className="font-bold" variant="outline">
                  Menu
                </Button>
              </HoverCardTrigger>
              <HoverCardContent
                className="w-30 p-0 rounded-sm grid"
                align="end"
                side="bottom"
              >
                <Link
                  to={"/login"}
                  className="flex items-center gap-3 p-2 hover:bg-accent text-sm lg:text-base"
                >
                  Sign In
                </Link>
                <Separator />
                <Link
                  to={"/register"}
                  className="flex items-center gap-3 p-2 hover:bg-accent text-sm lg:text-base"
                >
                  Sign Up
                </Link>
              </HoverCardContent>
            </HoverCard>
          ) : (
            <Button size="icon-sm" asChild className="font-bold">
              <Link to="/home">Home</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
