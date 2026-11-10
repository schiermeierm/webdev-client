import { FaPencilAlt, FaPlus, FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { useModulesStore } from "../../../store/modulesStore";

export default function ModuleControlButtons({ moduleId }: { moduleId: string }) {
  const deleteModule = useModulesStore((state) => state.deleteModule);
  const editModule = useModulesStore((state) => state.editModule);
  return (
    <span className="flex items-center gap-2 text-neutral-700">
      <FaPencilAlt
        className="wd-edit-module cursor-pointer text-blue-600"
        onClick={() => editModule(moduleId)}
        title="Edit module"
      />
      <FaTrash
        className="wd-delete-module cursor-pointer text-red-600"
        onClick={() => deleteModule(moduleId)}
        title="Delete module"
      />
      <GreenCheckmark />
      <FaPlus className="text-sm" />
      <IoEllipsisVertical className="text-lg" />
    </span>
  );
}
