import { NextPage } from "next";
import { FeaturedImageComponent } from "./Images";
import { Bouquets } from "../src/models";
import { useDataWithFilter } from "../lib/hooks";

const TrendingProducts: NextPage = () => {
  const products: Bouquets[] = useDataWithFilter(Bouquets, 12);

  return (
    <>
      <div className="mt-8 relative">
        <div className="relative w-full overflow-x-auto">
          <ul
            role="list"
            className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
          >
            {products.map((product) => (
              <li
                key={product.id}
                className="w-64 inline-flex flex-col text-center lg:w-auto"
              >
                <a href={`/product/${product.slug}`}>
                  <div className="group relative">
                    <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                      <FeaturedImageComponent
                        src={product.img as unknown as string}
                        alt={`${product.title} image`}
                      />
                      <div className="flex items-end p-4" aria-hidden="true">
                        <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                          {product.title} &middot; {`₵${product.amount}`}
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
