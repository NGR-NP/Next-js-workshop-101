"use client";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log(error.message);
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset}></button>
    </div>
  );
}
