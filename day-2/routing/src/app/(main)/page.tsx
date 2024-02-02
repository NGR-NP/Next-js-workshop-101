import Image from "next/image";

export default function Home() {
  console.log("hello form server");
  return (
    <div className="min-h-screen min-w-screen">
      <div className="flex justify-center items-center">
        <p>home page</p>
      </div>
    </div>
  );
}
