import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { Checkout, Cart } from "../src/models";
import { signOut } from "next-auth/react";
import moment from "moment";
import { truncate } from "lodash";
import Head from "next/head";

const Dashboard: NextPage = () => {
  const [samples, setSamples] = useState<Checkout[]>([]);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const samplesData: Checkout[] = await DataStore.query(
        Checkout,
        Predicates.ALL,
        {
          sort: (s) => s.calender(SortDirection.DESCENDING),
        }
      );
      setSamples(samplesData);
    }
    const subscription = DataStore.observe(Checkout).subscribe(() =>
      fetchPosts()
    );
    return () => subscription.unsubscribe();
  }, []);

  const tracking = async (item: any) => {
    let newArr: any = [];
    const track: Cart[] = await DataStore.query(Cart, (c) =>
      c.trackOrder("eq", item)
    );
    const open: any = track.map((a) => JSON.parse(a.cart || ""));

    const getItem: any = open.map((b: any) =>
      b.map((m: any, i: number) =>
        newArr.push(m["key"].split(" ").join("-").toLowerCase())
      )
    );

    for (let index = 0; index < newArr.length; index++) {
      window.open(`https://www.flowersghana.com/bouquet/${newArr[index]}`);
    }
  };

  return (
    <>
      <Head>
        <title>Orders | FlowersGhana</title>
        <meta
          name="description"
          content="Order management page for flowersGhana"
        />
        <link
          rel="icon"
          href="https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_50,w_50/v1626707839/flowersghanaLogo.webp"
        />
      </Head>
      <button
        type="button"
        onClick={() => signOut()}
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
      >
        Sign Out
      </button>

      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-5 lg:px-8 xl:mt-28">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              {samples.length > 0 ? (
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Recipient
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Delivery Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Note
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Special Instructions
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Sender
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {samples.map((person: Checkout, i: number) => (
                        <tr key={i}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {moment(person.createdAt).startOf("day").fromNow()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {`${person.firstname} ${person.lastname}`}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {person.email}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {person.phone}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {person.region}
                            </div>
                            <div className="text-sm text-gray-500">
                              {truncate(
                                `${person.city} ${person.location} ${person.location2}`
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {moment(person.calender).format("MMM Do YY")}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {truncate(person.note || "No Note")}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {truncate(person.insturctions || "No Instructions")}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {person.sfirstname}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {person.sphone}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="text-sm text-gray-500">
                              <a
                                href="#"
                                onClick={() => tracking(person.trackOrder)}
                                className="text-sm text-indigo-600 hover:text-indigo-900"
                              >
                                View
                              </a>{" "}
                              |{" "}
                              <a
                                href={`https://api.whatsapp.com/send?text=${
                                  `Recipient: ${person.firstname} ${
                                    person.phone
                                  }\n\n
                              Location: ${person.city} ${person.location} ${
                                    person.location2
                                  }\n\n
                              ${person.note && `Note: ${person.note}`}` || ""
                                }\n\n
                              ${
                                (person.insturctions &&
                                  `Note: ${person.insturctions}`) ||
                                ""
                              }`}
                                target={"_blank"}
                                rel="noreferrer"
                                className="text-sm text-green-600 hover:text-green-900"
                              >
                                Share
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                "Loading..."
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
