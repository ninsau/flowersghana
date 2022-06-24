import CollectionsComponent from "../../components/Collections";
import MetaComponent from "../../components/Meta";
import { BRAND_NAME } from "../../lib";
import { ProductsType } from "../../lib/types";
import { Bouquets } from "../../src/models";
import { withSSRContext } from "aws-amplify";
import PageNotFound from "../404";

const Collections = (data: ProductsType) => {
  return (
    <>
      {data.products.length < 1 ? (
        <PageNotFound />
      ) : (
        <>
          <MetaComponent
            title={`Collections for ${data.slug} | ${BRAND_NAME}`}
          />
          <CollectionsComponent {...data} />
        </>
      )}
    </>
  );
};

export default Collections;

export async function getServerSideProps({ req, params }: any) {
  const SSR = withSSRContext({ req });
  const data = await SSR.DataStore.query(Bouquets, (item: any) =>
    item.or((item: any) =>
      item.category("contains", params.slug).tags("contains", params.slug)
    )
  );
  const subscription = SSR.DataStore.observe(Bouquets).subscribe(() => data);
  subscription.unsubscribe();

  return {
    props: { products: JSON.parse(JSON.stringify(data)), slug: params.slug },
  };
}
