import { useUserSession } from "@/store";

export default function HomePage() {
  const { name } = useUserSession();
  return (
    <div className="p-8 text-sm lg:text-base">
      <p className="font-bold text-base lg:text-xl">Welcome back, {name} 👋</p>
    </div>
  );
}
