import { CheckIcon } from "@heroicons/react/solid";
import { ProductImageComponent } from "./Images";
import { ProductsType } from "../lib/types";
import { Fragment } from "react";
import AddToCartComponent from "./AddToCart";

const ProductComponent = (data: ProductsType) => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product details */}
          {data.products.map((product, i: number) => (
            <Fragment key={i}>
              <div className="lg:max-w-lg lg:self-end">
                <div className="mt-4">
                  <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {product.title}
                  </h1>
                </div>

                <section aria-labelledby="information-heading" className="mt-4">
                  <h2 id="information-heading" className="sr-only">
                    Product information
                  </h2>

                  <div className="flex items-center">
                    <p className="text-lg text-gray-900 sm:text-xl">
                    ₵{product.amount}
                    </p>
                  </div>

                  <div className="mt-4 space-y-6">
                    <p className="text-base text-gray-500">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center">
                    <CheckIcon
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      aria-hidden="true"
                    />
                    <p className="ml-2 text-sm text-gray-500">
                      {product.availability}
                    </p>
                  </div>
                </section>
              </div>

              {/* Product image */}
              <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <ProductImageComponent
                    src={product.img}
                    alt={`${product.title} image`}
                  />
                </div>
              </div>

              {/* Product form */}
              <AddToCartComponent {...product} />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
