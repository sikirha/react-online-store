import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { addOrUpdateToCart, removeFromCart } from "../api/firebase";
const ICON_CLASS =
  "transition-all cursor-pointer hover:scale-110 hover:text-brand";

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => {
    removeFromCart(uid, id);
  };

  return (
    <li className="mx-5 flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
      <div className="flex flex-1 ml-4 justify-between">
        <div className="">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold text-brand">{option}</p>
          <p>$ {price}</p>
        </div>
        <div className="text-2xl flex items-center">
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span className="mx-5">{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
          <RiDeleteBin5Fill
            className={`${ICON_CLASS} ml-10`}
            onClick={handleDelete}
          />
        </div>
      </div>
    </li>
  );
}
