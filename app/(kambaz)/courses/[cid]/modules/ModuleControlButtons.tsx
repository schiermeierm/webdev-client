import { FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <span className="flex items-center gap-2 text-neutral-700">
      <GreenCheckmark />
      <FaPlus className="text-sm" />
      <IoEllipsisVertical className="text-lg" />
    </span>
  );
}
