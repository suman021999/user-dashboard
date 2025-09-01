import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import EditUserModal from "../components/EditUserModal";
import { ArrowLeft, Mail, Phone, Building, PencilLine } from "lucide-react";

const UserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) =>
    state.users.users.find((u) => u.id === parseInt(id))
  );
  const [isEditOpen, setIsEditOpen] = useState(false);

  if (!user) return <p>User not found</p>;

  // Get initials for avatar
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center cursor-pointer text-gray-600 hover:text-gray-800 border-2 border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-200 transition"
          >
            <ArrowLeft size={18} className="mr-1 " />
            Back to Users
          </button>
          <h1 className="text-lg font-semibold text-gray-900">
            {user.name}
          </h1>
        </div>
        <button
          onClick={() => setIsEditOpen(true)}
          className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          <PencilLine /> Edit
        </button>
      </div>

      {/* Layout: Left (Profile) | Right (Details) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-700 mb-4">
            {initials}
          </div>
          {/* Name */}
          <h2 className="font-semibold text-gray-900 mb-3">{user.name}</h2>

          {/* Contact Info */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-lg text-sm text-gray-700">
              <Mail size={16} />
              {user.email}
            </div>
            <div className="flex items-center gap-2 bg-gray-200  p-2 rounded-lg text-sm text-gray-700">
              <Phone size={16} />
              {user.phone}
            </div>
            <div className="flex items-center gap-2 bg-gray-200  p-2 rounded-lg text-sm text-gray-700">
              <Building size={16} />
              {user.company?.name}
            </div>
          </div>
        </div>

        {/* Right Card (User Details) */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-md">
  <h3 className="text-md font-semibold mb-4 text-gray-800">
    User Details
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
    <div>
      <p className="text-gray-500">Full Name</p>
      <p className="font-medium">{user.name}</p>
    </div>
    <div>
      <p className="text-gray-500">Username</p>
      <p className="font-medium">{user.username}</p>
    </div>
    <div>
      <p className="text-gray-500">Email</p>
      <p className="font-medium">{user.email}</p>
    </div>
    <div>
      <p className="text-gray-500">Phone</p>
      <p className="font-medium">{user.phone}</p>
    </div>
    <div>
      <p className="text-gray-500">Company</p>
      <p className="font-medium">{user.company?.name}</p>
    </div>
    <div>
      <p className="text-gray-500">Website</p>
      <p className="font-medium">{user.website}</p>
    </div>

    {/* Full Address */}
    <div >
      <p className="text-gray-500">Address</p>
      <p className="font-medium">
        {user.address?.street}, {user.address?.suite},{" "}
        {user.address?.city}, {user.address?.zipcode}
      </p>
    </div>

    {/* <div>
      <p className="text-gray-500">Role</p>
      <p className="font-medium">Administrator</p>
    </div> */}

    {/* Geo Location */}
    <div>
      <p className="text-gray-500">Latitude & Longitude</p>
      <div className="flex gap-2">
      <p className="font-medium">{user.address?.geo?.lat}</p>
      <p className="font-medium">{user.address?.geo?.lng}</p>
      </div>
      
    </div>
  </div>
</div>


        
      </div>

      {/* Edit Modal */}
      {isEditOpen && (
        <EditUserModal user={user} onClose={() => setIsEditOpen(false)} />
      )}
    </div>
  );
};

export default UserPage;




