import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Briefcase } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Autodesk AutoCAD User Certification',
      issuer: 'Autodesk',
      date: 'Jul 2017',
      skills: ['AutoCAD', 'CAD Design', 'Technical Drawing', 'Drafting']
    },
    {
      title: 'Soil and Water Conservation Engineering',
      issuer: 'ICAR - Indian Council of Agricultural Research',
      date: 'Dec 2017',
      skills: ['Soil Science', 'Water Management', 'Watershed Management', 'Conservation Engineering']
    },
    {
      title: 'Operation of Tractor-Operated Agricultural Machinery',
      issuer: 'Ministry of Agriculture & Farmers Welfare, Government of India',
      date: 'Sep 2018',
      skills: ['Farm Machinery', 'Machinery Operation', 'Agricultural Equipment', 'Mechanization']
    },
    {
      title: 'Practical Aspects in Agricultural Engineering',
      issuer: 'National Seeds Corporation Limited',
      date: 'Sep 2018',
      skills: ['Agricultural Engineering', 'Seed Technology', 'Crop Production', 'Impact Assessment']
    },
    {
      title: 'Increasing Mechanized Farm Power for Maximum Crop Productivity',
      issuer: 'Sri Shakthi Institute of Engineering and Technology',
      date: 'Jul 2017',
      skills: ['Farm Mechanization', 'Crop Productivity', 'Agricultural Engineering', 'Power Generation']
    },
    {
      title: 'Design and Analysis of Post Hole Digger Auger',
      issuer: 'AGRI INTEX CODISSIA',
      date: 'Ongoing',
      skills: ['Machine Design', 'Engineering Analysis', 'Soil Dynamics', 'Mechanical Engineering']
    },
    {
      title: 'In-Plant Training - Food Processing & Quality',
      issuer: 'AAVIN (Tamilnadu Cooperative Milk Producers Federation Ltd)',
      date: 'Jul 2019',
      skills: ['FMCG', 'Quality Management', 'Food Processing', 'Dairy Operations']
    },
    {
      title: 'Food Processing & Database Management Internship',
      issuer: 'Del Monte Foods Private Limited',
      date: 'Feb 2020',
      skills: ['Food Processing', 'Database Management', 'Supply Chain', 'Quality Control']
    },
    {
      title: 'National Science and Technology Innovation Fair',
      issuer: 'CODISSIA - Coimbatore District Small Industries Association',
      date: 'Aug 2019',
      skills: ['Innovation', 'Technology', 'Research Presentation', 'Industrial Technology']
    },
    {
      title: 'Sales & Product Coordination Certification',
      issuer: 'Farmagain - Agri Solutions',
      date: 'Dec 2020',
      skills: ['Sales Coordination', 'Product Management', 'B2B Marketing', 'Agricultural Products']
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
