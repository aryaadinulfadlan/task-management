import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaHandPointRight } from "react-icons/fa6";
import Img from "@/assets/poster.png";

export default function LandingPage() {
  return (
    <div className="flex h-[calc(100vh-2.5rem)] md:h-[calc(100vh-3.5rem)] bg-zinc-50 font-sans dark:bg-black">
      <div className="h-[90%] md:h-full max-w-160 xl:max-w-300 w-full px-6 flex mx-auto justify-center gap-15 xl:gap-10 items-center flex-col xl:flex-row">
        <div className="grid gap-4 md:gap-6 xl:gap-8">
          <p className="font-bold text-2xl md:text-4xl xl:text-6xl xl:leading-18">
            Simplify Your Task Management
          </p>
          <p className="text-sm md:text-lg">
            <span className="font-bold">AryaTask</span> is a lightweight task
            management app designed to help you manage tasks clearly and
            effectively.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-fit font-bold">Get Started</Button>
            </DialogTrigger>
            <DialogContent
              className="sm:max-w-106.25"
              aria-describedby={undefined}
            >
              <DialogHeader>
                <DialogTitle>How can I get started?</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <FaHandPointRight className="shrink-0 size-5 lg:size-6" />
                  <span className="text-sm lg:text-base">
                    You need to have an account to use this website. Please sign
                    up first, then log in via the menu in the top-right corner.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FaHandPointRight className="shrink-0 size-5 lg:size-6" />
                  <span className="text-sm lg:text-base">
                    After successfully logging in, you can start "read" and
                    "write" your task data.
                  </span>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button className="w-full">I got it</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="max-w-100 xl:max-w-130 w-full aspect-square relative">
          <img
            src={Img}
            alt="Landing Image"
            className="object-cover absolute inset-0 w-full top-[45%] -translate-y-[50%]"
          />
        </div>
      </div>
    </div>
  );
}
