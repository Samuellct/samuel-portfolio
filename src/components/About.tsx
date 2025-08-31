import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Target, Code, BarChart3, Globe } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { t } = useTranslation();

  const skills = [
    {
      category: t('about.skills'),
      items: ['C++', 'Python', 'LATEX', 'Analyse des données'],
      icon: <Code size={24} />
    },
    {
      category: t('skills.tools'),
      items: ['ROOT', 'LabVIEW', 'Arduino', 'Git'],
      icon: <BarChart3 size={24} />
    },
    {
      category: t('about.languages'),
      items: ['Français (natif)', 'Anglais (TOEIC: 930/990)'],
      icon: <Globe size={24} />
    }
  ];

  const interests = [
    'Course à pied : pratique régulière, marathon & trail',
    'Alpinisme et randonnée en montagne',
    'Technologies open source et self-hosting',
    'Physique théorique et informatique quantique'
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
                  {t('about.intro')}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {t('about.intro')}
                </p>
              </div>

              <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  {t('about.goals')}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {t('about.goalsText')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">{t('about.skills')}</h3>
              
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-blue-400">
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-semibold">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-slate-700 text-sm rounded-full text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-slate-900/30 p-8 rounded-xl border border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">{t('about.interests')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>{interest}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;