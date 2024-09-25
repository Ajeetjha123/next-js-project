import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddNewBlog = ({
  openBlogDialog,
  setOpenBlogDailog,
  loading,
  blogFormData,
  setBlogFormData,
  handelSaveBlogData,
}) => {
  return (
    <>
      <div>
        <Button onClick={() => setOpenBlogDailog(true)}>Add New Blog</Button>
      </div>

      <Dialog open={openBlogDialog} onOpenChange={setOpenBlogDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Blog</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title:
              </Label>
              <Input
                id="title"
                name="title"
                placeHolder="Enter Blog Title"
                className="col-span-3"
                value={blogFormData.title}
                onChange={(e) =>
                  setBlogFormData({ ...blogFormData, title: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description:
              </Label>
              <Input
                id="description"
                name="description"
                placeHolder="Enter Blog Description"
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
          </div>
          <DialogFooter>
            <Button type="button" onClick={handelSaveBlogData}>
              {loading ? "Saving changes" : "Save chages"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewBlog;
