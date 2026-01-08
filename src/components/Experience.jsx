import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [

        {
            role: 'International Student Exchange Coordinator',
            company: 'Politecnico di Milano, Italy',
            period: '07/2025 - 09/2025',
            description: 'Advised incoming/outgoing students on exchange programs. Handled administrative inquiries and translated official documents.'
        },
        {
            role: 'Sales Executive (Training)',
            company: 'Global Connective Solutions, India',
            period: '2020 - 2021',
            description: 'Established relationships with target audiences and managed marketing communications. Gained experience in digital marketing technologies and online business growth.'
        },
        {
            role: 'Agronomy & AI Trainee',
            company: 'FarmAgain Agro Private Ltd., India',
            period: '2020 - 2021',
            description: 'Specialized training combining Agronomy expertise with Artificial Intelligence. Collaborated with sales teams to drive product bundling and dealer performance.'
        },
        {
            role: 'Quality Officer',
            company: 'Shanthi Management Solutions Pvt. Ltd, India',
            period: '2018 - 2019',
            description: 'Inspected finished products and monitored production procedures to ensure compliance. Addressed quality deviations and implemented corrective actions.'
        },
        {
            role: 'Internship (Processing & Database)',
            company: 'Del Monte Foods (FieldFresh Foods Pvt. Ltd.)',
            period: '3 Months (2019)',
            description: 'Intensive internship focusing on the processing of Del Monte products and managing the fresh division database. Gained hands-on experience in sourcing and quality control.'
        }
    ];

    const internships = [
        "Northern Region Farm Machinery Training & Testing Institute (Hisar)",
        "National Seeds Corporation (Suraigarh) - Farm Machinery & Irrigation",
        "ICAR - Indian Institute of Soil & Water Conservation (Ooty)",
        "Aavin Tamilnadu Cooperative Milk Producer Federation Ltd (Chennai)"
    ];

    return (
        <section id="experience" className="bg-stone-50">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Professional <span className="gradient-text">Experience</span>
                </motion.h2>

                {/* Main Timeline */}
                <div className="max-w-4xl mx-auto relative mb-20">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-stone-300 -translate-x-1/2 hidden md:block"></div>
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center justify-between md:flex-row flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-white border-4 border-primary-color rounded-full -translate-x-1/2 hidden md:block z-10 box-content"></div>
                                <div className="flex-1 w-full md:w-5/12"></div>
                                <div className="flex-1 w-full md:w-5/12 pl-8 md:pl-0">
                                    <div className="bg-white p-6 rounded-xl border border-stone-200 hover:border-primary-color hover:shadow-lg transition-all transform hover:-translate-y-1">
                                        <span className="text-secondary-color text-sm font-bold uppercase tracking-wider mb-2 block">{exp.period}</span>
                                        <h3 className="text-xl font-bold mb-1 text-gray-800">{exp.role}</h3>
                                        <p className="text-primary-color font-medium mb-4">{exp.company}</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Internships Section */}
                <div className="max-w-4xl mx-auto">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-center mb-8 text-[#064e3b]"
                    >
                        Industrial Internships
                    </motion.h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {internships.map((internship, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-4 rounded-lg border border-green-100 flex items-center gap-3 shadow-sm"
                            >
                                <div className="w-2 h-2 rounded-full bg-primary-color flex-shrink-0"></div>
                                <span className="text-gray-700 font-medium text-sm md:text-base">{internship}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
