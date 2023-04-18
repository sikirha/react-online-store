import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../ui/Button";

export default function ProductDetail() {
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {};
  return (
    <>
      <p className="mx-12 mt-4 text-grey-700">{category}</p>
      <section className="flex flex-col md:flex-row p-4">
        <img src={image} alt={title} className="w-full px-4 basis-1/12" />
        <div className="w-full flex-col p-4 basis-5/12">
          <h2 className="text-3xl font-bold py-2 ">{title}</h2>
          <p className="text-xl font-bold py-2 border-b border-gray-400">
            $ {price}
          </p>
          <p> {description}</p>
          <div className="flex items-center">
            <label className="text-brand font-bold" htmlFor="select">
              Option :{" "}
            </label>
            <select
              className=" p-1 m-4 border-2 border-dashed border-brand outline-none
              "
              id="select"
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          <Button text="Add to Cart" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
