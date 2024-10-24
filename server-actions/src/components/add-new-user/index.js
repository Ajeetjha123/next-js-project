"use client";
import { addNewUserActions } from "@/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewUserFormControll, addNewUserFormInitialState } from "@/utils";
import { useState } from "react";

const AddNewUser = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialState
  );

  const handelSaveButtonValid = () => {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  };
  const handelAddnewUserAction = async () => {
    await addNewUserActions(addNewUserFormData, "/user-management");
    setOpenPopUp(false);
    setAddNewUserFormData(addNewUserFormInitialState);
  };
  return (
    <div>
      <Button onClick={() => setOpenPopUp(true)}>Add New User</Button>
      <Dialog
        open={openPopUp}
        onOpenChange={() => {
          setOpenPopUp(false),
            setAddNewUserFormData(addNewUserFormInitialState);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <form action={handelAddnewUserAction} className="grid gap-4 py-4">
            {addNewUserFormControll.map((formControl) => (
              <div className="mt-5" key={formControl.name}>
                <Label
                  htmlFor={formControl.name}
                  className="text-right font-bold"
                >
                  {formControl.label}
                </Label>
                <Input
                  id={formControl.name}
                  name={formControl.name}
                  placeholder={formControl.placeholder}
                  className="col-span-3 outline-none"
                  type={formControl.type}
                  value={addNewUserFormData[formControl.name]}
                  onChange={(e) =>
                    setAddNewUserFormData({
                      ...addNewUserFormData,
                      [formControl.name]: e.target.value,
                    })
                  }
                />
              </div>
            ))}
            <DialogFooter>
              <Button
                className="disabled:opacity-55 min-w-full"
                type="submit"
                disabled={!handelSaveButtonValid()}
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewUser;
