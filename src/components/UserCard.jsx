import React from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Building } from "lucide-react";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  // Extract initials
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      onClick={() => navigate(`/user/${user.id}`)}
      className=" p-4 rounded-2xl shadow-md outline-none bg-white hover:shadow-lg cursor-pointer"
    >
      {/* Avatar */}
      <div className="flex items-center mb-4 gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
          {initials} 
        </div>
        <div className="flex flex-col">
        <h2 className="font-semibold text-gray-900">{user.name}</h2>
        <p className="text-sm text-blue-500">{user.email}</p>
        </div>
      </div>

      <hr className="text-gray-300"/>


      {/* User Info */}
      <div className="flex-1">
        
        <div className="flex items-center text-sm text-gray-600 mt-1 ml-4">
          <Phone size={16} className="mr-2" />
          {user.phone}
        </div>
        <div className="flex items-center text-sm text-gray-600 mt-1 ml-4">
          <Building size={16} className="mr-2" />
          {user.company?.name}
        </div>
      </div>
    </div>
  );
};

export default UserCard;


