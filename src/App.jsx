import { useState, useEffect } from "react";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from './pages/Home';
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { ThemeProvider } from "../themeProvider";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <ThemeProvider>
      <>
        <div >
          <Navbar />
          {
            <><Home /><About /> <Projects /> <Contact /><Footer /></>
          }
        </div>


      </>
    </ThemeProvider>

  );
}

export default App;
