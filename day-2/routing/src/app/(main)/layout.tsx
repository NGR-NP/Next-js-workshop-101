import Link from "next/link";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/dashboard">dashboard</Link>
          </li>
          <li>
            <Link href="/job">job</Link>
          </li>
        </ul>
      </header>
      {children}
    </>
  );
}
