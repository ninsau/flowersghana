import dynamic from "next/dynamic";

export default function Search() {
  const SearchComponent = dynamic(() =>
    import("../../components/staticpages/search")
  );

  return (
    <>
      <SearchComponent />
    </>
  );
}
