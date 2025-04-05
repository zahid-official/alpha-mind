import Image from "next/image";
import Banner from "./components/Banner";
import Feedback from "./components/Feedback";
import FAQ from "./components/FAQ";
import Support from "./components/Support";

export default function Home() {
  return (
    <>
      {/* banner */}
      <Banner></Banner>

      {/* feedback */}
      <Feedback></Feedback>

      {/* FAQ */}
      <FAQ></FAQ>

      {/* support */}
      <Support></Support>
    </>
  );
}
