// asad_portfolio/app/page.tsx (for Next.js App Router)

"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(
          (link as HTMLAnchorElement).getAttribute("href")!
        );
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <main className="bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-800 p-4 z-50 shadow-md">
        <ul className="flex justify-center gap-6 text-sm font-medium">
          <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-4">Syed Asad Ali Sherazi</h1>
        <p className="text-lg md:text-xl max-w-xl">
          AI Engineer | Specializing in LLMs, Generative AI, and Scalable MLOps Pipelines
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#projects" className="px-6 py-2 bg-blue-500 rounded hover:bg-blue-600">View Projects</a>
          <a href="#contact" className="px-6 py-2 border border-blue-400 rounded hover:bg-blue-700">Contact</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-300 mb-4">About Me</h2>
        <p className="leading-relaxed">
          I'm a Computer Science undergraduate at UET Lahore (Class of 2027) with hands-on experience in developing and deploying
          AI systems across NLP, computer vision, and speech analysis. I specialize in large language models, generative AI,
          and RAG pipelines using tools like GPT-3.5, LangChain, and FAISS.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-800 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-300 mb-8">Skills & Tech Stack</h2>
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">AI/ML</h3>
              <ul className="list-disc list-inside">
                <li>Machine & Deep Learning</li>
                <li>RAG, Agentic AI, LIME</li>
                <li>Text & Audio Classification</li>
              </ul>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Frameworks</h3>
              <ul className="list-disc list-inside">
                <li>PyTorch, TensorFlow, Scikit-learn</li>
                <li>LangChain, LangGraph, Hugging Face</li>
                <li>FAISS, Streamlit</li>
              </ul>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">DevOps & Languages</h3>
              <ul className="list-disc list-inside">
                <li>Python, C++, C</li>
                <li>Git & GitHub</li>
                <li>Prompt Engineering, Model Versioning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-300 mb-8">Projects</h2>

        {[
          {
            title: "Judicairy GPT — Legal Domain Assistant",
            desc: "An AI assistant for court judgments using LangChain agents, prompt routing, and NLP pipelines.",
            stack: "GPT-3.5, LangChain, Streamlit",
            github: "https://github.com/syedasad15/Judicairy-GPT",
            demo: "https://judicairy-gpt-pvqkbhm2p83pvw8hcvf3zc.streamlit.app/"
          },
          {
            title: "AI-Powered Document Assistant",
            desc: "Multi-turn Q&A system using RAG and vector search.",
            stack: "LangChain, FAISS, Streamlit",
            github: "https://github.com/syedasad15/AI-Powered-Document-Assistant",
            demo: "https://ai-powered-document-assistant-chrxq5sypuyn5dkc4we4aa.streamlit.app/"
          },
          {
            title: "Smart Resume & Cover Letter Generator",
            desc: "Generates job-specific resumes and cover letters using GPT-3.5.",
            stack: "GPT-3.5, Streamlit",
            github: "https://github.com/syedasad15/Resume-Generator-App",
            demo: "https://resume-generator-app-cxwf8yrkhpn3zxhstyjbyc.streamlit.app/"
          }
        ].map(({ title, desc, stack, github, demo }) => (
          <div key={title} className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-blue-400 mb-1">{title}</h3>
            <p className="mb-2">{desc}</p>
            <p className="text-sm text-gray-400 mb-2">{stack}</p>
            <div className="flex gap-4">
              <a href={github} target="_blank" className="text-blue-400 underline">View Code</a>
              <a href={demo} target="_blank" className="text-blue-400 underline">Live Demo</a>
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-300 mb-4">Contact Me</h2>
        <p className="mb-6">I’m open to collaborations, internships, and AI-focused opportunities.</p>
        <p>📧 <a href="mailto:syedasadalisherazi123@gmail.com" className="text-blue-400 underline">syedasadalisherazi123@gmail.com</a></p>
        <p>💼 <a href="https://www.linkedin.com/in/syed-asad-ali-sherazi-4366802a0/" className="text-blue-400 underline">LinkedIn</a></p>
        <p>🧑‍💻 <a href="https://github.com/syedasad15" className="text-blue-400 underline">GitHub</a></p>
      </section>
    </main>
  );
}
