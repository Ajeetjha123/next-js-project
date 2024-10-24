"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { deleteUserActions } from "@/actions";

const SingleUserCard = ({ user }) => {
  const handeldelete = async (getCurrentUserID) => {
    await deleteUserActions(getCurrentUserID, "/user-management");
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            {user.firstName} {user.lastName}
          </CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{user.address}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Edit</Button>
          <Button onClick={() => handeldelete(user?._id)}>Delete</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SingleUserCard;
