import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import Hero from "./components/shared/Hero";
import Technology from "./components/tech/Technology";
import type { Technology as TechnologyType } from "./techTypes";

const App = () => {
  const [technologies, setTechnologies] = useState<TechnologyType[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<TechnologyType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");
        if (!response.ok) {
          throw new Error("Unable to fetch technologies.json");
        }
        const data: TechnologyType[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error(error);
        toast.error("Could not load the technology data.");
      } finally {
        setLoading(false);
      }
    };
    void loadTechnologies();
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <main>
        {loading ? (
          <section className="loading-section">
            <p>Loading technologies...</p>
          </section>
        ) : (
          <Technology
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;