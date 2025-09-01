# User Dashboard App

A React-based user management dashboard that allows you to view users in
a grid, create new users via a modal, and manage user state with Redux.

------------------------------------------------------------------------

## 🚀 Features

-   User dashboard with card grid layout\
-   Create new users via modal form\
-   State management with Redux Toolkit\
-   Responsive design with TailwindCSS

------------------------------------------------------------------------

## 📦 Tech Stack

-   **React** (Vite or CRA depending on setup)\
-   **Redux Toolkit** for state management\
-   **TailwindCSS** for styling
--  **Axios** for fetching

------------------------------------------------------------------------

## ⚙️ Setup Instructions

### 1. Clone the Repository

``` bash
git clone https://github.com/your-username/user-dashboard.git
cd user-dashboard
```

### 2. Install Dependencies

``` bash
npm install
```

### 3. Start Development Server

``` bash
npm run dev
```

> App will be available at `http://localhost:5173/` (if using Vite) or
> `http://localhost:3000/` (if using CRA).

### 4. Build for Production

``` bash
npm run build
```

------------------------------------------------------------------------

## 📂 Project Structure

    src/
     ├── assets/           # Static assets
     ├── components/       # Reusable components
     │    ├── CreateUserModal.jsx
     │    ├── EditUserModal.jsx
     │    ├── UserCard.jsx
     ├── pages/            # Page-level components
     │    ├── Dashboard.jsx
     │    ├── MainPage.jsx
     │    ├── UserPage.jsx
     ├── redux/            # Redux store & slices
     │    ├── store.js
     │    ├── userSlice.js
     ├── App.jsx
     ├── main.jsx
     ├── index.css

------------------------------------------------------------------------

## 🛠️ Available Scripts

-   `npm run dev` -- Start dev server\
-   `npm run build` -- Build production bundle\
-   `npm run preview` -- Preview production build\
-   `npm run lint` -- Run ESLint

------------------------------------------------------------------------

## 📖 Future Improvements

-   Add authentication\
-   Connect to real backend API\
-   Implement edit/delete user functionality
