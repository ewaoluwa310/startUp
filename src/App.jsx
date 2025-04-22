import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Heros";
import Content from "./component/content/Content";
import Features from "./component/features/Features";
import Form from "./component/form/Form";
import Testimonial from "./component/testimonial/Testimonial";
import Abouts from "./component/about/Abouts";
import Gallery from "./component/gallery/Gallery";
import Team from "./component/team/Team";
import Contact from "./component/contact/Contact";
import Price from "./component/Pricing/Price";
import Footer from "./component/Footer/Footer";
import VideoPlayer from "./component/Video-player/VideoPlayer";
import { useState } from "react";
function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <div className="">
      <div className="">
        <Router>
          <Navbar />
          <div className="">
            <Hero />
            <Content />
            <Features />
            <Form />
            <Testimonial />
            <Abouts setPlayState={setPlayState} />
            <Gallery />
            <Team />
            <Contact />
            <Price />
          </div>

          <Footer />
        </Router>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
