"use client";
import { userLoginActions } from "@/actions";
import CommonFormElement from "@/components/common-form";
import { Button } from "@/components/ui/button";
import { initializeSignInFormData, userLoginFormControls } from "@/utils";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
  const router = useRouter();
  const [signInFormData, setSignInFormData] = useState(
    initializeSignInFormData
  );
  const [error, setError] = useState(null);

  const handelSignIn = async (event) => {
    event.preventDefault();
    const result = await userLoginActions(signInFormData);
    console.log(result);
    setSignInFormData(initializeSignInFormData);
    if (result?.success) {
      setError(null);
      router.push("/");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Sign In</h1>
        {error && <div className="text-red-700 font-semibold">{error}</div>}
        <form className="space-y-4" onSubmit={handelSignIn}>
          {" "}
          {userLoginFormControls.map((controllItem) => (
            <div key={controllItem.name} className="space-y-1">
              <Label className="font-medium text-sm text-gray-900">
                {controllItem.label}
              </Label>
              <CommonFormElement
                currentItem={controllItem}
                value={signInFormData[controllItem.name]}
                onChange={(event) =>
                  setSignInFormData({
                    ...signInFormData,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </div>
          ))}
          <Button
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md disabled:opacity-55 transition-all duration-200"
            type="submit"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
