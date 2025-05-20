import './pages/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import About from "./pages/About.tsx";
import Education from "./pages/Education.tsx";
import Certificates from "./pages/Certificates.tsx";
import Contact from "./pages/Contact.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Experience from "./pages/Experience.tsx";
import i18n from "./i18n.js";

function App() {

    const changeLang = (lng: string) => {
        i18n.changeLanguage(lng);
    }


  return (
    <>
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Layout/>}>
                    <Route path="about" element={<About />} />
                    <Route path="education" element={<Education />} />
                    <Route path="certificates" element={<Certificates />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="contact" element={<Contact />} />

                </Route>
            </Routes>
        </BrowserRouter>
        <div>
            <button onClick={() => changeLang("cs")}> cs </button>
            <button onClick={() => changeLang("en")}> en </button>
            <button onClick={() => changeLang("jv")}> jv </button>
            <button onClick={() => changeLang("tlh")}> tlh </button>
            <button onClick={() => changeLang("hu")}> hu </button>
            <button onClick={() => changeLang("eo")}> eo </button>
            <button onClick={() => changeLang("lat")}> lat </button>
        </div>

    </>
  )
}

export default App
