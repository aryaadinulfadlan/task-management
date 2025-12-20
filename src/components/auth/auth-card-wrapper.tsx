import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { FaLock } from "react-icons/fa";
import { Button } from "../ui/button";
import type { ReactNode } from "react";
import { Link } from "react-router";

interface Props {
  children: ReactNode;
  headerLabel: string;
  footerLabel: string;
  href: string;
}

export default function AuthCardWrapper({
  children,
  headerLabel,
  footerLabel,
  href,
}: Props) {
  return (
    <Card className="bg-accent dark:bg-card text-white w-full max-w-85 sm:max-w-100 xl:max-w-112.5 mx-auto">
      <CardHeader>
        <div className="w-full flex flex-col gap-y-2 xl:gap-y-4 items-center justify-center">
          <h1 className="text-xl 2xl:text-3xl text-black dark:text-white font-semibold flex items-center gap-2 2xl:gap-4">
            <FaLock className="text-black dark:text-white" /> Auth
          </h1>
          <p className="text-black dark:text-[#d9d5d5] font-semibold text-sm lg:text-base 2xl:text-lg">
            {headerLabel}
          </p>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Button
          variant="link"
          className="font-bold w-full text-black dark:text-white text-sm lg:text-base 2xl:text-lg"
          size="sm"
          asChild
        >
          <Link to={href}>{footerLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
