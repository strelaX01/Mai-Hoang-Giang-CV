import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cv from "./components/cv";
import PopupCertificate from "./components/PopupCertificate";
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ParticlesBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Cv />
        <PopupCertificate />
      </div>
    </>
  );
}

export default App;
