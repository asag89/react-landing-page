

import "./app.css"
import travel1 from "./assets/1.jpg"
import travel2 from "./assets/2.jpg"
import travel3 from "./assets/3.jpg"

import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";
import Navbar from "./components/navbar/Navbar";

const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "Trips" },
  { url: "#", title: "Rewards" }
]

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imgSrc={travel1} />
      <Slider
        imgSrc={travel2}
        title={"Be an explorer!"}
        subTitle={"Our platform offers a wide variety of unique travel locations!"}
      />
      <Slider
        imgSrc={travel3}
        title={"Memories for a lifetime!"}
        subTitle={"Your dream vaction is only a few clicks away"}
        flipped={true}
      />
    </div>
  );
}

export default App;
