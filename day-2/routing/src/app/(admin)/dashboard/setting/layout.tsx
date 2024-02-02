import { ReactNode } from "react";

export default function DashboardSettingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <ul className="flex gap-5">
        <li>console</li>
        <li>elements</li>
        <li>sources</li>
        <li>Network</li>
      </ul>
      {children}
    </div>
  );
}
