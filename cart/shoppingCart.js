import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import React, { useEffect, useState } from "react";
import localforage from "localforage";

export default function ShoppingCartComponent() {
  const [count, setCount] = useState(0);
  // const [aa, setA] = useState('')

  // useEffect(()=>{
  //   localforage.getItem('key', function (err, value) {
  //   // if err is non-null, we got an error. otherwise, value is the value
  //   setA(value)
  // });

  // }, [])

  // console.log(aa)

  useEffect(()=>{
    localforage
    .length()
    .then(function (numberOfKeys) {
      // Outputs the length of the database.
      setCount(numberOfKeys);
      // setB(numberOfKeys);
    })
    .catch(function (err) {
      // This code runs if there were any errors
      console.log(err);
    });
  }, [])


  //   localforage.length().then(function(numberOfKeys) {
  //     // Outputs the length of the database.
  //     console.log(numberOfKeys);
  // }).catch(function(err) {
  //     // This code runs if there were any errors
  //     console.log(err);
  // });

  return (
    <>
      <Badge badgeContent={count} color={"secondary"}>
        <ShoppingCartOutlinedIcon />
      </Badge>
    </>
  );
}
