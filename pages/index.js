import Hero from "../components/homepage/hero";
import Content from "../components/homepage/content";
import Bottom from "../components/homepage/bottom";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function Home() {
  return (
    <>
      <Hero />
      <CssBaseline />
      <Content />
      <Bottom />
    </>
  );
}
