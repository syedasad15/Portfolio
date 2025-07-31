// import Head from 'next/head';
// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import ParticlesBackground from '../components/ParticlesBackground';
// import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

// export default function Home() {
//   // Smooth scroll for anchor links
//   useEffect(() => {
//     const links = document.querySelectorAll('a[href^="#"]');
//     links.forEach((link) => {
//       link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);
//         targetElement?.scrollIntoView({ behavior: 'smooth' });
//       });
//     });
//   }, []);

//   return (
//     <div className="bg-charcoal-900 text-gray-100 min-h-screen relative overflow-hidden font-sans">
//       <Head>
//         <title>Syed Asad Ali Sherazi | AI Engineer Portfolio</title>
//         <meta name="description" content="Portfolio of Syed Asad Ali Sherazi, a Computer Science student specializing in AI, NLP, and MLOps with projects in legal-domain assistants and document Q&A systems." />
//         <meta name="keywords" content="AI Engineer, Machine Learning, NLP, LLMs, Generative AI, MLOps, Portfolio, UET Lahore" />
//         <meta name="author" content="Syed Asad Ali Sherazi" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta property="og:title" content="Syed Asad Ali Sherazi | AI Engineer" />
//         <meta property="og:description" content="Explore the portfolio of an AI Engineer skilled in LLMs, Generative AI, and scalable MLOps pipelines." />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://your-portfolio-url.com" />
//         <meta property="og:image" content="/path-to-your-image.jpg" />
//         <link rel="icon" href="/favicon.ico" />
//         <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
//       </Head>

//       {/* Particle Background */}
//       <ParticlesBackground />

//       {/* Navbar */}
//       <nav className="bg-charcoal-800/90 backdrop-blur-md p-4 shadow-lg fixed top-0 w-full z-50" role="navigation" aria-label="Main navigation">
//         <ul className="flex justify-center gap-8 font-semibold text-lg items-center">
//           {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
//             <li key={item}>
//               <a
//                 href={`#${item.toLowerCase()}`}
//                 className="relative px-3 py-2 text-gray-200 hover:text-amber-400 transition-colors duration-300 group"
//                 aria-label={`Navigate to ${item} section`}
//               >
//                 {item}
//                 <span className="absolute left-0 bottom-0 w-0 h-1 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             </li>
//           ))}
//           // <li>
//           //   <a
//           //     href="/Syed Asad Ali Sherazi.pdf"
//           //     download
//           //     target="_blank"
//           //     rel="noopener noreferrer"
//           //     className="relative px-3 py-2 text-gray-200 hover:text-amber-400 transition-colors duration-300 group inline-flex items-center"
//           //     aria-label="Download Resume"
//           //   >
//           //     <FaFileDownload className="mr-2" /> Resume
//           //     <span className="absolute left-0 bottom-0 w-0 h-1 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
//           //   </a>
//           // </li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-6" role="banner">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-burgundy-500 mb-6"
//         >
//           Syed Asad Ali Sherazi
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-lg md:text-xl max-w-3xl text-gray-200 leading-relaxed"
//         >
//           AI Engineer | Building Innovative Solutions in NLP, Computer Vision, and MLOps
//         </motion.p>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-24 px-6 max-w-4xl mx-auto" role="region" aria-labelledby="about-heading">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           id="about-heading"
//           className="text-3xl md:text-4xl font-bold text-amber-400 mb-8 text-center"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-base md:text-lg text-gray-200 leading-relaxed"
//         >
//           I’m a Computer Science student at UET Lahore (Class of 2027) with expertise in building and deploying AI solutions across NLP, computer vision, speech analysis, and cybersecurity. Proficient in Python, C++, PyTorch, TensorFlow, Scikit-learn, and tools like GPT-3.5, LangChain, FAISS, Hugging Face Transformers, and Streamlit, I specialize in large language models, generative AI, RAG pipelines, and multi-agent architectures. My projects, including Judiciary GPT, an AI-powered document assistant, and a smart resume generator, showcase my ability to deliver impactful, user-facing applications. I’m passionate about contributing to innovative AI systems in a collaborative, high-impact environment.
//         </motion.p>
//       </section>

//       {/* Education Section */}
//       <section id="education" className="bg-charcoal-800/50 py-24 px-6" role="region" aria-labelledby="education-heading">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           id="education-heading"
//           className="text-3xl md:text-4xl font-bold text-amber-400 text-center mb-10"
//         >
//           Education & Certifications
//         </motion.h2>
//         <div className="max-w-4xl mx-auto space-y-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-charcoal-700/30 p-6 rounded-lg border border-gray-600 hover:border-amber-400 transition-colors duration-300 shadow-md"
//           >
//             <h3 className="text-xl font-semibold text-amber-400 mb-2">Bachelor of Computer Science</h3>
//             <p className="text-gray-200">University of Engineering and Technology, Lahore</p>
//             <p className="text-gray-400 text-sm">September 2023 – May 2027 (Completed 4th Semester)</p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="bg-charcoal-700/30 p-6 rounded-lg border border-gray-600 hover:border-amber-400 transition-colors duration-300 shadow-md"
//           >
//             <h3 className="text-xl font-semibold text-amber-400 mb-2">AI-Focused Short Courses</h3>
//             <p className="text-gray-200">Arfa Kareem Incubator & KICS, UET Lahore</p>
//             <p className="text-gray-400 text-sm">3-Month Courses (Completed)</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-24 px-6 max-w-4xl mx-auto" role="region" aria-labelledby="experience-heading">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           id="experience-heading"
//           className="text-3xl md:text-4xl font-bold text-amber-400 mb-10 text-center"
//         >
//           Work Experience
//         </motion.h2>
//         <div className="space-y-6">
//           {[
//             {
//               title: 'AI/ML Intern',
//               company: 'National Centre of Artificial Intelligence, UET Lahore',
//               duration: 'June 2025 – Present',
//               description: 'Assisting in the development and optimization of machine learning models for AI research projects. Collaborating with researchers to implement and test AI solutions using Python and frameworks like PyTorch and LangChain.',
//             },
//             {
//               title: 'Teaching Assistant',
//               company: 'UET Lahore',
//               duration: 'September 2024 – May 2025',
//               description: 'Assisted in teaching and grading coursework for Object-Oriented Programming and Programming Fundamentals. Supported students by clarifying complex programming concepts and guiding practical coding exercises.',
//             },
//             {
//               title: 'Machine Learning Intern',
//               company: 'Green Vision Company',
//               duration: 'July 2024 – August 2024',
//               description: 'Developed and optimized ML models using Python and Scikit-learn. Conducted data preprocessing and collaborated on real-world solutions for industry applications.',
//             },
//             {
//               title: 'AI/ML Intern',
//               company: 'ACM UET',
//               duration: 'July 2024 – August 2024',
//               description: 'Gained hands-on experience in machine learning algorithms and model development, contributing to AI-driven projects and enhancing technical skills.',
//             },
//           ].map((job, index) => (
//             <motion.div
//               key={job.title + job.company}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-charcoal-700/30 p-6 rounded-lg border border-gray-600 hover:border-amber-400 transition-colors duration-300 shadow-md"
//             >
//               <h3 className="text-xl font-semibold text-amber-400 mb-2">{job.title}</h3>
//               <p className="text-gray-200">{job.company}</p>
//               <p className="text-gray-400 text-sm mb-3">{job.duration}</p>
//               <p className="text-gray-200 text-base">{job.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="bg-charcoal-800/50 py-24 px-6" role="region" aria-labelledby="skills-heading">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           id="skills-heading"
//           className="text-3xl md:text-4xl font-bold text-amber-400 text-center mb-10"
//         >
//           Skills
//         </motion.h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-base">
//           {[
//             {
//               title: 'Programming',
//               items: ['Python', 'C++', 'C', 'Git', 'GitHub', 'Model Versioning'],
//             },
//             {
//               title: 'AI & Machine Learning',
//               items: ['Machine Learning', 'Deep Learning', 'CNNs', 'Transfer Learning', 'NLP', 'Text & Audio Classification', 'Agentic AI', 'Prompt Engineering'],
//             },
//             {
//               title: 'Frameworks & Tools',
//               items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face Transformers', 'BERT', 'LIME', 'LangChain', 'OpenAI API', 'Streamlit', 'Librosa', 'FAISS'],
//             },
//           ].map((category, index) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-charcoal-700/30 p-6 rounded-lg border border-gray-600 hover:border-amber-400 transition-colors duration-300 shadow-md"
//             >
//               <h3 className="text-xl font-semibold text-amber-400 mb-3">{category.title}</h3>
//               <ul className="list-disc list-inside text-gray-200 space-y-2">
//                 {category.items.map((item) => (
//                   <li key={item}>{item}</li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-24 px-6 max-w-6xl mx-auto" role="region" aria-labelledby="projects-heading">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           id="projects-heading"
//           className="text-3xl md:text-4xl font-bold text-amber-400 mb-10 text-center"
//         >
//           Projects
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {[
//             {
//               title: 'Judiciary GPT',
//               description: 'An AI-powered judicial assistant leveraging a multi-agent architecture for legal text analysis and case support. Features include prompt routing, NLP pipelines, and modular agents for tasks like judgment drafting and intent classification, enhancing legal workflow efficiency.',
//               tech: 'LangChain, GPT-3.5, Streamlit, Python',
//               links: [
//                 { label: 'Demo', url: 'https://judicairy-gpt-pvqkbhm2p83pvw8hcvf3zc.streamlit.app/' },
//                 { label: 'Code', url: 'https://github.com/syedasad15/Judicairy-GPT' },
//               ],
//             },
//             {
//               title: 'AI-Powered Document Assistant',
//               description: 'A retrieval-augmented generation (RAG) system for contextual Q&A over documents. Built with modular components for document retrieval, memory handling, and prompt engineering, enabling multi-turn interactions for efficient document processing.',
//               tech: 'LangChain, FAISS, Streamlit, Python',
//               links: [
//                 { label: 'Demo', url: 'https://ai-powered-document-assistant-chrxq5sypuyn5dkc4we4aa.streamlit.app/' },
//                 { label: 'Code', url: 'https://github.com/syedasad15/AI-Powered-Document-Assistant' },
//               ],
//             },
//             {
//               title: 'Smart Resume & Cover Letter Generator',
//               description: 'A GPT-3.5-powered app that generates personalized cover letters and resume bullet points from uploaded resumes and job descriptions. Features resume parsing and one-click export via Streamlit, streamlining job application processes.',
//               tech: 'GPT-3.5, Streamlit, Python',
//               links: [
//                 { label: 'Demo', url: 'https://resume-generator-app-cxwf8yrkhpn3zxhstyjbyc.streamlit.app/' },
//                 { label: 'Code', url: 'https://github.com/syedasad15/Resume-Generator-App' },
//               ],
//             },
//             {
//               title: 'Text-Based Lie Detection Using BERT',
//               description: 'An NLP system to classify deceptive vs. truthful statements using a fine-tuned BERT model. Integrated LIME for explainability and deployed via Streamlit, providing insights into text-based deception detection.',
//               tech: 'Hugging Face, PyTorch, LIME, Streamlit, Python',
//               links: [
//                 { label: 'Code', url: 'https://github.com/syedasad15/KICS-Internship/tree/master/Lie%20Detection' },
//               ],
//             },
//             {
//               title: 'Phishing Link Detection Using Machine Learning',
//               description: 'A cybersecurity project to detect phishing URLs using machine learning algorithms. Extracts features from URLs and trains models to identify malicious links, enhancing online security.',
//               tech: 'Scikit-learn, Python',
//               links: [
//                 { label: 'Code', url: 'https://github.com/syedasad15/Phishing-Link-Detection-Using-Machine-Learning' },
//               ],
//             },
//             {
//               title: 'Lie Detection by Voice',
//               description: 'An audio-based lie detection system using machine learning for speech analysis. Processes vocal features to classify deceptive statements, offering a novel approach to deception detection.',
//               tech: 'Librosa, Scikit-learn, Python',
//               links: [
//                 { label: 'Demo', url: 'https://lie-detection-by-voice-b32muatf4w4f8vyftxkvzd.streamlit.app/' },
//                 { label: 'Code', url: 'https://github.com/syedasad15/Lie-Detection-by-Voice' },
//               ],
//             },
//             {
//               title: 'Crop Detection',
//               description: 'A machine learning project for identifying crops using image or data analysis. Applies computer vision or ML techniques to support agricultural decision-making.',
//               tech: 'OpenCV, Scikit-learn, Python',
//               links: [
//                 { label: 'Code', url: 'https://github.com/syedasad15/Crop-Detection1' },
//               ],
//             },
//           ].map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-charcoal-700/30 p-6 rounded-lg border border-gray-600 hover:shadow-lg hover:border-amber-400 transition-all duration-300"
//             >
//               <h3 className="text-xl font-semibold text-amber-400 mb-2">{project.title}</h3>
//               <p className="text-gray-200 text-base mb-3">{project.description}</p>
//               <p className="text-gray-400 text-sm mb-3">Tech: {project.tech}</p>
//               <div className="flex gap-4">
//                 {project.links.map((link) => (
//                   <a
//                     key={link.label}
//                     href={link.url}
//                     className="inline-block px-4 py-2 bg-amber-400 text-charcoal-900 rounded-md hover:bg-amber-500 transition-colors duration-300"
//                     aria-label={`View ${project.title} ${link.label}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {link.label}
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="bg-charcoal-800/50 py-24 px-6 text-center" role="region" aria-labelledby="contact-heading">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           id="contact-heading"
//           className="text-3xl md:text-4xl font-bold text-amber-400 mb-8"
//         >
//           Contact Me
//         </motion.h2>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="max-w-md mx-auto space-y-6"
//         >
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="mailto:syedasadalisherazi123@gmail.com"
//               className="inline-flex items-center px-6 py-2 bg-amber-400 text-charcoal-900 rounded-md hover:bg-amber-500 transition-colors duration-300"
//               aria-label="Send email to Syed Asad Ali Sherazi"
//             >
//               <FaEnvelope className="mr-2" /> Email
//             </a>
//             <a
//               href="https://www.linkedin.com/in/syed-asad-ali-sherazi-4366802a0/"
//               className="inline-flex items-center px-6 py-2 bg-amber-400 text-charcoal-900 rounded-md hover:bg-amber-500 transition-colors duration-300"
//               aria-label="Visit Syed Asad Ali Sherazi's LinkedIn profile"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedin className="mr-2" /> LinkedIn
//             </a>
//             <a
//               href="https://github.com/syedasad15"
//               className="inline-flex items-center px-6 py-2 bg-amber-400 text-charcoal-900 rounded-md hover:bg-amber-500 transition-colors duration-300"
//               aria-label="Visit Syed Asad Ali Sherazi's GitHub profile"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaGithub className="mr-2" /> GitHub
//             </a>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }
import Head from 'next/head';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../components/ParticlesBackground';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

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
    <div className="bg-charcoal-900 text-gray-100 min-h-screen relative overflow-hidden font-sans">
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
        <meta property="og:image" content="/images/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Particle Background */}
      <ParticlesBackground />

      {/* Navbar */}
      <nav className="bg-charcoal-800/90 backdrop-blur-md p-4 shadow-lg fixed top-0 w-full z-50" role="navigation" aria-label="Main navigation">
        <ul className="flex justify-center gap-8 font-semibold text-lg items-center">
          {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative px-3 py-2 text-gray-200 hover:text-amber-400 transition-colors duration-300 group"
                aria-label={`Navigate to ${item} section`}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

     {/* Hero Section */}
<section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-6" role="banner">
  <motion.img
    src="/images/profile.jpg"
    alt="Profile picture of Syed Asad Ali Sherazi"
    className="w-48 h-48 md:w-60 md:h-60 rounded-full border-2 border-amber-400 mb-6 object-cover"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  />


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-burgundy-500 mb-6"
        >
          Syed Asad Ali Sherazi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl max-w-3xl text-gray-200 leading-relaxed"
        >
          AI Engineer | Building Innovative Solutions in NLP, Computer Vision, and MLOps
        </motion.p>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto" role="region" aria-labelledby="about-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="about-heading"
          className="text-3xl md:text-4xl font-bold text-amber-400 mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-200 leading-relaxed"
        >
          I’m a Computer Science student at UET Lahore (Class of 2027) with expertise in building and deploying AI solutions across NLP, computer vision, speech analysis, and cybersecurity. Proficient in Python, C++, PyTorch, TensorFlow, Scikit-learn, and tools like GPT-3.5, LangChain, FAISS, Hugging Face Transformers, and Streamlit, I specialize in large language models, generative AI, RAG pipelines, and multi-agent architectures. My projects, including Judiciary GPT, an AI-powered document assistant, and a smart resume generator, showcase my ability to deliver impactful, user-facing applications. I’m passionate about contributing to innovative AI systems in a collaborative, high-impact environment.
        </motion.p>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-charcoal-800/50 py-24 px-6" role="region" aria-labelledby="education-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="education-heading"
          className="text-3xl md:text-4xl font-bold text-amber-400 text-center mb-10"
        >
          Education & Certifications
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-charcoal-700/30 p-6 rounded-lg border border-gray-600 hover:border-amber-400 transition-colors duration-300 shadow-md"
          >
            <h3 className="text-xl font-semibold text-amber-400 mb-2">Bachelor of Computer Science</h3>
            <p className="text-gray-200">University of Engineering and Technology, Lahore</p>
            <p className="text-gray-400 text-sm">September 2023 – May 2027 (Completed 4th Semester)</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-charcoal-700/30 p-6 rounded-lg border border-gray-600 hover:border-amber-400 transition-colors duration-300 shadow-md"
          >
            <h3 className="text-xl font-semibold text-amber-400 mb-2">AI-Focused Short Courses</h3>
            <p className="text-gray-200">Arfa Kareem Incubator & KICS, UET Lahore</p>
            <p className="text-gray-400 text-sm">3-Month Courses (Completed)</p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-4xl mx-auto" role="region" aria-labelledby="experience-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="experience-heading"
          className="text-3xl md:text-4xl font-bold text-amber-400 mb-10 text-center"
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
              className="bg-charcoal-700/30 p-6 rounded-lg border border-gray-600 hover:border-amber-400 transition-colors duration-300 shadow-md"
            >
              <h3 className="text-xl font-semibold text-amber-400 mb-2">{job.title}</h3>
              <p className="text-gray-200">{job.company}</p>
              <p className="text-gray-400 text-sm mb-3">{job.duration}</p>
              <p className="text-gray-200 text-base">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-charcoal-800/50 py-24 px-6" role="region" aria-labelledby="skills-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="skills-heading"
          className="text-3xl md:text-4xl font-bold text-amber-400 text-center mb-10"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-base">
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
              className="bg-charcoal-700/30 p-6 rounded-lg border border-gray-600 hover:border-amber-400 transition-colors duration-300 shadow-md"
            >
              <h3 className="text-xl font-semibold text-amber-400 mb-3">{category.title}</h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto" role="region" aria-labelledby="projects-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="projects-heading"
          className="text-3xl md:text-4xl font-bold text-amber-400 mb-10 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Judiciary GPT',
              description: 'An AI-powered judicial assistant leveraging a multi-agent architecture for legal text analysis and case support. Features include prompt routing, NLP pipelines, and modular agents for tasks like judgment drafting and intent classification, enhancing legal workflow efficiency.',
              tech: 'LangChain, GPT-3.5, Streamlit, Python',
              links: [
                { label: 'Demo', url: 'https://judicairy-gpt-pvqkbhm2p83pvw8hcvf3zc.streamlit.app/' },
                { label: 'Code', url: 'https://github.com/syedasad15/Judicairy-GPT' },
              ],
            },
            {
              title: 'AI-Powered Document Assistant',
              description: 'A retrieval-augmented generation (RAG) system for contextual Q&A over documents. Built with modular components for document retrieval, memory handling, and prompt engineering, enabling multi-turn interactions for efficient document processing.',
              tech: 'LangChain, FAISS, Streamlit, Python',
              links: [
                { label: 'Demo', url: 'https://ai-powered-document-assistant-chrxq5sypuyn5dkc4we4aa.streamlit.app/' },
                { label: 'Code', url: 'https://github.com/syedasad15/AI-Powered-Document-Assistant' },
              ],
            },
            {
              title: 'Smart Resume & Cover Letter Generator',
              description: 'A GPT-3.5-powered app that generates personalized cover letters and resume bullet points from uploaded resumes and job descriptions. Features resume parsing and one-click export via Streamlit, streamlining job application processes.',
              tech: 'GPT-3.5, Streamlit, Python',
              links: [
                { label: 'Demo', url: 'https://resume-generator-app-cxwf8yrkhpn3zxhstyjbyc.streamlit.app/' },
                { label: 'Code', url: 'https://github.com/syedasad15/Resume-Generator-App' },
              ],
            },
            {
              title: 'Text-Based Lie Detection Using BERT',
              description: 'An NLP system to classify deceptive vs. truthful statements using a fine-tuned BERT model. Integrated LIME for explainability and deployed via Streamlit, providing insights into text-based deception detection.',
              tech: 'Hugging Face, PyTorch, LIME, Streamlit, Python',
              links: [
                { label: 'Code', url: 'https://github.com/syedasad15/KICS-Internship/tree/master/Lie%20Detection' },
              ],
            },
            {
              title: 'Phishing Link Detection Using Machine Learning',
              description: 'A cybersecurity project to detect phishing URLs using machine learning algorithms. Extracts features from URLs and trains models to identify malicious links, enhancing online security.',
              tech: 'Scikit-learn, Python',
              links: [
                { label: 'Code', url: 'https://github.com/syedasad15/Phishing-Link-Detection-Using-Machine-Learning' },
              ],
            },
            {
              title: 'Lie Detection by Voice',
              description: 'An audio-based lie detection system using machine learning for speech analysis. Processes vocal features to classify deceptive statements, offering a novel approach to deception detection.',
              tech: 'Librosa, Scikit-learn, Python',
              links: [
                { label: 'Demo', url: 'https://lie-detection-by-voice-b32muatf4w4f8vyftxkvzd.streamlit.app/' },
                { label: 'Code', url: 'https://github.com/syedasad15/Lie-Detection-by-Voice' },
              ],
            },
            {
              title: 'Crop Detection',
              description: 'A machine learning project for identifying crops using image or data analysis. Applies computer vision or ML techniques to support agricultural decision-making.',
              tech: 'OpenCV, Scikit-learn, Python',
              links: [
                { label: 'Code', url: 'https://github.com/syedasad15/Crop-Detection1' },
              ],
            },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-charcoal-700/30 p-6 rounded-lg border border-gray-600 hover:shadow-lg hover:border-amber-400 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-amber-400 mb-2">{project.title}</h3>
              <p className="text-gray-200 text-base mb-3">{project.description}</p>
              <p className="text-gray-400 text-sm mb-3">Tech: {project.tech}</p>
              <div className="flex gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="inline-block px-4 py-2 bg-amber-400 text-charcoal-900 rounded-md hover:bg-amber-500 transition-colors duration-300"
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
      <section id="contact" className="bg-charcoal-800/50 py-24 px-6 text-center" role="region" aria-labelledby="contact-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold text-amber-400 mb-8"
        >
          Contact Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:syedasadalisherazi123@gmail.com"
              className="inline-flex items-center px-6 py-2 bg-amber-400 text-charcoal-900 rounded-md hover:bg-amber-500 transition-colors duration-300"
              aria-label="Send email to Syed Asad Ali Sherazi"
            >
              <FaEnvelope className="mr-2" /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/syed-asad-ali-sherazi-4366802a0/"
              className="inline-flex items-center px-6 py-2 bg-amber-400 text-charcoal-900 rounded-md hover:bg-amber-500 transition-colors duration-300"
              aria-label="Visit Syed Asad Ali Sherazi's LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href="https://github.com/syedasad15"
              className="inline-flex items-center px-6 py-2 bg-amber-400 text-charcoal-900 rounded-md hover:bg-amber-500 transition-colors duration-300"
              aria-label="Visit Syed Asad Ali Sherazi's GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
