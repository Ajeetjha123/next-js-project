import connectDB from "@/app/database";
import Blog from "@/app/model/blog.model";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const getCurrentBlogId = searchParams.get("id");
    if (!getCurrentBlogId) {
      return NextResponse.json({
        success: false,
        message: "Blog Id Is Required",
      });
    }
    const deleteGetCurrentBlogId = await Blog.findByIdAndDelete(
      getCurrentBlogId
    );
    if (deleteGetCurrentBlogId) {
      return NextResponse.json({
        success: true,
        message: "Blog Is Deleted Successfully",
      });
    }
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong! Please try Again",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong! Please try Again",
    });
  }
}
