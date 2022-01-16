import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Dashboard from "../components/dashboard";
import LandingPage from "../components/landing";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <>
      {status !== "loading" && (
        <>
          {!session ||
          (session?.user?.email !== "cassidyblay@gmail.com" &&
            session?.user?.email !== "kmickey50@gmail.com") ? (
            <LandingPage />
          ) : (
            <Dashboard />
          )}
        </>
      )}
    </>
  );
};

export default Home;
