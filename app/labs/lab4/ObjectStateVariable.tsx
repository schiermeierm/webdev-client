"use client";

import { useState } from "react";

export default function ObjectStateVariable() {
  // TODO (On your own, graded): add a city property to person and a controlled
  // input (its own id) that updates it with the spread pattern { ...person, city: ... }
  const [person, setPerson] = useState({ name: "Peter", age: 24 });
  return (
    <div id="wd-object-state-variables">
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
        id="wd-person-name"
      />
      <input
        type="number"
        className="block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.age}
        onChange={(e) =>
          setPerson({ ...person, age: parseInt(e.target.value) || 0 })
        }
        id="wd-person-age"
      />
      <hr />
    </div>
  );
}
