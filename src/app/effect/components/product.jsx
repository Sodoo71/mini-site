import { Nixie_One } from "next/font/google";

export const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-medium text-gray-800 line-clamp-1">
        {product.title}
      </h3>
      <p className="text-gray-500 text-sm line-clamp-2">
        {product.description}
      </p>
      <p className="text-black-600 font-bold mt-2">${product.price}</p>
      <buttom>View Details</buttom>
    </div>
  );
};