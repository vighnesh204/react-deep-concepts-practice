const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 p-6">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="w-[280px] bg-white rounded-xl shadow-md p-4 animate-pulse"
          >
            {/* Image */}
            <div className="h-40 w-full bg-gray-200 rounded-lg"></div>

            {/* Content */}
            <div className="mt-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-1/3"></div>

              <div className="flex justify-between mt-3">
                <div className="h-3 bg-gray-200 rounded w-16"></div>
                <div className="h-3 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;