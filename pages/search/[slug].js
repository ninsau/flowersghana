import dynamic from "next/dynamic";
import BackdropComponent from "../../components/loader/fullpage";
import HeadComponent from "../../components/navigation/head";

export default function Search() {
  const SearchComponent = dynamic(
    () => import("../../components/staticpages/search"),
    {
      loading: () => <BackdropComponent />,
    }
  );

  return (
    <>
      <HeadComponent />
      <SearchComponent />
    </>
  );
}
