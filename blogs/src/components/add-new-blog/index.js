import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const AddNewBlog = ({
  openBlogDialog,
  setOpenBlogDailog,
  loading,
  blogFormData,
  setBlogFormData,
  handelSaveBlogData,
  currentEditedBlogID,
  setCurrentEditedBlogID,
}) => {
  const [formError, setFormError] = useState("");

  const validateForm = () => {
    if (!blogFormData.title || !blogFormData.description) {
      setFormError("Both Title and Description are required.");
      return false;
    }
    setFormError("");
    return true;
  };

  const handleSaveClick = () => {
    if (validateForm()) {
      handelSaveBlogData();
    }
  };

  return (
    <>
      <div>
        <Button onClick={() => setOpenBlogDailog(true)}>Add New Blog</Button>
      </div>
      <Dialog
        open={openBlogDialog}
        onOpenChange={() => {
          setOpenBlogDailog,
            setCurrentEditedBlogID(null),
            setBlogFormData({
              title: "",
              description: "",
            });
        }}
      >
        <DialogContent>
          <DialogHeader>
            {currentEditedBlogID ? "Edit Blog" : "Add New Blog"}
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title:
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter Blog Title"
                className="col-span-3"
                value={blogFormData.title}
                onChange={(e) =>
                  setBlogFormData({ ...blogFormData, title: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description:
              </Label>
              <Input
                id="description"
                name="description"
                placeholder="Enter Blog Description"
                className="col-span-3"
                value={blogFormData.description}
                onChange={(e) =>
                  setBlogFormData({
                    ...blogFormData,
                    description: e.target.value,
                  })
                }
              />
            </div>
            {/* Error message */}
            {formError && (
              <div className="text-red-600 col-span-4 text-center">
                {formError}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleSaveClick}>
              {loading ? "Saving changes" : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewBlog;
