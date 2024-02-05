import React from "react";

export default function ParallelLayout({
  children,
  one,
  two,
}: {
  children: React.ReactNode;
  one: React.ReactNode;
  two: React.ReactNode;
}) {
  return (
    <>
      {children}
      {one}
      {two}
    </>
  );
}
