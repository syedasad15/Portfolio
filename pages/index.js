
import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Syed Asad Ali Sherazi | AI Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <nav className="bg-gray-800 p-4 shadow-md fixed top-0 w-full z-50">
        <ul className="flex justify-center gap-6">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>

      <section className="h-screen flex flex-col justify-center items-center text-center px-4" id="hero">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-4">Syed Asad Ali Sherazi</h1>
        <p className="text-xl max-w-2xl">AI Engineer | Specializing in LLMs, Generative AI, and Scalable MLOps Pipelines</p>
      </section>

      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-300 mb-4">About Me</h2>
        <p>
          I'm a Computer Science undergraduate at UET Lahore (Class of 2027) with hands-on experience in developing and deploying AI systems across NLP, computer vision, and speech analysis. I specialize in large language models, generative AI, and RAG pipelines using tools like GPT-3.5, LangChain, and FAISS.
        </p>
      </section>

      <section id="skills" className="bg-gray-800 py-20 px-6">
        <h2 className="text-3xl font-bold text-blue-300 text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-sm">
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">AI & ML</h3>
            <ul className="list-disc list-inside">
              <li>Machine Learning, Deep Learning</li>
              <li>NLP, RAG, LLMs, Agents</li>
              <li>Model Explainability (LIME)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">Frameworks</h3>
            <ul className="list-disc list-inside">
              <li>LangChain, Hugging Face, Streamlit</li>
              <li>PyTorch, TensorFlow, Scikit-learn</li>
              <li>FAISS, LangGraph</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">Tools</h3>
            <ul className="list-disc list-inside">
              <li>Python, C++, Git</li>
              <li>Prompt Engineering</li>
              <li>Model Versioning</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-300 mb-8">Projects</h2>
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-blue-400">Judicairy GPT</h3>
            <p className="text-sm">An AI assistant for legal analysis built using LangChain agents and NLP pipelines.</p>
            <p className="text-gray-400 text-xs mt-1">Tech: GPT-3.5, LangChain, Streamlit</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-blue-400">AI-Powered Document Assistant</h3>
            <p className="text-sm">RAG-based Q&A over documents using FAISS and LangChain.</p>
            <p className="text-gray-400 text-xs mt-1">Tech: FAISS, LangChain, Streamlit</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-800 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-300 mb-4">Contact Me</h2>
        <p>Email: <a href="mailto:syedasadalisherazi123@gmail.com" className="text-blue-400 underline">syedasadalisherazi123@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/syed-asad-ali-sherazi-4366802a0/" className="text-blue-400 underline" target="_blank">Profile</a></p>
        <p>GitHub: <a href="https://github.com/syedasad15" className="text-blue-400 underline" target="_blank">syedasad15</a></p>
      </section>
    </div>
  )
}

