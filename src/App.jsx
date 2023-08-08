import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./fetch/fetchProject";

const App = () => {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  );
};
export default App;
