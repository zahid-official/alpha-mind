import Image from "next/image";
import Banner from "./components/Banner";
import Feedback from "./components/Feedback";
import FAQ from "./components/FAQ";
import Support from "./components/Support";
import Learning from "./components/Learning";

export default function Home() {
  return (
    <>
      {/* banner */}
      <Banner></Banner>

      {/* learning */}
      <Learning></Learning>

      {/* feedback */}
      <Feedback></Feedback>

      {/* FAQ */}
      <FAQ></FAQ>

      {/* support */}
      <Support></Support>
    </>
  );
}
