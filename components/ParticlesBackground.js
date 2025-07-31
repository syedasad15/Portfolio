import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

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
        background: { color: 'transparent' },
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: ['#fbbf24', '#b91c1c', '#1e3a8a'] }, // Amber, burgundy, navy for vibrancy
          links: {
            enable: true,
            color: '#fbbf24',
            distance: 120,
            opacity: 0.4,
          },
          move: {
            enable: true,
            speed: 0.8, // Slightly faster for dynamic effect
            outModes: { default: 'out' },
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
          },
          opacity: {
            value: { min: 0.3, max: 0.6 },
            random: true,
          },
        },
        interactivity: {
          detectsOn: 'window',
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: { enable: true },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        performance: {
          enable: true,
          maxFps: 60,
        },
        detectRetina: true,
      }}
    />
  );
}
