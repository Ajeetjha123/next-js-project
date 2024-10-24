"use client";
import { useEffect, useState } from "react";
import AddNewBlog from "../add-new-blog";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const initialBlogFormData = {
  title: "",
  description: "",
};

const BlogOverview = ({ blogList }) => {
  const [openBlogDialog, setOpenBlogDailog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
  const [currentEditedBlogID, setCurrentEditedBlogID] = useState(null);
  const router = useRouter();

  // Function to handle deleting a blog by ID
  const handelDeleteBlogByID = async (getCurrentId) => {
    try {
      const apiresponse = await fetch(`/api/delete-blog?id=${getCurrentId}`, {
        method: "DELETE",
      });
      const result = await apiresponse.json();
      if (result?.success) router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle saving (either adding or updating)
  const handelSaveBlogData = async () => {
    setLoading(true);
    try {
      let apiResponse;

      if (currentEditedBlogID) {
        // If we're editing an existing blog
        apiResponse = await fetch(
          `/api/update-blog?id=${currentEditedBlogID}`, // Pass the current blog ID
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(blogFormData), // Send updated data
          }
        );
      } else {
        // If we're adding a new blog
        apiResponse = await fetch("/api/add-blog", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogFormData),
        });
      }

      if (!apiResponse.ok) throw new Error("Network response was not ok");

      const result = await apiResponse.json();
      if (result?.success === true) {
        setLoading(false);
        setOpenBlogDailog(false);
        setBlogFormData(initialBlogFormData); // Reset form data
        setCurrentEditedBlogID(null); // Reset the edited blog ID
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  };

  // Function to handle editing a blog
  const handelEditBlog = async (getCurrentBlogItem) => {
    setCurrentEditedBlogID(getCurrentBlogItem?._id);
    setBlogFormData({
      title: getCurrentBlogItem?.title,
      description: getCurrentBlogItem?.description,
    });
    setOpenBlogDailog(true);
  };

  useEffect(() => {
    router.refresh();
  }, []);

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
        currentEditedBlogID={currentEditedBlogID}
        setCurrentEditedBlogID={setCurrentEditedBlogID}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {blogList && blogList.length > 0 ? (
          blogList.map((blogItem) => (
            <Card className="p-5" key={blogItem?._id}>
              <CardContent>
                <CardTitle className="mb-5">{blogItem?.title}</CardTitle>
                <CardDescription>{blogItem?.description}</CardDescription>
                <div className="flex gap-5 blogs-center mt-5">
                  <Button onClick={() => handelEditBlog(blogItem)}>Edit</Button>
                  <Button onClick={() => handelDeleteBlogByID(blogItem.id)}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-2xl font-extrabold text-red-600">
            No Blog Found! Please Add One
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogOverview;
