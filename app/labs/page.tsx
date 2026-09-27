import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      {/* TODO: Matthieu Schiermeier*/}
      <h2 id="wd-name">Matthieu Schiermeier</h2>
      <p id="wd-section">Section: 09</p>
      <ul>
        <li>
          <Link href="/labs/lab1" id="wd-lab1-link">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2" id="wd-lab2-link">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3" id="wd-lab3-link">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">Lab 4</Link>
        </li>
        <li>
          <Link href="/labs/lab5" id="wd-lab5-link">Lab 5</Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">Kambaz</Link>
        </li>
      </ul>
      {/* TODO: schiermeierm */}
      <a
        href="https://github.com/YOUR_GITHUB_USERNAME/webdev-client"
        id="wd-github"
        target="_blank"
        rel="noreferrer"
      >
        GitHub repository
      </a>
    </div>
  );
}
