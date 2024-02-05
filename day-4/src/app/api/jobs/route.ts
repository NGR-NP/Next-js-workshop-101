import { NextRequest, NextResponse } from "next/server";
import { JOBS } from "@/app/_lib/placeholder";
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const title = searchParams.get("title");

  if (title) {
    const filteredJobs = JOBS.filter((job) => job.title.includes(title));
    return NextResponse.json(filteredJobs);
  }

  return NextResponse.json(JOBS);
}

export async function POST(req: Request) {
  const { title, companyName, type } = await req.json();

  if (!title) return NextResponse.json({ error: "Please provide a title" });
  if (title || companyName || type) {
    const newJob: any = {
      id: JOBS.length++,
      title,
      companyName,
      type,
    };
    JOBS.push(newJob);
    return NextResponse.json(JOBS, { status: 201 });
  } else {
    return NextResponse.json({
      error: "Please provide a title, company name, and type",
    });
  }
}

export function PUT(req: NextRequest) {
  return new Response("Put response");
}

export function DELETE() {
  return new Response("Delete response");
}
