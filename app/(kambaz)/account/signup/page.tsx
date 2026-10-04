import Link from "next/link";

const input = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        id="wd-username"
        placeholder="username"
        className={`wd-username ${input}`}
        defaultValue="ada"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className={`wd-password ${input}`}
        defaultValue="123"
      />
      <input
        id="wd-password-verify"
        placeholder="verify password"
        type="password"
        className={`wd-password-verify ${input}`}
      />
      <Link
        id="wd-signup-btn"
        href="/account/profile"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline hover:bg-blue-700"
      >
        Sign up
      </Link>
      <Link id="wd-signin-link" href="/account/signin" className="text-blue-600">
        Sign in
      </Link>
    </div>
  );
}
