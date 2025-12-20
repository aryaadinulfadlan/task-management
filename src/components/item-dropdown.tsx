import { useNavigate } from "react-router";
import { DropdownMenuItem } from "./ui/dropdown-menu";

interface Props {
  label: string;
  href: string;
}
export default function ItemDropdown({ label, href }: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(href);
  };
  return (
    <DropdownMenuItem className="cursor-pointer">
      <div
        onClick={handleClick}
        className="flex items-center font-medium text-sm xl:text-base w-full"
      >
        {label}
      </div>
    </DropdownMenuItem>
  );
}
