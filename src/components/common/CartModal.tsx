"use client";
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeCart, removeItem } from "@/src/redux/slice/CartSlice";
import { RootState } from "@/src/redux/store";

const CartModal: FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const handleRemoveItem = (
    ProductId: string,
    Size: string,
    ColorName: string
  ) => {
    dispatch(removeItem({ ProductId, Size, ColorName }));
  };

  return (
    <div className="fixed inset-0 z-[60] flex justify-end bg-black bg-opacity-50">
      {/* Cart Panel */}
      <div className="w-96 bg-white h-screen shadow-lg p-6 relative">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li
                key={`${item.ProductId}-${item.Size}-${item.Color.Name}`}
                className="py-4 flex justify-between"
              >
                <div>
                  <p className="text-lg font-semibold">{item.Product.Name}</p>
                  <p className="text-sm text-gray-500">Size: {item.Size}</p>
                  <p className="text-sm text-gray-500">
                    Color: {item.Color.Name}
                  </p>
                  <p className="text-sm text-gray-500">Qty: {item.Quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    Rs {item.Product.Price}
                  </p>
                  <button
                    className="text-red-500 text-sm mt-2"
                    onClick={() =>
                      handleRemoveItem(
                        item.ProductId,
                        item.Size,
                        item.Color.Name
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg text-gray-500">Your cart is empty</p>
        )}

        {/* Total Price */}
        <div className="mt-6 flex justify-between items-center">
          <span className="text-lg font-bold">Total:</span>
          <span className="text-lg font-bold">Rs {totalPrice.toFixed(2)}</span>
        </div>

        {/* Checkout and Close Buttons */}
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => dispatch(closeCart())}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
