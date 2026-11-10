"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

const input = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        id="wd-username"
        placeholder="username"
        className={`wd-username ${input}`}
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      {/* TODO (On your own): bind the remaining fields the same way —
          password, firstName, lastName, email, and a role <select>
          (USER, ADMIN, FACULTY, STUDENT), each spreading profile */}
      <button
        type="button"
        id="wd-signout-btn"
        onClick={signout}
        className="block w-full rounded bg-red-600 px-3 py-2 text-center text-white hover:bg-red-700"
      >
        Sign out
      </button>
    </div>
  );
}
