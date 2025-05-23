import { memo } from "react";
import AddtoCartButton from "../ui/AddtoCartButton.jsx";

const ProductList = ({ products, searchQuery, setSearchQuery }) => {
 
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between mb-10 gap-10">
          <div className="flex-1 flex justify-end ">
            <input
              type="text"
              className="2xl:w-[500px] w-full rounded-full bg-gray-200 pl-12 py-3 pr-4 focus:outline-none md:max-w-[400px]"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} //update searchQuery state
            />
          </div>
        </div>
        {/* Main content  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="bg-gray-800 p-4 rounded-lg">
                <div className="bg-[#F0EEED] rounded-xl overflow-hidden">
                  <img
                    src={`http://localhost:3000${product.image}`}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-2 font-semibold text-xl text-white">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-5">
                  <p className="text-lg font-bold text-white">
                    ₱{product.price.toLocaleString()}
                  </p>
                  <AddtoCartButton product={product}/>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              No products found.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(ProductList);
