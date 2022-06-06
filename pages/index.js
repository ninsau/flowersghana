import dynamic from "next/dynamic";
import BackdropComponent from "../components/loader/fullpage";
import HeadComponent from "../components/navigation/head";

export default function Home() {
  const Content = dynamic(() => import("../components/homepage/content"), {
    loading: () => <BackdropComponent />,
  });
  return (
    <>
      <HeadComponent />
      <Content />
    </>
  );
}
