import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, ExternalLink, FileText, AlertTriangle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { ProjectCard } from './components/ProjectCard';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMaintenanceAlert, setShowMaintenanceAlert] = useState(false);
  const [maintenanceProject, setMaintenanceProject] = useState<string>('');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const showMaintenanceModal = (projectName: string) => {
    setMaintenanceProject(projectName);
    setShowMaintenanceAlert(true);
  };

  const projects = [
    {
      title: "E-Verification System",
      description: "Responsive web form built with HTML, CSS, JS, Bootstrap for internal police verification processes",
      github: "https://github.com/shabbirfast/reveal",
      demo: "maintenance",
      maintenanceMessage: "The E-Verification System demo is currently under maintenance as we upgrade our security protocols and user interface. Please check back later for access to the live demo."
    },
    {
      title: "Tenant Registration Form",
      description: "Multi-step tenant form with validation for digitized tenant submission records",
      github: "https://github.com/aabdul-haadi/Sindh-Police---Tenant-System",
      demo: "https://sindh-police-tenant-system.vercel.app/"
    },
    {
      title: "MILAP",
      description: "ReactJS frontend prototype to help locate missing persons via centralized system",
      github: "https://github.com/aabdul-haadi/MILAP_u",
      demo: "maintenance",
      maintenanceMessage: "The MILAP system demo is temporarily unavailable while we implement new features and optimize the missing person search algorithms. The system will be back online soon with improved functionality."
    }
  ];

  const practiceProjects = [
    {
      title: "EarthOrbit Website",
      description: "Animated futuristic space exploration landing page using React, TailwindCSS, Framer Motion",
      github: "https://github.com/aabdul-haadi/Earth-Orbit",
      demo: "https://earth-orbit-nine.vercel.app/"
    },
    {
      title: "Food Restaurant Website",
      description: "Modern responsive restaurant landing page",
      github: "https://github.com/aabdul-haadi/foodApp",
      demo: "https://food-website-kappa-puce.vercel.app/"
    },
    {
      title: "Interior Renovation Website",
      description: "Minimalist design with smooth motion for interior design services",
      github: "https://github.com/aabdul-haadi/Interior-design-website",
      demo: "https://interior-design-website-ashy.vercel.app/"
    }
  ];

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://sindhpolice.gov.pk/storage/vision/XahYwAYl6HvyMdDQiudqbufoX4PPEBD7YYPMTPfV.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-police-blue/20"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center text-white px-4 max-w-4xl mx-auto"
          >
            <motion.img
              src="https://www.pngaaa.com/api-download/4681127"
              alt="Sindh Police Logo"
              className="h-32 w-32 mx-auto mb-8 object-contain"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Sindh Police Internship Portfolio
            </h1>

            <h2 className="text-lg md:text-2xl font-medium mb-4 text-gray-200">
              8-Week <span className="text-blue-300 font-semibold">Frontend Development</span> Internship at
              <br className="hidden md:inline" /> Central Police Office (CPO)
            </h2>
            <p className="text-lg md:text-xl mb-8 text-shadow">Abdul Haadi</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="bg-police-blue hover:bg-police-blue-light text-white px-8 py-3 rounded-lg cursor-pointer inline-block shadow-lg"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Summary Section */}
        <section id="summary" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-police-blue dark:text-white">Internship Summary</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Duration", content: "8 Weeks" },
                  { title: "Role", content: "Frontend Developer Intern" },
                  { title: "Technologies", content: "HTML, CSS, JavaScript, Bootstrap, React" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-600"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-police-blue dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-police-blue dark:text-white">Main Projects</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={index} 
                    {...project} 
                    onDemoClick={() => {
                      if (project.demo === 'maintenance') {
                        showMaintenanceModal(project.title);
                      }
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Practice Projects Section */}
        <section id="practice" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-police-blue dark:text-white">Practice Projects</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {practiceProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Concept App Section */}
        <section id="concept" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-police-blue dark:text-white">Safety Alerts System</h2>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  A React Native UI prototype for a public emergency alert system by Sindh Police
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    href="https://github.com/aabdul-haadi/Safety-Alerts-System"
                    icon={<Github className="h-5 w-5" />}
                    text="View Code"
                  />
                  <button
                    onClick={() => showMaintenanceModal("Safety Alerts System")}
                    className="inline-flex items-center px-6 py-3 bg-police-blue hover:bg-police-blue-light text-white rounded-lg shadow-lg transition-colors duration-300"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="ml-2">Live Demo</span>
                  </button>
                  <Button
                    href="https://docs.google.com/document/d/1jk08O1nm_lMFYWM61Fd7lj7ofLKpW4P_xWdmeGSBonE/edit?tab=t.0#heading=h.xagd6ndi00qj"
                    icon={<FileText className="h-5 w-5" />}
                    text="Documentation"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />

        {/* Maintenance Alert Modal */}
        {showMaintenanceAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setShowMaintenanceAlert(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md mx-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="h-12 w-12 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                Under Maintenance
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                {projects.find(p => p.title === maintenanceProject)?.maintenanceMessage || 
                "The Safety Alerts System demo is currently undergoing maintenance and improvements. Please check back later for the live demo."}
              </p>
              <div className="flex justify-center">
                <a
                  href={projects.find(p => p.title === maintenanceProject)?.github || "https://github.com/aabdul-haadi/Safety-Alerts-System"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-police-blue hover:bg-police-blue-light text-white px-6 py-2 rounded-lg transition-colors duration-300"
                >
                  View Project Repository
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;