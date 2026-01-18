import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Briefcase } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Sales Coordinator',
      issuer: 'Farmagain',
      date: 'Dec 2020',
      skills: []
    },
    {
      title: 'Internship Training',
      issuer: 'Del Monte Foods Private Limited',
      date: 'Feb 2020',
      skills: []
    },
    {
      title: 'National Science and Technology Fair 2019',
      issuer: 'CODISSIA - COIMBATORE DISTRICT SMALL INDUSTRIES ASSOCIATION',
      date: 'Aug 2019',
      skills: []
    },
    {
      title: 'In Plant Training',
      issuer: "AAVIN (Tamilnadu Co-op milk producers' Federation ltd)",
      date: 'Jul 2019',
      skills: ['Fast-Moving Consumer Goods (FMCG)']
    },
    {
      title: 'Operation of Different tractor operated agricultural machinery on the Farm',
      issuer: 'Ministry of Agriculture & Farmers Welfare, Government of India',
      date: 'Sep 2018',
      skills: []
    },
    {
      title: 'Practical Aspects in Agriculture Engineering',
      issuer: 'National Seeds Corporation Limited',
      date: 'Sep 2018',
      skills: ['Agricultural Impact Assessment']
    },
    {
      title: 'Soil and Water Conservation and Waterhead management',
      issuer: 'ICAR- Indian Council of Agricultural Research',
      date: 'Dec 2017',
      skills: []
    },
    {
      title: 'Autodesk AutoCAD User Certification',
      issuer: 'Autodesk',
      date: 'Jul 2017',
      skills: ['AutoCAD']
    },
    {
      title: 'Increasing Mechanized Farm Power for Maximum Crop Productivity',
      issuer: 'Sri Shakthi Institute of Engineering and Technology',
      date: 'Jul 2017',
      skills: []
    },
    {
      title: 'Design and analysis of post hole digger Auger',
      issuer: 'AGRI INTEX CODISSIA',
      date: '',
      skills: ['Presentations', 'Engineering', 'English']
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Licenses & <span className="gradient-text">Certifications</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                  <Award className="w-6 h-6 text-indigo-400" />
                </div>
                {cert.date && (
                   <span className="text-xs font-medium text-gray-500 flex items-center gap-1 bg-gray-900 px-2 py-1 rounded">
                     <Calendar size={12} />
                     {cert.date}
                   </span>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-indigo-400 transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <Briefcase size={14} />
                <span className="line-clamp-1">{cert.issuer}</span>
              </div>

              {cert.skills.length > 0 && (
                <div className="pt-4 border-t border-gray-800 flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
