"use client";
import { logoutUserActions } from "@/actions";

const { Button } = require("../ui/button");

const Logout = () => {
  const handelLogout = async () => {
    await logoutUserActions();
  };
  return (
    <Button variant="destructive" onClick={handelLogout}>
      Log Out
    </Button>
  );
};

export default Logout;
