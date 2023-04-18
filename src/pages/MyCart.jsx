import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { getCart } from "../api/firebase";
import { useAuthContext } from "../components/context/AuthContext";
import { FaEquals } from "react-icons/fa";
import PriceCard from "../components/PriceCard";
import CartItem from "../components/CartItem";
import Button from "../ui/Button";

export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(["cart"], () => getCart(uid));

  if (isLoading) return <div>Loading...</div>;
  const shippingFee = 3;
  const hasProudcts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (acc, item) => acc + parseInt(item.price) * item.quantity,
      0
    );
  return (
    <section className="flex flex-col">
      <p className="text-2xl text-center font-bold pb-4 border-b border-gray-300 mt-4">
        My Cart
      </p>
      {!hasProudcts && <p>Your cart is empty</p>}
      {hasProudcts && (
        <>
          <ul className="border-b border-gray-300 mb-2">
            {products.map((product) => (
              <CartItem key={product.id} product={product} uid={uid} />
            ))}
          </ul>
          <div className="flex justify-between items-center mx-3 md:mx-16">
            <PriceCard text="Total Price" price={totalPrice} />
            <BsFillPlusCircleFill></BsFillPlusCircleFill>
            <PriceCard text="Shopping fee" price={shippingFee} />
            <FaEquals />
            <PriceCard text="Total" price={totalPrice + shippingFee} />
          </div>
          <Button className="mx-5" text="Order "></Button>
        </>
      )}
    </section>
  );
}
