import "@/app/labs/lab2/tailwind/utilities.css";
import { FaUserCircle } from "react-icons/fa";

const people = [
  { name: "Tony Stark", login: "001234561S", section: "S101", role: "STUDENT", last: "2020-10-01", total: "10:21:32" },
  { name: "Bruce Wayne", login: "001234562S", section: "S101", role: "STUDENT", last: "2020-11-02", total: "15:32:43" },
  { name: "Steve Rogers", login: "001234563S", section: "S101", role: "STUDENT", last: "2020-10-02", total: "23:32:43" },
  { name: "Natasha Romanoff", login: "001234564S", section: "S101", role: "TA", last: "2020-11-05", total: "13:23:34" },
  { name: "Thor Odinson", login: "001234565S", section: "S101", role: "STUDENT", last: "2020-12-01", total: "11:22:33" },
  { name: "Nick Fury", login: "001234566F", section: "S101", role: "FACULTY", last: "2020-11-15", total: "40:12:18" },
  // On your own
  { name: "Ada Lovelace", login: "001234567S", section: "S102", role: "STUDENT", last: "2020-12-03", total: "18:45:10" },
  { name: "Alan Turing", login: "001234568S", section: "S102", role: "TA", last: "2020-12-04", total: "27:05:51" },
  { name: "Grace Hopper", login: "001234569F", section: "S102", role: "FACULTY", last: "2020-12-05", total: "33:14:09" },
  // With AI
  { name: "Jane Sample", login: "001234570S", section: "S103", role: "STUDENT", last: "2020-12-06", total: "05:10:00" },
  { name: "Alex Sample", login: "001234571S", section: "S103", role: "STUDENT", last: "2020-12-07", total: "07:20:15" },
  { name: "Sam Sample", login: "001234572S", section: "S103", role: "TA", last: "2020-12-08", total: "09:30:45" },
];

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b-2 border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr key={p.login} className="border-b border-neutral-200 odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <span className="flex items-center">
                  <FaUserCircle className="me-2 shrink-0 text-4xl text-neutral-500" />
                  <span className="text-red-600">{p.name}</span>
                </span>
              </td>
              <td className="wd-login-id p-2">{p.login}</td>
              <td className="wd-section p-2">{p.section}</td>
              <td className="wd-role p-2">{p.role}</td>
              <td className="wd-last-activity p-2">{p.last}</td>
              <td className="wd-total-activity p-2">{p.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
