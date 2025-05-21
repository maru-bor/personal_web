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

        <div id="lang-btn">
            <button onClick={() => changeLang("cs")}> čeština </button>
            <button onClick={() => changeLang("en")}> english </button>
            <button onClick={() => changeLang("jv")}> basa jawa </button>
            <button onClick={() => changeLang("tlh")}> tlhIngan </button>
            <button onClick={() => changeLang("hu")}> magyar </button>
            <button onClick={() => changeLang("eo")}> esperanto </button>
            <button onClick={() => changeLang("lat")}> latinum </button>
        </div>

    </>
  )
}

export default App
