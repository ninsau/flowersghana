import Fuse from "fuse.js";
import _ from "lodash";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useData } from "../lib/hooks";
import { Bouquets } from "../src/models";
import { CategoryImageComponent } from "./Images";
import NotificationComponent from "./Notification";

const SearchComponent = (data: any) => {
  const searchItems = useData(Bouquets);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const slug = data.data;
  const toString = JSON.stringify(searchItems);
  const toJson = JSON.parse(toString);

  const option = {
    includeScore: true,
    keys: ["title", "tags", "category", "description", "amount"],
  };

  const fuse = new Fuse(toJson, option);

  const result = fuse.search(searchTerm);

  const enableSlug = useCallback(() => {
    if (searchTerm !== "") {
      router.push(searchTerm);
    } else {
      if (slug) {
        setSearchTerm(slug);
      }
    }
  }, [searchTerm]);

  useEffect(() => {
    enableSlug();
  }, [searchTerm]);

  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              Find an item by searching title, description, amount less than, or
              category.
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="text"
                id="text"
                onChange={_.debounce((e) => setSearchTerm(e.target.value), 900)}
                className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Search keyword(s)"
                defaultValue={searchTerm}
              />
            </div>
          </div>

          <div className="mt-6 -mb-6 flow-root border-t border-gray-200 divide-y divide-gray-200">
            {result && result.length > 0 ? (
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                {result.map((product: any, i: number) => (
                  <a
                    key={i}
                    href={`/product/${product.item.slug}`}
                    className="group"
                  >
                    <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                      <CategoryImageComponent
                        src={product.item.img}
                        alt={`${product.item.title} image`}
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{product.item.title}</h3>
                      <p>₵{product.item.amount}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      {product.item.availability}
                    </p>
                  </a>
                ))}
              </div>
            ) : (
              <NotificationComponent content="No items found." color={"red"} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
