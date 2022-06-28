import { format } from "date-fns";
import { useDataWithLimit } from "../lib/hooks";
import { CheckoutNew } from "../src/models";
import { ImageComponent } from "./Images";
import React, { Fragment } from "react";
import { Menu, Transition, Dialog } from "@headlessui/react";
import {
  DotsVerticalIcon,
  CheckIcon,
  CheckCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import { BRAND_URL, classNames, copyText } from "../lib";
import { DataStore } from "aws-amplify";
import { orderUpdateMail } from "../lib/api-helper";

const DashboardComponent = () => {
  const orders = useDataWithLimit(CheckoutNew, 1000);
  const [open, setOpen] = React.useState(false);
  const [order, setOrder] = React.useState<CheckoutNew | null>(null);
  const [copy, setCopy] = React.useState("Copy");
  const [show, setShow] = React.useState(false);

  const updateTracking = React.useCallback(
    async (value: string, id: string) => {
      const original = await DataStore.query(CheckoutNew, id);

      try {
        await DataStore.save(
          CheckoutNew.copyOf(original!, (updated) => {
            updated.tracking = value;
          })
        );

        await orderUpdateMail(original!.email!, value);
      } catch (error) {
        console.log(error);
      } finally {
        setShow(true);
      }
    },
    []
  );

  const viewOrder = React.useCallback(
    async (order: CheckoutNew | null, state: boolean) => {
      try {
        setOrder(order);
        setOpen(state);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  const allowCopy = React.useCallback(async (order: CheckoutNew | null) => {
    const final = `Recipient Address: ${order?.address}, ${order?.apartment ?? " "}, ${order?.city},
    ${order?.region}\n
    Recipient Name: ${order?.firstName} ${order?.lastName} \n
    Recipient Phone: ${order?.phone} \n
    Instructions: ${order?.instructions ?? "none"}\n
    Note: ${order?.note ?? "none"}\n`;
    try {
      copyText(final);
      setCopy("Copied!");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20 sm:px-6 sm:py-24">
          <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
            <div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
              <p className="mt-2 text-sm text-gray-500">
                Check the status of recent orders, manage returns, and discover
                similar products.
              </p>
            </div>
          </div>
          <div className="mt-12 space-y-16 sm:mt-16">
            {orders.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`bg-white border-8 ${item.tracking === "Order placed" && "border-red-800"} ${item.tracking === "Delivered" && "border-green-200"} shadow-sm sm:rounded-lg sm:border`}
                >
                  <h3 className="sr-only">
                    {`Order ${item.tracking} on
                    ${(
                      <time
                        dateTime={format(
                          new Date(item.updatedAt as unknown as number),
                          "MMM dd yyyy"
                        )}
                      >
                        {format(
                          new Date(item.updatedAt as unknown as number),
                          "MMM dd yyyy"
                        )}
                      </time>
                    )}`}
                  </h3>

                  <div className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
                    <dl className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                      <div>
                        <dt className="font-medium text-gray-900">
                          Order number
                        </dt>
                        <dd className="mt-1 text-gray-500">
                          {item.trackingID}
                        </dd>
                      </div>
                      <div className="hidden sm:block">
                        <dt className="font-medium text-gray-900">
                          Date placed
                        </dt>
                        <dd className="mt-1 text-gray-500">
                          <time
                            dateTime={format(
                              new Date(item.createdAt as unknown as number),
                              "MMM dd yyyy"
                            )}
                          >
                            {format(
                              new Date(item.createdAt as unknown as number),
                              "MMM dd yyyy"
                            )}
                          </time>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">
                          Total amount
                        </dt>
                        <dd className="mt-1 font-medium text-gray-900">
                          ₵{item.amount}
                        </dd>
                      </div>
                    </dl>

                    <Menu
                      as="div"
                      className="relative flex justify-end lg:hidden"
                    >
                      <div className="flex items-center">
                        <Menu.Button className="-m-2 p-2 flex items-center text-gray-400 hover:text-gray-500">
                          <span className="sr-only">
                            Options for item {item.trackingID}
                          </span>
                          <DotsVerticalIcon
                            className="w-6 h-6"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-bottom-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <span
                                  onClick={() => viewOrder(item, true)}
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm cursor"
                                  )}
                                >
                                  View
                                </span>
                              )}
                            </Menu.Item>
                            <span className="flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                              <select
                                id="location"
                                name="location"
                                className="block w-full pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                                defaultValue={item.tracking}
                                onChange={(e) =>
                                  updateTracking(e.target.value, item.id)
                                }
                              >
                                <option>Order placed</option>
                                <option>Processing</option>
                                <option>En route</option>
                                <option>Delivered</option>
                              </select>
                            </span>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                      <span
                        onClick={() => viewOrder(item, true)}
                        className="flex items-center justify-center bg-white py-2 px-2.5 border cursor border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        <span>View Order</span>
                        <span className="sr-only">{item.trackingID}</span>
                      </span>
                      <span className="flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        <select
                          id="location"
                          name="location"
                          className="block w-full pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                          defaultValue={item.tracking}
                          onChange={(e) =>
                            updateTracking(e.target.value, item.id)
                          }
                        >
                          <option>Order placed</option>
                          <option>Processing</option>
                          <option>En route</option>
                          <option>Delivered</option>
                        </select>

                        <span className="sr-only">
                          for item {item.trackingID}
                        </span>
                      </span>
                    </div>
                  </div>
                  {/* Products */}
                  <h4 className="sr-only">Items</h4>
                  <ul role="list" className="divide-y divide-gray-200">
                    {JSON.parse(item.cart).map((product: any, i: number) => (
                      <li key={i} className="p-4 sm:p-6">
                        <div className="flex items-center sm:items-start">
                          <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden sm:w-40 sm:h-40">
                            <ImageComponent
                              src={`https://res.cloudinary.com/deyudesls/image/upload/${product.image}`}
                              alt={product.title}
                              height={180}
                              width={180}
                            />
                          </div>
                          <div className="flex-1 ml-6 text-sm">
                            <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                              <h5>{product.title}</h5>
                              <p className="mt-2 sm:mt-0">₵{product.price}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 sm:flex sm:justify-between">
                          <div className="flex items-center"></div>

                          <div className="mt-6 border-t border-gray-200 pt-4 flex items-center space-x-4 divide-x divide-gray-200 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0">
                            <div className="flex-1 flex justify-center">
                              <a
                                href={`${BRAND_URL}/product/${product.slug}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-green-600 whitespace-nowrap hover:text-green-500"
                              >
                                View product
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                  <div>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-red-900"
                      >
                         {new Date(order?.deliveryDate!).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                          })}

                        
                      </Dialog.Title>

                      <div className="mt-2">
                        <p className="text-sm leading-4">Recipient Address </p>
                        <p className="text-sm text-gray-500">
                          {order?.address}, {order?.apartment}, {order?.city},{" "}
                          {order?.region}
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm leading-4">Recipient Details </p>
                        <p className="text-sm text-gray-500">
                          {order?.firstName} {order?.lastName}, {order?.phone}
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm leading-4">Instructions </p>
                        <p className="text-sm text-gray-500">
                          {order?.instructions ?? "none"}
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm leading-4">Notes </p>
                        <p className="text-sm text-gray-500">
                          {order?.note ?? "none"}
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm leading-4">Sender Details </p>
                        <p className="text-sm text-gray-500">{order?.email}, {order?.phone}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-2 sm:text-sm"
                      onClick={() => allowCopy(order)}
                    >
                      {copy}
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* notification */}

      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      Successfully updated!
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Tracking status has been updated.
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      type="button"
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
