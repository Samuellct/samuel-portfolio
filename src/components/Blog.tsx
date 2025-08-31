import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { PenTool, Mountain, Code, Trophy } from 'lucide-react';

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { t } = useTranslation();

  const blogCategories = [
    {
      icon: <Trophy size={24} />,
      title: 'Accomplissements professionnels',
      description: 'Partage de mes expériences de recherche, publications et projets académiques',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Mountain size={24} />,
      title: 'Aventures sportives',
      description: 'Récits de courses, trails et expéditions en montagne avec conseils d\'entraînement',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Code size={24} />,
      title: 'Projets techniques',
      description: 'Documentation détaillée de mes projets personnels et tutoriels techniques',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4">{t('blog.title')}</h2>
          <p className="text-xl text-slate-300 mb-12">{t('blog.subtitle')}</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-900/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl mb-6 text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {category.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-slate-900/30 p-12 rounded-xl border border-slate-700"
          >
            <div className="flex items-center justify-center mb-6">
              <PenTool size={48} className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              {t('blog.comingSoon')}
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {t('blog.description')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;