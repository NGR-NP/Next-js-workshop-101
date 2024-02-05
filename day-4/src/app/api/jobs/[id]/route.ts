import { JOBS } from "@/app/_lib/placeholder";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  return NextResponse.json(data);
}
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { title } = await req.json();
  if (!title) return new NextResponse("title is required!!", { status: 400 });
  const q = JOBS.findIndex((job) => job.id === parseInt(params?.id));
  if (q == -1 || !q) return new NextResponse("not found", { status: 404 });
  JOBS[q].title = title;

  return NextResponse.json(JOBS);
}

export function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const q = JOBS.findIndex((job) => job.id === parseInt(params?.id));
  if (q == -1) return new NextResponse("not found", { status: 404 });

  JOBS.splice(q, 1);

  return Response.json(JOBS);
}
