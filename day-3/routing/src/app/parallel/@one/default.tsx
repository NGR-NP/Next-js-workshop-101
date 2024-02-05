import Link from "next/link";

export default function DefaultPage() {
  return (
    <div className="container">
      <p>Default slow one page</p>
      <Link className="px-2 py-1 bg-slate-300 m-2" href="/parallel">
        go to child
      </Link>
    </div>
  );
}
