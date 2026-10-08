import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/lib/models/Post";

export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find().sort({ date: -1 }).lean().exec();
    return NextResponse.json({
      success: true,
      count: posts.length,
      posts,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts", details: (error as Error).message },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {

  const body = await request.json();
  const { title, slug, date, excerpt, content } = body;

  if (!title || !slug || !date || !excerpt || !content) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 },
    );
  }

  try {
    await connectDB();
    const post = await Post.create({ title, slug, date, excerpt, content });
    return NextResponse.json({ success: true, post }, { status: 201 });
  } catch (error) {
    type MongoError = Error & { code?: number };
    const err = error as MongoError;

    if (err.code === 11000) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        error: "Failed to create post",
        details: err.message ?? "Unexpected error",
      },
      { status: 500 },
    );
  }
}
