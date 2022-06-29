import Link from "next/link";
import { Fragment } from "react";
import { useDataWithLimit } from "../lib/hooks";
import { Sale } from "../src/models";

const SaleComponent = () => {
  const sales: Sale[] = useDataWithLimit(Sale, 1);

  return (
    <>
      <section
        aria-labelledby="sale-heading"
        className="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8"
      >
        {sales.map((sale) => (
          <Fragment key={sale.id}>
            <div className="max-w-2xl mx-auto lg:max-w-none">
              <h2
                id="sale-heading"
                className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
              >
                {sale.title}
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">
                {sale.content}
              </p>
              <Link href="/collections/sale">
                <a className="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto">
                  {sale.buttonText}
                </a>
              </Link>
            </div>
          </Fragment>
        ))}
      </section>
    </>
  );
};

export default SaleComponent;
