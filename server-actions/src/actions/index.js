"use server";

//add new users actions

import connectToDB from "@/app/database/connectDB";
import User from "@/app/models/user.model";
import { revalidatePath } from "next/cache";
export const addNewUserActions = async (FormData, pathToRevalidate) => {
  await connectToDB();
  try {
    const newlyCreatedData = await User.create(FormData);
    if (newlyCreatedData) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User Added Successfully",
      };
    } else {
      return {
        success: false,
        message: "some error ocurred! please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "some error ocurred! please try again",
    };
  }
};

// fetch user actions

export const fetchAllUserAction = async () => {
  await connectToDB();
  try {
    const allfetchedData = await User.find({});
    if (allfetchedData) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(allfetchedData)),
        message: "User Added Successfully",
      };
    } else {
      return {
        success: false,
        message: "some error occured! please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "some error occured! please try again",
    };
  }
};

//edit user actions

//delete user actions

export const deleteUserActions = async (getCurrentUserID, pathToRevalidate) => {
  await connectToDB();
  try {
    const deletedUser = await User.findByIdAndDelete(getCurrentUserID);
    if (deletedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User Deleted SuccesFully",
      };
    } else {
      return {
        success: false,
        message: "some error occured! please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "some error occured! please try again",
    };
  }
};
