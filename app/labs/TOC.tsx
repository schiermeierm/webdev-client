import Link from "next/link";

export default function TOC() {
  return (
    <ul>
      <li>
        <Link href="/labs" id="wd-home-link">
          Home
        </Link>
      </li>
      <li>
        <Link href="/labs/lab1" id="wd-toc-lab1-link">Lab 1</Link>
      </li>
      <li>
        <Link href="/labs/lab2" id="wd-toc-lab2-link">Lab 2</Link>
      </li>
      <li>
        <Link href="/labs/lab3" id="wd-toc-lab3-link">Lab 3</Link>
      </li>
      <li>
        <Link href="/labs/lab4" id="wd-toc-lab4-link">Lab 4</Link>
      </li>
      <li>
        <Link href="/labs/lab5" id="wd-toc-lab5-link">Lab 5</Link>
      </li>
      <li>
        <Link href="/book/ch1" id="wd-toc-book-link">Chapter 1</Link>
      </li>
      <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
      <li id="wd-toc-personal">
        Matthieu: full throttle, then brake late.
      </li>
    </ul>
  );
}
