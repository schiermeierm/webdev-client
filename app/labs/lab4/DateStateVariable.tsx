"use client";

import { useState } from "react";

function dateObjectToHtmlDateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function htmlDateStringToDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day, 0, 0);
}

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date(2026, 0, 15, 10, 30));
  // With AI
  const [dueDate, setDueDate] = useState(new Date(2026, 0, 22, 10, 30));
  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3>{startDate.toDateString()}</h3>
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      <input
        type="date"
        className="mb-2 block rounded border border-neutral-300 px-3 py-1.5"
        value={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(htmlDateStringToDate(e.target.value))}
        id="wd-start-date"
      />
      {/* TODO (On your own): an endDate state value + second date input; show both formatted strings */}
      {/* With AI */}
      <h3>{dateObjectToHtmlDateString(dueDate)}</h3>
      <input
        type="date"
        className="block rounded border border-neutral-300 px-3 py-1.5"
        value={dateObjectToHtmlDateString(dueDate)}
        onChange={(e) => setDueDate(htmlDateStringToDate(e.target.value))}
        id="wd-due-date"
      />
      <hr />
    </div>
  );
}
