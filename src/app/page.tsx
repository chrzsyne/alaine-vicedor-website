"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Download, 
  MapPin, 
  Phone, 
  Sun, 
  Moon,
  ChevronUp,
  Award
} from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Alaine Vicedor
              </button>
              <div className="hidden md:flex space-x-6">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection('education')}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Image
                src="https://lh3.googleusercontent.com/d/1QxZU51SBORCL1irkz3Fluqbwjj7oyJqF"
                alt="Alaine Vicedor Professional Headshot"
                width={200}
                height={200}
                className="mx-auto rounded-full border-4 border-white dark:border-gray-700 shadow-lg"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Alaine Vicedor
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6">
              Digital Transformation Specialist
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Driving enterprise-scale digital initiatives across global banking and technology sectors. 
              Expert in orchestrating $1B+ system integrations, achieving 30% operational efficiency gains, 
              and delivering scalable cloud-based solutions across 343+ locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drive.google.com/file/d/1Yv-5Yhy2SbHgWTj2eA5Y2qMf3cx6tiVs/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/advicedor/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Professional Summary</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  With over 5 years of experience in digital transformation, I specialize in bridging 
                  business-IT gaps and managing agile development teams. My expertise spans across 
                  enterprise-scale system integrations, cloud migrations, and process optimization.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  I have successfully orchestrated $1B+ acquisition integrations, achieved 30% operational 
                  efficiency gains, and delivered scalable cloud-based solutions across 343+ locations. 
                  My approach combines technical expertise with strong stakeholder management and 
                  change management capabilities.
                </p>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Brno, Czech Republic</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+420 776 188 957</span>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                    <span>Orchestrated $1B+ acquisition integration with 100% customer continuity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                    <span>Achieved 30% operational efficiency gains through digital transformation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                    <span>Delivered cloud migration across 343 branches and 8000+ staff</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                    <span>Reduced TCO by 25% and accelerated deployment cycles by 30%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work Experience</h2>
            <div className="space-y-8">
              {/* Antonio Enterprises */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Digital Transformation Consultant</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Antonio Enterprises</p>
                    <p className="text-gray-600 dark:text-gray-300">Florida, USA - Remote</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">Jan 2025 – June 2025</span>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Assessed technical implementation needs and feasibility for automation initiatives, proposing low-code solutions using Power Platform</li>
                  <li>• Translated business requirements into technical specifications, enhancing client service delivery by 30%</li>
                  <li>• Conducted requirements elicitation sessions with cross-functional teams to validate integration requirements for digital transformation</li>
                </ul>
              </div>

              {/* Topdrill */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Senior Business Analyst - Business Improvement</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Topdrill</p>
                    <p className="text-gray-600 dark:text-gray-300">Western Australia, AU - Remote</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">Dec 2024 – Jan 2025</span>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Built digital transformation roadmap targeting $3.5M OPEX savings, maximizing business impact through cost-benefit analysis</li>
                  <li>• Managed prioritized backlog of improvement initiatives, ensuring fastest delivery while removing roadblocks between teams</li>
                  <li>• Facilitated design-thinking workshops and trained 54 cross-functional staff, accelerating technology adoption and user training</li>
                </ul>
              </div>

              {/* Vertere Global Solutions */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Senior Business Analyst - IT Core Banking</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Vertere Global Solutions Inc. – Metropolitan Bank and Trust Company</p>
                    <p className="text-gray-600 dark:text-gray-300">Taguig City, PH</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">Oct 2023 – Dec 2024</span>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Managed technical implementation of legacy-to-cloud migration across 343 branches/8000+ staff, de-risking $21M budget</li>
                  <li>• Ensured technical soundness of core banking platform implementations, maintaining system scalability and integration compatibility</li>
                  <li>• Conducted UAT sessions and managed backlog using Jira, ensuring quality delivery and seamless user experience</li>
                  <li>• Led stakeholder engagement to translate requirements between development teams and business functions</li>
                </ul>
              </div>

              {/* Women in AI */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Project Manager - Non-Profit</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Women in Artificial Intelligence</p>
                    <p className="text-gray-600 dark:text-gray-300">Sydney, AU - Remote</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">Apr 2023 - May 2024</span>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Implemented SaaS solutions (Hubspot CRM, Microsoft analytics), bridging technical and commercial teams for operations</li>
                  <li>• Led user training sessions and facilitated communication between developers and stakeholders across multicultural teams</li>
                </ul>
              </div>

              {/* UnionBank */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Strategy and Partner Manager | IT Business Analyst</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">UnionBank of the Philippines</p>
                    <p className="text-gray-600 dark:text-gray-300">Pasig City, PH</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">Oct 2021 - Oct 2023</span>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Orchestrated $1B acquisition integration, ensuring 100% customer continuity through agile project management methodologies</li>
                  <li>• Directed cloud migration workstream (AWS & Azure), achieving 25% TCO reduction and 30% faster deployment cycles</li>
                  <li>• Stood up agile PMO, introduced Scrum rituals and OKRs, accelerating release cadence from quarterly to monthly</li>
                  <li>• Built executive dashboards (PowerBI, Tableau) for CAPEX/OPEX tracking and digital campaign platform reporting</li>
                </ul>
              </div>

              {/* Ciclo Furnitures */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Founder & Co-owner</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Ciclo Furnitures | Bellyna</p>
                    <p className="text-gray-600 dark:text-gray-300">Makati City, PH</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">Jan 2020 - Jun 2022</span>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Bootstrapped e-commerce venture to double-digit margins during pandemic</li>
                  <li>• Designed data-driven supply-chain reducing inventory holding costs 35%</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Project Management</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Agile Project Management', 'Scrum Methodology', 'Technical Project Management', 'SDLC', 'Backlog Management'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Cloud & Integration</h4>
                    <div className="flex flex-wrap gap-2">
                      {['AWS', 'Azure', 'API Integration', 'Cloud Integration', 'Power Platform'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Data & Analytics</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Excel', 'PowerBI', 'Tableau', 'SQL', 'Python', 'Data Analytics'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Testing & Quality</h4>
                    <div className="flex flex-wrap gap-2">
                      {['UAT', 'Automated Testing', 'QA', 'Jira', 'Test Management'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Business & Soft Skills</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Business Analysis</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Requirements Gathering', 'BRD/FRD', 'User Stories', 'Technical Feasibility', 'Process Optimization'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Leadership & Management</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Cross-Functional Leadership', 'Stakeholder Management', 'Change Management', 'Team Leadership', 'Product Owner Collaboration'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Process & Methodology</h4>
                    <div className="flex flex-wrap gap-2">
                      {['BPMN', 'Lean', 'Design Thinking', 'Workshop Facilitation', 'Training Delivery'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Education</h3>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">MSc in Business Management</h4>
                    <p className="text-lg font-medium">Masaryk University</p>
                    <p className="text-gray-600 dark:text-gray-300">Brno, Czech Republic</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      One of Czech Republic&apos;s most prestigious public universities, recognized for its comprehensive research and strong international outlook.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">BSc in Civil Engineering</h4>
                    <p className="text-lg font-medium">University of the Philippines Diliman</p>
                    <p className="text-gray-600 dark:text-gray-300">Quezon City, PH</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      The country&apos;s premier state university known for academic excellence and leadership in research and public service. 5-year program.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
                <div className="space-y-4">
                  {[
                    'Perplexity – AI Business Fellow',
                    'Professional Scrum Master (PSM I)',
                    'AWS Certified Cloud Practitioner',
                    'Microsoft Azure AI Fundamentals',
                    'Robotic Process Automation (RPA) Business Analyst',
                    'Google Project Management Certificate',
                    'Amazon Web Services re/Start Graduate'
                  ].map((cert) => (
                    <div key={cert} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-yellow-500 mr-3" />
                        <span className="text-gray-900 dark:text-white">{cert}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Let&apos;s Work Together</h2>
            <div className="text-center mb-12">
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Ready to drive your next digital transformation initiative? Let&apos;s connect and discuss how I can help your organization achieve its goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="mailto:alainevicedor@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  alainevicedor@gmail.com
                </a>
                <a
                  href="https://drive.google.com/file/d/1Yv-5Yhy2SbHgWTj2eA5Y2qMf3cx6tiVs/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/advicedor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Connect with me
                </a>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <a
                  href="https://github.com/chrzsyne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View my projects
                </a>
              </div>
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Brno, Czech Republic</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Available for remote work</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Alaine Vicedor. All rights reserved. | Available for full-time employment
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
