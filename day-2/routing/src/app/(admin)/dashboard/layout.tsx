import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="bg-slate-400">
        <ul className="flex gap-4">
          <li>
            <Link href="/dashboard">home</Link>
          </li>
          <li>
            <Link href="/setting">user</Link>
          </li>
          <li>
            <Link href="/setting">setting</Link>
          </li>
        </ul>
      </header>
      {children}
    </>
  );
}
