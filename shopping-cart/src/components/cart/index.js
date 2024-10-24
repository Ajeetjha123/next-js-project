"use client";

import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useEffect, useState } from "react/cjs/react.production.min";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalAmount(cart?.cartItems.reduce((acc, curr) => acc + curr?.price, 0));
  }, []);
  if (!cart?.cartItems.length)
    return <h1 className="text-4xl font-bold">Cart Is Empty.</h1>;
  return (
    <div className="bg-white py-4">
      <div className="mx-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#333]">Cart</h2>
        <div className="overflow-y-auto">
          <table className="mt-12 w-full border-collapse divide-y">
            <thead className="whitespace-nowrap text-left">
              <tr>
                <td className="text-base text-gray p-4">Title</td>
                <td>Price</td>
                <td>Remove </td>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap divide-y">
              {cart.cartItems.map((item) => (
                <tr>
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-6 w-max">
                      <div className="h-36 shrink-0">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-4">
                    <p className="text-lg font-bold text-black">
                      ${item.price}
                    </p>
                  </td>
                  <td className="py-5 px-4">
                    <Button >Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="max-w-xl ml-auto mt-6">
          <div>
            <p className="text-lg font-bold">TotalAmout: {totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
