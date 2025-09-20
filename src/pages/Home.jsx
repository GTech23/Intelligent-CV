import Features from "../components/ui/Features";
import Hero from "../components/ui/Hero";
import JobWinningTemplate from "../components/ui/JobWinningTemplate";
import Navbar from "../components/ui/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="mt-15 p-4">
        <Hero />
        <JobWinningTemplate />
        <Features />
      </main>
    </>
  );
};

export default Home;
