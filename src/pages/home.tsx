import type { NextPage } from "next";
import { Navigation } from "components/sections";
import { useSession } from "next-auth/react";

const HomePage: NextPage = () => {
  const { data: session } = useSession();

  console.log("session::", { session });

  return <Navigation />;
};

export default HomePage;
