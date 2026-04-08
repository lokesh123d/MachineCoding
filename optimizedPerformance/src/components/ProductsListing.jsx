import React from "react";
import { useEffect } from "react";
import fetchProductsData from "../data/productData";
import { useState } from "react";
import ProductCard from "./ProductCard";
import useDebounce from "../hooks/useDebounce";
import useThrottle from "../hooks/useThrottle";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const ProductsListing = () => {
  const [productData, setProductData] = useState([]);
  const [renderData, setRenderData] = useState([...productData]);
  const [query, setQuery] = useState("");
  const [orderType, setOrderType] = useState("");
  const debounceFunc = useDebounce(searchItem, 700);
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(2);
  const throttleFun = useThrottle(onScroll, 1000);
  const [cacheData, setcacheData] = useState({});
  useEffect(() => {
    async function fetchData() {
      // setloading(true);
      const data = await fetchProductsData(page, limit);
      // setloading(false);
      let newData = [...productData, ...data];
      setProductData(newData);
      setRenderData(newData);
    }
    fetchData();
  }, [page]);

  useEffect(() => {
    if (query.trim() === "") {
      setRenderData(productData);
      return;
    }

    debounceFunc();
  }, [query, productData, debounceFunc]);
  function searchItem() {
    const normalizedQuery = query.trim().toLowerCase();

    if (normalizedQuery === "") {
      setRenderData(productData);
      return;
    }

    if (cacheData[normalizedQuery]) {
      setRenderData(cacheData[normalizedQuery]);
      return;
    }

    const filteredData = productData.filter((item) =>
      item.title.toLowerCase().includes(normalizedQuery),
    );

    setRenderData(filteredData);

    setcacheData((prev) => ({
      ...prev,
      [normalizedQuery]: filteredData,
    }));
  }

  useEffect(() => {
    if (orderType === "") return;

    let sortedData = [...renderData]; // clone to avoid mutation

    if (orderType === "increase") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (orderType == "decrease") {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (orderType == "idle") {
      setRenderData(productData);
      return;
    }

    setRenderData(sortedData);
  }, [orderType]);

  function onScroll() {
    const percent =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    if (percent > 90) {
      setpage((prev) => prev + 1);
    }
    console.log("precent" + percent);
  }

  useEffect(() => {
    window.addEventListener("scroll", throttleFun);
    return () => window.removeEventListener("scroll", throttleFun);
  }, []);

  return (
    <div className="products-listing">
      <div className="products-controls">
        <input
          type="text"
          placeholder="Search Items.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="products-input"
        />

        <select
          name="filterPrice"
          id=""
          onChange={(e) => setOrderType(e.target.value)}
          value={orderType}
          className="products-select"
        >
          <option value="idle"> Select a Order</option>
          <option value="increase">Low to High</option>
          <option value="decrease">High to Low</option>
        </select>
      </div>

      {productData.length == 0 ? (
        <ShimmerSimpleGallery
          card
          row={2}
          col={3}
          gap={20}
          imageType="thumbnail"
          imageHeight={220}
          caption
        />
      ) : (
        <div className="products-grid">
          {renderData.map((item) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProductsListing;
