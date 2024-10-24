import { fetchAllUserAction } from "@/actions";
import SingleUserCard from "@/components/single-user";
import AddNewUser from "@/components/add-new-user";

const UserManagement = async () => {
  const getListOUsers = await fetchAllUserAction();
  return (
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl text-gray-900">User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-3 gap-5">
        {getListOUsers &&
        getListOUsers.data &&
        getListOUsers.data.length > 0 ? (
          getListOUsers.data.map((item) => (
            <SingleUserCard key={item?._id} user={item} />
          ))
        ) : (
          <h2>No User Data Found Please Add One</h2>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
