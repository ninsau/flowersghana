import MetaComponent from "../components/Meta";
import TrackingComponent from "../components/Tracking";

const Tracking = () => {
  return (
    <>
      <MetaComponent title="Track your order" />
      <TrackingComponent />
    </>
  );
};

export default Tracking;
