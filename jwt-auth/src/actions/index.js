"use server";
import connectToDB from "@/database";
import User from "@/model";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
export const userRegisterActions = async (formData) => {
  await connectToDB();
  try {
    const { userName, email, password } = formData;
    const checkedUser = await User.findOne({ email });
    if (checkedUser) {
      return {
        success: false,
        message: "User already exists ! Please try with different email",
      };
    }
    const salt = await bcryptjs.genSalt(10);
    const hasedPassword = await bcryptjs.hash(password, salt);
    const newlyCreated = new User({
      userName,
      email,
      password: hasedPassword,
    });

    const savedUser = await newlyCreated.save();
    if (savedUser) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(savedUser)),
      };
    } else {
      return {
        success: false,
        message: "SomeThing Went wrong please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some Error ocurred",
    };
  }
};

export async function userLoginActions(formData) {
  await connectToDB();
  try {
    const { email, password } = formData;
    const checkUser = await User.findOne({ email });

    if (!checkUser) {
      return {
        success: false,
        message: "User does not exist, please sign up.",
      };
    }

    const checkPassword = await bcryptjs.compare(password, checkUser.password);

    if (!checkPassword) {
      return {
        success: false,
        message: "Password is incorrect.",
      };
    }

    const createToken = {
      id: checkUser._id,
      userName: checkUser.userName,
      email: checkUser.email,
    };

    const token = jwt.sign(createToken, "DEFAULT_KEY", { expiresIn: "1d" });

    const getCookies = cookies();
    getCookies.set("token", token);

    return {
      success: true,
      message: "Login is successful.",
    };
  } catch (error) {
    console.log("Error during login process:", error);
    return {
      success: false,
      message: "Something went wrong, please try again.",
    };
  }
}

export async function fetchUserActions() {
  await connectToDB();
  try {
    const getCookies = cookies();
    const token = getCookies.get("token")?.value || "";
    if (token === "") {
      return {
        success: false,
        message: "token is empty",
      };
    }
    const decodedToken = jwt.verify(token, "DEFAULT_KEY");
    const getUserInfo = await User.findOne({ _id: decodedToken.id });
    if (getUserInfo) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(getUserInfo)),
      };
    } else {
      return {
        success: false,
        message: "something went wrong please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "something went wrong please try again",
    };
  }
}

export async function logoutUserActions() {
  const getCookies = cookies();
  getCookies.set("token", "");
}
