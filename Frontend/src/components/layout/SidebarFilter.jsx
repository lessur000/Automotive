import useToggleFilter from "../../hooks/useToggleFilter";
import { GiHamburgerMenu, TfiClose } from "../ui/icons";

const SidebarFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  const { isToggle, toggle } = useToggleFilter();

  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:flex flex-col w-fit mt-20 gap-4">
        <h1 className="text-white font-bold text-3xl">Product Filter</h1>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-3 py-1 rounded-lg border-2 transition-all ${
              selectedCategory === category 
                ? "bg-blue-600 text-white border-blue-600" 
                : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={toggle}
          className="p-2 rounded-full "
        >
          {isToggle ? (
            <TfiClose size={24} className="fill-white" />
          ) : (
            <GiHamburgerMenu size={24} className="fill-white" />
          )}
        </button>
        <h1 className="text-white font-bold text-xl">Filters</h1>
      </div>

      {/* Mobile Menu */}
      {isToggle && (
        <div className="md:hidden absolute left-0 top-16 w-full bg-gray-900 z-50 p-6 shadow-xl border-t border-gray-700 mt-32">
          <h1 className="text-white font-bold text-2xl mb-4">Product Filter</h1>
          <div className="flex flex-col gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onSelectCategory(category);
                  toggle(); // Close menu after selection
                }}
                className={`px-4 py-2 rounded-lg text-center transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarFilter;