import Hero from "../components/layout/Hero";
import JobWinningTemplate from "../components/layout/JobWinningTemplate";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="mt-15 p-4">
        <Hero />
        <JobWinningTemplate />
      </main>
    </>
  );
};

export default Home;
