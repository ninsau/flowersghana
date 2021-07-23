import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useCookies } from "react-cookie";
import React, { useEffect } from "react";

export default function ShoppingCartComponent() {
  const [cookie, setCookie, removeCookie] = useCookies([]);

    removeCookie("cart")
//   removeCookie("Bright Places")
//   removeCookie("Sweet Heart")
//   removeCookie("Blue Bliss")
//   removeCookie("Blush Hush")
//   removeCookie("Honey Pot")
//   removeCookie("Pong Tail")


const CookieCount = () => {
    let count = [];

    for (const [key, value] of Object.entries(cookie)) {
      if (
        key !== "_ga" &&
        key !== "_ga_F0MWV1FSS0" &&
        key !== "next-auth.callback-url"
      ) {
        let quantity = value.quantity;
        count.push({ key, quantity });
      }
    }
    return(count.length);
  }

//   useEffect(() => {

    // CookieCount()
  
    // }, [cookie]);
  return (
    <>
      {CookieCount < 1 ? (
        <Badge badgeContent={0}>
          <ShoppingCartOutlinedIcon />
        </Badge>
      ) : (
        <Badge badgeContent={CookieCount()} color="secondary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      )}
    </>
  );
}
