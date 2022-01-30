import dynamic from "next/dynamic";
import BackdropComponent from "../../components/loader/fullpage";

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
