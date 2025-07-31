import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60 },
          color: { value: "#58a6ff" },
          links: { enable: true, color: "#58a6ff" },
          move: { enable: true, speed: 0.3 },
          size: { value: 2 },
          opacity: { value: 0.5 }
        },
        background: { color: "#0f172a" }
      }}
    />
  )
}
