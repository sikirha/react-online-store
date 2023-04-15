import React from "react";

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <li className="">
      <img
        src={image}
        alt={title}
        className="w-full rounded-lg shadow-md cursor-pointer"
      />
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <h3>{title}</h3>
        <p>{`$ ${price}`}</p>
      </div>
      <p className="mb-2 px-2 text-gray-600">{category}</p>
    </li>
  );
}
