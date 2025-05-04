import { NavLink } from "react-router"; // Optional if using React Router

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 px-6">
      <h1 className="text-[8rem] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-md mb-6">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <NavLink
        to="/"
        className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Go to Homepage
      </NavLink>
    </div>
  );
};

export default NotFound;
