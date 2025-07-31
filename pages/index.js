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
        <meta name="description" content="Portfolio of Syed Asad Ali Sherazi, a Computer Science student specializing in AI, NLP, and MLOps with projects in legal-domain assistants and document Q&A systems." />
        <meta name="keywords" content="AI Engineer, Machine Learning, NLP, LLMs, Generative AI, MLOps, Portfolio, UET Lahore" />
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
          {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative px-2 py-1 text-gray-300 hover:text-yellow-600 transition-colors duration-300 group"
                aria-label={`Navigate to ${item} section`}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
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
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-burgundy-600 mb-4"
        >
          Syed Asad Ali Sherazi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl text-gray-300"
        >
          AI Engineer | Building Innovative Solutions in NLP, Computer Vision, and MLOps
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
          className="text-3xl font-bold text-yellow-600 mb-6 text-center"
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
          I’m a Computer Science student at UET Lahore (Class of 2027) with hands-on experience in building and deploying AI solutions across NLP, computer vision, and speech analysis. Proficient in Python, PyTorch, TensorFlow, and Scikit-learn, I specialize in large language models, generative AI, and RAG pipelines using tools like GPT-3.5, LangChain, and FAISS. My projects, such as Judiciary GPT and an AI-powered document assistant, demonstrate my ability to create impactful, real-world applications. I’m eager to contribute to innovative AI systems in a collaborative, impact-driven environment.
        </motion.p>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-gray-800/50 py-20 px-6" role="region" aria-labelledby="education-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="education-heading"
          className="text-3xl font-bold text-yellow-600 text-center mb-10"
        >
          Education & Certifications
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-yellow-600 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">Bachelor of Computer Science</h3>
            <p className="text-gray-300">University of Engineering and Technology, Lahore</p>
            <p className="text-gray-400 text-sm">September 2023 – May 2027 (Completed 4th Semester)</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-yellow-600 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">AI-Focused Short Courses</h3>
            <p className="text-gray-300">Arfa Kareem Incubator & KICS, UET Lahore</p>
            <p className="text-gray-400 text-sm">3-Month Courses (Completed)</p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-4xl mx-auto" role="region" aria-labelledby="experience-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="experience-heading"
          className="text-3xl font-bold text-yellow-600 mb-10 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-6">
          {[
            {
              title: 'AI/ML Intern',
              company: 'National Centre of Artificial Intelligence, UET Lahore',
              duration: 'June 2025 – Present',
              description: 'Assisting in the development and optimization of machine learning models for AI research projects. Collaborating with researchers to implement and test AI solutions using Python and frameworks like PyTorch and LangChain.',
            },
            {
              title: 'Teaching Assistant',
              company: 'UET Lahore',
              duration: 'September 2024 – May 2025',
              description: 'Assisted in teaching and grading coursework for Object-Oriented Programming and Programming Fundamentals. Supported students by clarifying complex programming concepts and guiding practical coding exercises.',
            },
            {
              title: 'Machine Learning Intern',
              company: 'Green Vision Company',
              duration: 'July 2024 – August 2024',
              description: 'Developed and optimized ML models using Python and Scikit-learn. Conducted data preprocessing and collaborated on real-world solutions for industry applications.',
            },
            {
              title: 'AI/ML Intern',
              company: 'ACM UET',
              duration: 'July 2024 – August 2024',
              description: 'Gained hands-on experience in machine learning algorithms and model development, contributing to AI-driven projects and enhancing technical skills.',
            },
          ].map((job, index) => (
            <motion.div
              key={job.title + job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-yellow-600 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">{job.title}</h3>
              <p className="text-gray-300">{job.company}</p>
              <p className="text-gray-400 text-sm mb-3">{job.duration}</p>
              <p className="text-gray-300 text-sm">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-800/50 py-20 px-6" role="region" aria-labelledby="skills-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="skills-heading"
          className="text-3xl font-bold text-yellow-600 text-center mb-10"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-sm">
          {[
            {
              title: 'Programming',
              items: ['Python', 'C++', 'C', 'Git', 'GitHub', 'Model Versioning'],
            },
            {
              title: 'AI & Machine Learning',
              items: ['Machine Learning', 'Deep Learning', 'CNNs', 'Transfer Learning', 'NLP', 'Text & Audio Classification', 'Agentic AI', 'Prompt Engineering'],
            },
            {
              title: 'Frameworks & Tools',
              items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face Transformers', 'BERT', 'LIME', 'LangChain', 'OpenAI API', 'Streamlit', 'Librosa', 'FAISS'],
            },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-yellow-600 transition-colors duration-300"
            >
              <h3 className="text-yellow-600 font-semibold mb-3 text-lg">{category.title}</h3>
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
          className="text-3xl font-bold text-yellow-600 mb-10 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Judiciary GPT',
              description: 'An AI-powered judicial assistant using a multi-agent architecture for legal text analysis and case support. Features prompt routing, NLP pipelines, and modular agents for tasks like judgment drafting and intent classification.',
              tech: 'LangChain, GPT-3.5, Streamlit',
              links: [
                { label: 'App', url: '#' },
                { label: 'Code', url: '#' },
              ],
            },
            {
              title: 'AI-Powered Document Assistant',
              description: 'A retrieval-augmented generation (RAG) system for contextual Q&A over documents. Built with modular components for document retrieval, memory handling, and prompt engineering, enabling multi-turn interactions.',
              tech: 'LangChain, FAISS, Streamlit',
              links: [
                { label: 'App', url: '#' },
                { label: 'Code', url: '#' },
              ],
            },
            {
              title: 'Smart Resume & Cover Letter Generator',
              description: 'A GPT-3.5-powered app that generates personalized cover letters and resume bullet points from uploaded resumes and job descriptions. Includes resume parsing and one-click export functionality via Streamlit.',
              tech: 'GPT-3.5, Streamlit',
              links: [
                { label: 'App', url: '#' },
                { label: 'Code', url: '#' },
              ],
            },
            {
              title: 'Text-Based Lie Detection Using BERT',
              description: 'An NLP system to classify deceptive vs. truthful statements using a fine-tuned BERT model. Integrated LIME for explainability and deployed the application via Streamlit for user interaction.',
              tech: 'Hugging Face, PyTorch, LIME, Streamlit',
              links: [
                { label: 'Code', url: '#' },
              ],
            },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:shadow-xl hover:border-yellow-600 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              <p className="text-gray-400 text-xs mb-3">Tech: {project.tech}</p>
              <div className="flex gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="inline-block px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors duration-300"
                    aria-label={`View ${project.title} ${link.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
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
          className="text-3xl font-bold text-yellow-600 mb-6"
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
            <a href="mailto:syedasadalisherazi123@gmail.com" className="text-yellow-600 underline hover:text-yellow-500">
              syedasadalisherazi123@gmail.com
            </a>
          </p>
          <p className="text-gray-300">
            Phone: <span className="text-yellow-600">0323-4961876</span>
          </p>
          <p className="text-gray-300">
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/syed-asad-ali-sherazi-4366802a0/"
              className="text-yellow-600 underline hover:text-yellow-500"
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
              className="text-yellow-600 underline hover:text-yellow-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              syedasad15
            </a>
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors duration-300 mt-4"
            aria-label="Download Resume"
          >
            Download Resume
          </a>
          {/* Client-side Contact Form */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-yellow-600 mb-4">Send a Message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-yellow-600 focus:outline-none"
                aria-label="Your Name"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-yellow-600 focus:outline-none"
                aria-label="Your Email"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-yellow-600 focus:outline-none"
                aria-label="Your Message"
              ></textarea>
              <button
                type="button"
                className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors duration-300"
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
