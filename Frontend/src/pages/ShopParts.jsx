  import Header from "../components/layout/Header";
  import SidebarFilter from "../components/layout/SidebarFilter";
  import styles from "../styles/twStyles";

  import ProductList from "../components/product/ProductList";
  import useFetchProducts from "../hooks/useFetchProducts";
  import { useEffect, useMemo, useState } from "react";
  import Pagination from "../components/product/Pagination";

  const ShopParts = () => {
    const { products, loading } = useFetchProducts();
    const [selectedCategory, setSelectedCategory] = useState("All Products");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 8;

    const categories = [
      "All Products",
      ...new Set(products.map((p) => p.category)),
    ];


    //I useMemo for performance
    
    // const filteredProducts =
    //   selectedCategory === "All Products"
    //     ? products
    //     : products.filter((p) => p.category === selectedCategory);

    const filteredProducts = useMemo(() => {
      return selectedCategory === "All Products"
        ? products
        : products.filter((p) => p.category === selectedCategory);
    }, [products, selectedCategory]);

    //  search filtering
    // const searchedProducts = filteredProducts.filter((product) =>
    //   product.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    const searchedProducts = useMemo(() => {
      return filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }, [filteredProducts, searchQuery]);

    // const start = (currentPage - 1) * itemsPerPage;
    // const currentItems = searchedProducts.slice(start, start + itemsPerPage);

    const currentItems = useMemo(() => {
      const start = (currentPage - 1) * itemsPerPage;
      return searchedProducts.slice(start, start + itemsPerPage);
    }, [searchedProducts, currentPage, itemsPerPage]);


    const totalPages = Math.ceil(searchedProducts.length / itemsPerPage);

    useEffect(() => {
      setCurrentPage(1);
    }, [selectedCategory, searchQuery]);

    return (
      <>
        <Header />
        <div className={`${styles.paddings} container mx-auto `}>
          <div className="grid md:grid-cols-5 gap-4 mt-20">
            <div className="col-span-1 row-span-5">
              <SidebarFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            <div className="col-span-4 row-span-5">
              <ProductList
                products={currentItems}
                loading={loading}
                setSearchQuery={setSearchQuery}
              />
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  export default ShopParts;
