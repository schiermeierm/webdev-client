import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
// On your own: two families not used above
import { IoRocketOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
// With AI: two more families
import { MdScience } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <IoRocketOutline className="text-red-600" />
        <BsLightningCharge className="text-yellow-500" />
        <MdScience className="text-4xl text-blue-600" />
        <HiAcademicCap className="text-4xl text-blue-600" />
      </div>
    </div>
  );
}
