import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/about/About.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
