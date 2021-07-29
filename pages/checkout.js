import dynamic from "next/dynamic";

export default function Checkout() {
  const CheckoutComponent = dynamic(() =>
    import("../components/checkout/checkout")
  );
  return <CheckoutComponent />;
}
