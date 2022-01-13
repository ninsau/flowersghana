import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { DataStore } from "aws-amplify";
import { Checkout } from "../src/models";
import { useSession, signIn, signOut } from "next-auth/react"


const Dashboard: NextPage = () => {
  const [samples, setSamples] = useState<Checkout[]>([]);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const samplesData: Checkout[] = await DataStore.query(Checkout);
      setSamples(samplesData);
    }
    const subscription = DataStore.observe(Checkout).subscribe(() =>
      fetchPosts()
    );
    return () => subscription.unsubscribe();
  }, []);


  const { data: session } = useSession()
  if(session) {
    return <>
      {/* Signed in as {session.user.email} <br/> */}
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }

  return (
    <>
      {samples.map((sample) => {
        return (
          <>
            <h1>{sample.firstname}</h1>
            <br />
            {/* <p>{sample.content}</p> */}
            Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
          </>
        );
      })}
    </>
  );
};

export default Dashboard;
