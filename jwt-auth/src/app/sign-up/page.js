"use client";
import { userRegisterActions } from "@/actions";
import CommonFormElemet from "@/components/common-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  initializeSignUpFormData,
  userRegistrationFormControls,
} from "@/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUp = () => {
  const router = useRouter();
  const [signupFormData, setSignupFormData] = useState(
    initializeSignUpFormData
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSaveButtonValid = () => {
    return Object.keys(signupFormData).every(
      (key) => signupFormData[key].trim() !== ""
    );
  };

  const signupAction = async () => {
    const result = await userRegisterActions(signupFormData);
    console.log(result);
    if (result?.data) {
      router.push("sign-in");
    } else {
      setErrorMessage(result.message || "Failed to register");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Sign Up</h1>
        {errorMessage && (
          <div className="text-red-500 text-sm mb-4 text-center">
            {errorMessage}
          </div>
        )}
        <form action={signupAction} className="space-y-4">
          {userRegistrationFormControls.map((controlItem) => (
            <div key={controlItem.name} className="space-y-1">
              <Label className="text-sm font-medium">{controlItem.label}</Label>
              <CommonFormElemet
                type={controlItem.type}
                value={signupFormData[controlItem.name]}
                currentItem={controlItem}
                onChange={(e) =>
                  setSignupFormData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
          ))}
          <Button
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md disabled:opacity-55 transition-all duration-200"
            type="submit"
            disabled={!handleSaveButtonValid()}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
