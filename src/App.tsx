import { useEffect } from "react";
import { Route, Routes, useRoutePath } from "./lib/router";
import { initLenis } from "./lib/lenis";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  const path = useRoutePath();

  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
