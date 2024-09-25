"use client";
import { useState } from "react";
import AddNewBlog from "../add-new-blog";
const initialBlogFormData = {
  title: "",
  description: "",
};

const BlogOverview = () => {
  const [openBlogDialog, setOpenBlogDailog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
  const handelSaveBlogData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch("/api/add-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogFormData),
      });
      if (!apiResponse.ok) throw new Error("Network response was not ok");
      const result = await apiResponse.json();
      if (result?.success === true) {
        setLoading(false);
        setOpenBlogDailog(false);
        setBlogFormData(initialBlogFormData);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  };
  return (
    <div className="flex min-h-screen flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-500 p-6">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDailog={setOpenBlogDailog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handelSaveBlogData={handelSaveBlogData}
      />
      <div>Blog List Section</div>
    </div>
  );
};

export default BlogOverview;
