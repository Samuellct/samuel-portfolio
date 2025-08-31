import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Download, Code2, Database, GitBranch, Container, BarChart3, FileText, Cpu, Globe, MessageSquare } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { t } = useTranslation();

  const technicalSkills = [
    { name: 'C++', icon: <Code2 size={24} />, color: 'text-blue-400' },
    { name: 'Python', icon: <Code2 size={24} />, color: 'text-yellow-400' },
    { name: 'R', icon: <BarChart3 size={24} />, color: 'text-blue-500' },
    { name: 'ROOT', icon: <Database size={24} />, color: 'text-green-400' },
    { name: 'Git', icon: <GitBranch size={24} />, color: 'text-orange-400' },
    { name: 'Docker', icon: <Container size={24} />, color: 'text-cyan-400' },
    { name: 'Rivet', icon: <Cpu size={24} />, color: 'text-purple-400' }
  ];

  const softSkills = [
    'Analyse des données',
    'LaTeX',
    'Arduino',
    'Communication scientifique',
    'Français (natif)',
    'Anglais (TOEIC: 930/990)'
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">{t('about.title')}</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                  Présentation
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Je suis un étudiant de 23 ans sérieux et déterminé, actuellement en Master de Physique. Mon stage en laboratoire en 2024 m'a permis de développer une méthodologie de recherche rigoureuse et une grande autonomie. Fort de cette expérience, je suis à la recherche de nouvelles opportunités pour approfondir mes connaissances.
                </p>
              </div>

              <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  {t('about.goals')}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Ouvert aux opportunités de doctorat en physique fondamentale ou aux postes en science des données dans l'industrie. Je cherche à appliquer mes compétences analytiques et ma rigueur scientifique dans des projets innovants.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Technical Skills */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-center">Compétences techniques</h3>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-8">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 text-center group"
                    >
                      <div className={`${skill.color} mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Soft Skills */}
                <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
                  <h4 className="text-lg font-semibold mb-4 text-green-400">Autres compétences</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {softSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                        <span className="text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CV Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-center"
              >
                <motion.a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                >
                  <Download size={20} />
                  <span>{t('about.downloadCV')}</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;