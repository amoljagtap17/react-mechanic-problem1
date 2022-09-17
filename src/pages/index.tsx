import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SAT Demo</title>
        <meta name="description" content="Prototype Application." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
