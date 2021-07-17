import Grid from "@material-ui/core/Grid";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
// import { Bouquets } from "../src/models";
import { useRouter } from "next/router";

export default function HomeContent() {
  const router = useRouter();
  let slug = router.query.slug;
//   const [bouquets, setBouquets] = useState([]);

//   useEffect(() => {
//     fetchPosts();
//     async function fetchPosts() {
//       const bouquetsData = await DataStore.query(Bouquets);
//       setBouquets(bouquetsData);
//     }
//     const subscription = DataStore.observe(Bouquets).subscribe(() =>
//       fetchPosts()
//     );
//     return () => subscription.unsubscribe();
//   }, []);

  return (
  
  <>
  
  </>);
}
