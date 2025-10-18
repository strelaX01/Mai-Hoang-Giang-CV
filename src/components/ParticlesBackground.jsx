import { useEffect, useMemo } from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: { value: "#0d1117" }, 
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#03832aff" },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.3, width: 1 },
      move: { enable: true, speed: 1, outModes: { default: "bounce" } },
      number: { value: 60 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  return <Particles id="tsparticles" options={options} />;
}

export default ParticlesBackground;
