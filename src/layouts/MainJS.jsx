import React from "react";
// import HeaderJS from "../components/header/Header";
import Partners from "../components/hamkorlar/Partners";
// import Rahbariyat from "../components/rahbariyat/Raxbariyat";
// import About from "../components/about/About";
import News from "../components/news/News";
import Lidership from "../components/rahbariyat/Lidership";
// import Galary from "../components/galareya/Galary";
import Contact from "../components/contact/Contact";
import HeaderJS from "../components/header/Header.jsx";
// import Hamkorlar from "../components/hamkorlar/Hamkorlar";
// import Faoliyati from "../components/faoliyati/Faoliyati";
// import Deyjistlar from "../components/deyjistlar/Deyjistlar";
// import Projects from "../components/projects/Projects";

export default function MainJS() {
  return (
    <div>
      {/* <HeaderJS /> */}
      {/* <Rahbariyat />
      <About />
      <Projects />
      <Galary />
      <Faoliyati />
      <Deyjistlar />
      */}

      <Partners />
      <Lidership />
      <News />
      <Contact />
    </div>
  );
}
