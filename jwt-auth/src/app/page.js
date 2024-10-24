import { fetchUserActions } from "@/actions";
import Logout from "@/components/logout";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await fetchUserActions();
  if (!currentUser?.success) redirect("/sign-in");
  return (
    <div className="bg-black text-white min-w-full min-h-screen text-center pt-28">
      <h1>Next Authentication Page</h1>
      <h2 className="font-bold text-xl">{currentUser?.data?.userName}</h2>
      <h2 className="font-bold text-xl">{currentUser?.data?.email}</h2>
      <Logout />
    </div>
  );
}
