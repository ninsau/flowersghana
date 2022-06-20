import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import localforage from "localforage";
import { cartStateStore } from "../lib/store";

const CartIconComponent = () => {
  const open = cartStateStore((state) => state.open);
  const setOpen = cartStateStore((state) => state.setOpen);
  const [count, setCount] = React.useState(0);

  const fetchCount = async () => {
    try {
      const value = await localforage.length().then(function (numberOfKeys) {
        setCount(numberOfKeys);
      });
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchCount();
  }, [open]);

  return (
    <>
      <div className="flow-root">
        <span
          onClick={() => setOpen(!open)}
          className="group -m-2 p-2 flex items-center cursor"
        >
          <ShoppingCartIcon
            className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
          <span
            className={`ml-2 text-sm font-medium ${
              count < 1
                ? "text-gray-700 group-hover:text-gray-800"
                : "text-red-700 group-hover:text-red-800"
            } `}
          >
            {count}
          </span>
          <span className="sr-only">items in cart, view bag</span>
        </span>
      </div>
    </>
  );
};

export default CartIconComponent;
