import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/userSlice";
import { X,Save } from "lucide-react";

const EditUserModal = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "company") setForm({ ...form, company: { name: value } });
    else if (name === "street" || name === "city")
      setForm({ ...form, address: { ...form.address, [name]: value } });
    else setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    dispatch(updateUser(form));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#22222238] bg-opacity-40 z-50">
      <div className="bg-white rounded-2xl p-6 w-[420px] lg:w-[520px] shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">
            Edit User — {user.name}
          </h2>
          <button
            onClick={onClose}
            className="flex items-center gap-1 cursor-pointer text-gray-500 hover:text-gray-700"
          >
            <X size={18} />
            Close
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Full Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 text-sm   outline-none"
            />
          </div>

          {/* Username & Role */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Username
              </label>
              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 text-sm   outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Role</label>
              <input
                name="role"
                value={form.role || "Administrator"}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 text-sm   outline-none"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 text-sm   outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 text-sm   outline-none"
              />
            </div>
          </div>

          {/* Company & Website */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Company
              </label>
              <input
                name="company"
                value={form.company?.name}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 text-sm   outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Website
              </label>
              <input
                name="website"
                value={form.website}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 text-sm   outline-none"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm text-gray-500 mb-1">Address</label>
            <input
              name="street"
              value={`${form.address?.street || ""}, ${
                form.address?.city || ""
              }`}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 text-sm   outline-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end items-center mt-6">
          

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-100 cursor-pointer text-gray-700 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
            >
              <Save />Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;


