import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // using the lightweight engine

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0f172a" },
        particles: {
          number: { value: 60 },
          color: { value: "#58a6ff" },
          links: {
            enable: true,
            color: "#58a6ff",
            distance: 150,
            opacity: 0.4,
          },
          move: {
            enable: true,
            speed: 0.3,
          },
          size: {
            value: 2,
            random: true,
          },
          opacity: {
            value: 0.3, // slightly dimmer
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // particles move away on hover
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
