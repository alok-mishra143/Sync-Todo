import { NavLink } from "react-router";

const Home = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 max-w-md w-full text-center border dark:border-gray-700">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to{" "}
          <span className="text-blue-600 dark:text-blue-400">TodoApp</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Organize your tasks efficiently and stay productive.
        </p>
        <div className="flex flex-col space-y-4">
          <NavLink
            to="/login"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 font-medium"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="w-full border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-200 font-medium"
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/dashboard"
            className="w-full text-gray-500 dark:text-gray-400 underline hover:text-gray-700 dark:hover:text-white transition duration-200"
          >
            Go to Dashboard
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default Home;
