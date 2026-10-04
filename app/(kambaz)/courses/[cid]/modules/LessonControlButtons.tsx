import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons() {
  return (
    <span className="flex items-center gap-2 text-neutral-700">
      <GreenCheckmark />
      <IoEllipsisVertical className="text-lg" />
    </span>
  );
}
