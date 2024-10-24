import connectDB from "@/app/database";
import Blog from "@/app/model/blog.model";
import Joi from "joi";
import { NextResponse } from "next/server";

// Define the Joi validation schema
const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

// Named export for the POST method
export async function POST(req) {
  try {
    await connectDB();

    const extratBlogData = await req.json();
    const { title, description } = extratBlogData;

    // Validate the blog data
    const { error } = AddNewBlog.validate({
      title,
      description,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    // Create a new blog entry
    const newlyCreatedBlogItem = await Blog.create(extratBlogData);

    if (newlyCreatedBlogItem) {
      return NextResponse.json({
        success: true,
        message: "Blog added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to add blog",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong, please try again",
    });
  }
}
