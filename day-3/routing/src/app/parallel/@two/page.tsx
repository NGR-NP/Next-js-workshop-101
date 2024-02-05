import Link from "next/link";

export default function SlotTwo() {
  return (
    <div>
      slot Two Page
      <Link href="/parallel/analytics"> go to child</Link>
    </div>
  );
}
