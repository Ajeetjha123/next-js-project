import { NextResponse } from "next/server";
import connectDB from "@/app/database";
import Blog from "@/app/model/blog.model";

const Joi = require("joi");

const EditBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export const PUT = async (req) => {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const getCurrentBlogID = searchParams.get("id");

    if (!getCurrentBlogID) {
      return NextResponse.json({
        success: false,
        message: "Blog ID is required",
      });
    }

    const { title, description } = await req.json();

    const { error } = EditBlog.validate({ title, description });
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const updateBlogByID = await Blog.findByIdAndUpdate(
      getCurrentBlogID,
      { title, description },
      { new: true }
    );

    if (updateBlogByID) {
      return NextResponse.json({
        success: true,
        message: "Blog updated successfully",
        data: updateBlogByID,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Blog not found or update failed",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
};
