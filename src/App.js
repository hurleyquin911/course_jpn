import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artikel from "./pages/Artikel";
import About from "./pages/About";
import Course from "./pages/Course";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter basename="course_jpn">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
