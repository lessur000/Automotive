const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  // Only render pagination if theres more than 1 page
  if (totalPages <= 1) return null;

  return (
    <div className="mt-6 flex gap-2 justify-center mx-auto">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded border ${
            currentPage === index + 1
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
