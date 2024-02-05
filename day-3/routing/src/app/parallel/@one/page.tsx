import Link from "next/link";

export default function SlotOne() {
  return (
    <div>
      slot one Page
      <Link href="/parallel/child"> go to child</Link>
      <Link href="/parallel/analytics"> go to analytics</Link>
    </div>
  );
}
