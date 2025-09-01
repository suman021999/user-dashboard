import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage
const loadUsers = () => {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : [];
};

// Save to localStorage
const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: loadUsers(),
  },
  reducers: {
    setUsers: (state, action) => {
      // merge API users with existing local ones
      const existingIds = new Set(state.users.map((u) => u.id));
      const merged = [
        ...state.users,
        ...action.payload.filter((u) => !existingIds.has(u.id)),
      ];
      state.users = merged;
      saveUsers(state.users);
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      saveUsers(state.users);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
        saveUsers(state.users);
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((u) => u.id !== action.payload);
      saveUsers(state.users);
    },
  },
});

export const { setUsers, addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;




