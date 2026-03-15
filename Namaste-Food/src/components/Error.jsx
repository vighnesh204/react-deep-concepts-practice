import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">

        {/* Error Code */}
        <h1 className="text-7xl font-bold text-red-500 mb-4">
          {err?.status || "Error"}
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-3">
          Oops! Something went wrong
        </h2>

        {/* Message */}
        <p className="text-gray-300 mb-6">
          {err?.statusText || err?.message || "The page you are looking for does not exist or an unexpected error occurred."}
        </p>

        {/* Button */}
        <Link
          to="/"
          className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-medium transition"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
};

export default Error;