import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/userSlice";
import UserCard from "../components/UserCard";
import CreateUserModal from "../components/CreateUserModal";
import axios from "axios";
import { Plus } from "lucide-react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [search, setSearch] = useState("");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  useEffect(() => {
    // Fetch API users only if no local users exist
    if (users.length === 0) {
      axios.get("https://jsonplaceholder.typicode.com/users") 
        .then((res) => dispatch(setUsers(res.data)))
        .catch((err) => console.error("Error fetching users:", err));
    }
  }, [dispatch, users.length]);

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold">User Directory</h1>
        <button
          onClick={() => setIsCreateOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          <Plus />
          Create New User
        </button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search users by name..."
        className="border px-4 py-2 rounded-lg mb-6 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* User Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {/* Create User Modal */}
      {isCreateOpen && (
        <CreateUserModal onClose={() => setIsCreateOpen(false)} />
      )}
    </div>
  );
};

export default Dashboard;


