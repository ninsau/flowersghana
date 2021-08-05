import dynamic from "next/dynamic";
import BackdropComponent from "../components/loader/backdrop";

export default function Checkout() {
  const CheckoutComponent = dynamic(() =>
    import("../components/checkout/checkout"),  {
      loading: () => <BackdropComponent/>
    }
  );
  return <CheckoutComponent />;
}
