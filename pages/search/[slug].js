import dynamic from "next/dynamic";
import BackdropComponent from "../../components/loader/backdrop";

export default function Search() {
  const SearchComponent = dynamic(
    () => import("../../components/staticpages/search"),
    {
      loading: () => <BackdropComponent />,
    }
  );

  return (
    <>
      <SearchComponent />
    </>
  );
}
