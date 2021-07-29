import dynamic from "next/dynamic";

export default function Home() {
  const Content = dynamic(() => import("../components/homepage/content"));
  return (
    <>
      <Content />
    </>
  );
}
