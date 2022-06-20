import { NextPage } from "next";
import { BRAND_BUTTON_TEXT, BRAND_DESCRIPTION, BRAND_TAGLINE } from "../lib";
import {
  HeroImageComponent,
  CollectionsImageComponent,
  DecorativeImageComponent,
} from "./Images";
import ActionComponent from "./Action";
import TestimonialsComponent from "./Testimonials";
import { collections } from "../lib";
import TrendingProducts from "./Trending";
import Link from "next/link";
import SaleComponent from "./Sale";
import AdditionsComponent from "./Additions";

const LandingPageComponent: NextPage = () => {
  return (
    <>
      <div className="bg-white">
        <main>
          {/* Hero */}
          <div className="flex flex-col border-b border-gray-200 lg:border-0">
            <ActionComponent />

            <div className="relative">
              <div
                aria-hidden="true"
                className="hidden absolute w-1/2 h-full bg-gray-100 lg:block"
              />
              <div className="relative bg-gray-100 lg:bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                  <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                    <div className="lg:pr-16">
                      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                        {"Send someone a bouquet of beautiful flowers"}
                      </h1>
                      <p className="mt-4 text-xl text-gray-600">
                        {
                          "All our flowers and plants are freshly cut, and are delivered directly from the farm."
                        }
                      </p>
                      <div className="mt-6">
                        <Link href="/collections/popular">
                          <a className="inline-block bg-green-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-green-700">
                            {BRAND_BUTTON_TEXT}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
                <HeroImageComponent />
              </div>
            </div>
          </div>

          {/* Trending products */}
          <section aria-labelledby="trending-heading" className="bg-white">
            <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:px-8">
              <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
                <h2
                  id="trending-heading"
                  className="text-2xl font-extrabold tracking-tight text-gray-900"
                >
                  Trending
                </h2>
                <Link href="/collections/featured">
                  <a className="hidden sm:block text-sm font-semibold text-green-600 hover:text-green-500">
                    See everything<span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </div>

              <TrendingProducts />

              <div className="mt-12 px-4 sm:hidden">
                <Link href="/collections/featured">
                  <a className="text-sm font-semibold text-green-600 hover:text-green-500">
                    See everything<span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </section>

          {/* Collections */}
          <section
            aria-labelledby="collections-heading"
            className="bg-gray-100"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                <h2
                  id="collections-heading"
                  className="text-2xl font-extrabold text-gray-900"
                >
                  Collections
                </h2>

                <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                  {collections.map((collection) => (
                    <Link key={collection.name} href={collection.href}>
                      <div className="group relative cursor">
                        <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                          <CollectionsImageComponent
                            src={collection.imageSrc}
                            alt={collection.imageAlt}
                          />
                        </div>
                        <h3 className="mt-6 text-sm text-gray-500">
                          <>
                            <span className="absolute inset-0" />
                            {collection.name}
                          </>
                        </h3>
                        <p className="text-base font-semibold text-gray-900">
                          {collection.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Sale and testimonials */}
          <div className="relative overflow-hidden">
            {/* Decorative background image and gradient */}
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
                <DecorativeImageComponent />
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
            </div>

            {/* Sale */}
            <SaleComponent />

            <TestimonialsComponent />

         
          </div>
          <AdditionsComponent/>
        </main>
      </div>
    </>
  );
};

export default LandingPageComponent;
