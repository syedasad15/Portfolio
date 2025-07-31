import Head from 'next/head';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../components/ParticlesBackground';

export default function Home() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      <Head>
        <title>Syed Asad Ali Sherazi | AI Engineer Portfolio</title>
        <meta name="description" content="Portfolio of Syed Asad Ali Sherazi, an AI Engineer specializing in LLMs, Generative AI, and MLOps pipelines." />
        <meta name="keywords" content="AI Engineer, Machine Learning, NLP, LLMs, Generative AI, MLOps, Portfolio" />
        <meta name="author" content="Syed Asad Ali Sherazi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Syed Asad Ali Sherazi | AI Engineer" />
        <meta property="og:description" content="Explore the portfolio of an AI Engineer skilled in LLMs, Generative AI, and scalable MLOps pipelines." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Particle Background */}
      <ParticlesBackground />

      {/* Navbar */}
      <nav className="bg-gray-800/80 backdrop-blur-md p-4 shadow-lg fixed top-0 w-full z-50" role="navigation" aria-label="Main navigation">
        <ul className="flex justify-center gap-6 font-medium">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative px-2 py-1 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                aria-label={`Navigate to ${item} section`}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4" role="banner">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
        >
          Syed Asad Ali Sherazi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl text-gray-300"
        >
          AI Engineer | Specializing in LLMs, Generative AI, and Scalable MLOps Pipelines
        </motion.p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto" role="region" aria-labelledby="about-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="about-heading"
          className="text-3xl font-bold text-blue-300 mb-6 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed"
        >
          I'm a Computer Science undergraduate at UET Lahore (Class of 2027) with hands-on experience in developing and deploying AI systems across NLP, computer vision, and speech analysis. I specialize in large language models, generative AI, and RAG pipelines using tools like GPT-3.5, LangChain, and FAISS. Passionate about building scalable AI solutions, I thrive in dynamic environments and am always eager to tackle complex challenges.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-800/50 py-20 px-6" role="region" aria-labelledby="skills-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="skills-heading"
          className="text-3xl font-bold text-blue-300 text-center mb-10"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-sm">
          {[
            {
              title: 'AI & ML',
              items: ['Machine Learning, Deep Learning', 'NLP, RAG, LLMs, Agents', 'Model Explainability (LIME)'],
            },
            {
              title: 'Frameworks',
              items: ['LangChain, Hugging Face, Streamlit', 'PyTorch, TensorFlow, Scikit-learn', 'FAISS, LangGraph'],
            },
            {
              title: 'Tools',
              items: ['Python, C++, Git', 'Prompt Engineering', 'Model Versioning'],
            },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-blue-500 transition-colors duration-300"
            >
              <h3 className="text-blue-400 font-semibold mb-3 text-lg">{category.title}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto" role="region" aria-labelledby="projects-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="projects-heading"
          className="text-3xl font-bold text-blue-300 mb-10 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Judiciary GPT',
              description: 'An AI assistant for legal analysis built using LangChain agents and NLP pipelines, enabling efficient case research and document summarization.',
              tech: 'GPT-3.5, LangChain, Streamlit',
              link: '#', // Replace with actual link if available
            },
            {
              title: 'AI-Powered Document Assistant',
              description: 'A RAG-based Q&A system for documents, leveraging FAISS for efficient vector search and LangChain for natural language processing.',
              tech: 'FAISS, LangChain, Streamlit',
              link: '#', // Replace with actual link if available
            },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:shadow-xl hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              <p className="text-gray-400 text-xs mb-3">Tech: {project.tech}</p>
              <a
                href={project.link}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                aria-label={`View ${project.title} project`}
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800/50 py-20 px-6 text-center" role="region" aria-labelledby="contact-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="contact-heading"
          className="text-3xl font-bold text-blue-300 mb-6"
        >
          Contact Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto space-y-4"
        >
          <p className="text-gray-300">
            Email:{' '}
            <a href="mailto:syedasadalisherazi123@gmail.com" className="text-blue-400 underline hover:text-blue-300">
              syedasadalisherazi123@gmail.com
            </a>
          </p>
          <p className="text-gray-300">
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/syed-asad-ali-sherazi-4366802a0/"
              className="text-blue-400 underline hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Profile
            </a>
          </p>
          <p className="text-gray-300">
            GitHub:{' '}
            <a
              href="https://github.com/syedasad15"
              className="text-blue-400 underline hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              syedasad15
            </a>
          </p>
          {/* Client-side Contact Form */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Send a Message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                aria-label="Your Name"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                aria-label="Your Email"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                aria-label="Your Message"
              ></textarea>
              <button
                type="button"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                aria-label="Submit Message"
                onClick={() => alert('Form submission is client-side only. Please use email for actual contact.')}
              >
                Submit
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
