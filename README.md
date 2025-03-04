# ShoppyGlobe E-commerce Application

ShoppyGlobe is a modern e-commerce web application built using **React Vite**. It features product listings, search functionality, cart management, and dynamic routing.

## 🚀 Features
- Product listing with detailed descriptions
- Search functionality for easy navigation
- Shopping cart management with Redux
- Responsive UI using Tailwind CSS
- Data fetching and error handling
- Optimized for performance

## 🛠 Installation and Setup

### 1️⃣ Clone the Repository
To get started, clone the project repository from GitHub:
```sh
git clone https://github.com/your-username/shoppyglobe.git
cd shoppyglobe
```

### 2️⃣ Install Dependencies
Install all necessary dependencies using npm:
```sh
npm install
```

### 3️⃣ Start the Development Server
Run the following command to start the development server:
```sh
npm run dev
```
This will start the Vite development server, usually available at **http://localhost:5173**.

### 4️⃣ Running the Application
Once the server is running, open your browser and visit:
```
http://localhost:5173
```
This will load the application, where you can browse products, search for items, and manage your cart.

## 📌 Troubleshooting
If you encounter errors during installation or while running the application, try the following steps:
- Ensure you have **Node.js (v16 or later)** installed.
- If `npm install` fails, delete `node_modules` and `package-lock.json` and run `npm install` again:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```
- If you see `EPERM: operation not permitted` errors, try running the commands with administrator privileges.
- Restart the development server if changes are not reflected immediately.

## 📝 Additional Notes
- The project uses **Redux** for state management and **React Router** for navigation.
- Data is fetched from an API using the `fetch` function inside `useEffect`.
- Ensure your internet connection is active while fetching product data.

## 📜 License
This project is licensed under the **MIT License**.

