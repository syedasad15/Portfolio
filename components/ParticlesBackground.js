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
        background: { color: 'transparent' }, // Transparent to blend with gradient
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } }, // Reduced for performance
          color: { value: ['#58a6ff', '#a855f7', '#ec4899'] }, // Gradient colors
          links: {
            enable: true,
            color: '#58a6ff',
            distance: 120,
            opacity: 0.3,
          },
          move: {
            enable: true,
            speed: 0.5, // Slower for subtle effect
            outModes: { default: 'out' },
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
          },
          opacity: {
            value: { min: 0.2, max: 0.4 },
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
            resize: { enable: true },
          },
          modes: {
            repulse: {
              distance: 80,
              duration: 0.4,
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
