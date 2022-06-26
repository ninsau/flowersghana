import MetaComponent from "../components/Meta";
import SaleComponent from "../components/Banner";
import { BRAND_NAME } from "../lib";

const Banner = () => {
  return (
    <>
      <MetaComponent title={`Banner | ${BRAND_NAME}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Banner</h1>
      </div>
      <SaleComponent />
    </>
  );
};

export default Banner;

Banner.auth = true;
