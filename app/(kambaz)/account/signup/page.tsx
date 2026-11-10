"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";
import { useUsersStore } from "../../store/usersStore";

const input = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useAccountContext();
  const addUser = useUsersStore((state) => state.addUser);
  const router = useRouter();

  const signup = () => {
    if (!username || !password) return;
    const user = { ...emptyUser, _id: crypto.randomUUID(), username, password };
    addUser(user);
    setCurrentUser(user);
    router.push("/account/profile");
  };

  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        id="wd-username"
        placeholder="username"
        className={`wd-username ${input}`}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className={`wd-password ${input}`}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        id="wd-signup-btn"
        onClick={signup}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white hover:bg-blue-700"
      >
        Sign up
      </button>
      <Link id="wd-signin-link" href="/account/signin" className="text-blue-600">
        Sign in
      </Link>
    </div>
  );
}
