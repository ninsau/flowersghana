/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { cartStateStore } from "../lib/store";
import localforage from "localforage";
import { CartContentType } from "../lib/types";
import { PlusIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { CartProductImageComponent } from "./Images";

const CartItemsComponent = () => {
  const open = cartStateStore((state) => state.open);
  const setOpen = cartStateStore((state) => state.setOpen);
  const [products, setProducts] = React.useState<any>(null);
  const [removeCartItem, setRemoveCartItem] = React.useState(false);

  const fetchCartContent = async () => {
    try {
      const data: any = [];
      await localforage.iterate(function (value: CartContentType) {
        data.push({ ...value });
      });
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const sum = products?.reduce((a: any, b: any) => a + b.price, 0);
  const totalPrice: number = sum ? sum : 0;

  const removeProduct = async (title: string) => {
    try {
      localforage.removeItem(title);
      setRemoveCartItem(!removeCartItem);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchCartContent();
  }, [open, removeCartItem]);

  return (
    <>
      {products && products.length > 0 ? (
        <>
          {products?.map((product: CartContentType, i: number) => (
            <li key={i} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <CartProductImageComponent
                  src={product.image}
                  alt={`${product.title} image`}
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href={product.slug}> {product.title} </a>
                    </h3>
                    <p className="ml-4">₵{product.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.availability}
                  </p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="text-gray-500">Qty {product.quantity}</p>

                  <div className="flex">
                    <button
                      onClick={() => removeProduct(product.title)}
                      className="font-medium text-green-600 hover:text-green-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}

          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>₵{totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link href="/checkout">
                <div
                  onClick={() => setOpen(!open)}
                  className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 cursor"
                >
                  Checkout
                </div>
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{" "}
                <button
                  type="button"
                  className="font-medium text-green-600 hover:text-green-500"
                  onClick={() => setOpen(false)}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No items</h3>
          <p className="mt-1 text-sm text-gray-500">
            Select some items to show in cart.
          </p>
          <div className="mt-6">
            <Link href="/">
              <div
                onClick={() => setOpen(!open)}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Start shopping
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItemsComponent;
