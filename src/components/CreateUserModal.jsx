import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { X } from "lucide-react";

const CreateUserModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: Date.now(),
    name: "",
    email: "",
    phone: "",
    company: { name: "" },
    username: "",
    address: { street: "", city: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "company") setForm({ ...form, company: { name: value } });
    else if (name === "street" || name === "city")
      setForm({ ...form, address: { ...form.address, [name]: value } });
    else setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(addUser(form));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#22222238] bg-opacity-40 z-50">
      <div className="bg-white rounded-2xl p-6 w-[420px] lg:w-[520px] shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Create New User</h2>
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
              placeholder="Type full name"
              onChange={handleChange}
              className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 text-sm   outline-none"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Email</label>
              <input
                name="email"
                placeholder="name@example.com"
                onChange={handleChange}
                className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 text-sm   outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Phone</label>
              <input
                name="phone"
                placeholder="(000) 000-0000"
                onChange={handleChange}
                className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 text-sm   outline-none"
              />
            </div>
          </div>

          {/* Company & Username */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Company</label>
              <input
                name="company"
                placeholder="Company name"
                onChange={handleChange}
                className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 text-sm   outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Username</label>
              <input
                name="username"
                placeholder="username"
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
              placeholder="Street, City"
              onChange={handleChange}
              className="w-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 text-sm   outline-none"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUserModal;

