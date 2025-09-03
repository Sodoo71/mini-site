"use client";

import React, { useEffect, useState } from "react";
import { Hearder } from "./components/header";
import { ProductCard } from "./components/product";
import { Pagination } from "./components/Pagination";
import { Main } from "./components/main";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Hearder />
      <Main/>
      {/* Product List */}
      <main className="p-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        {/* Pagination */}

        <Pagination />
      </main>
    </div>
  );
}
