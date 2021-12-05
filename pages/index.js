import dynamic from "next/dynamic";
// import BackdropComponent from "../components/loader/backdrop";
import Content from "../components/homepage/content"

export default function Home() {
  // const Content = dynamic(() => import("../components/homepage/content"), {
  //   loading: () => <BackdropComponent />,
  // });
  return (
    <>
      <Content />
    </>
  );
}
