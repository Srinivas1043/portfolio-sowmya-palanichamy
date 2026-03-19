import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [

        {
            role: 'Scientific Collaborator | Hydroponics Systems Engineer',
            company: 'AgroTIE Services LLP, India',
            period: 'Aug 2024 - Jan 2025',
            description: 'Indo-Dutch hydroponics training & field implementation. Managed high-performance CEA operations for Tomatoes, Capsicum (Bell Pepper), and Cucumber in semi-automated greenhouse (500m² NFT system). Engineered fertigation protocols achieving 90% nutrient efficiency. Managed substrate management, integrated pest management, and crop scheduling. Key achievements: 85% yield optimization, disease incidence reduced from 12% to 2%, water efficiency improved to 95%.'
        },
        {
            role: 'International Student Exchange Coordinator',
            company: 'Politecnico di Milano, Italy',
            period: '07/2025 - 09/2025',
            description: 'Supports international mobility network. Advises exchange students on program compliance, visa documentation, and integration protocols. Manages multilingual administrative coordination (English, Italian, Tamil). Enhanced student retention by 15% through improved onboarding processes.'
        },
        {
            role: 'Quality Assurance Officer | Food Processing',
            company: 'Shanthi Management Solutions Pvt. Ltd, India',
            period: '2018 - 2019',
            description: 'Quality Management & Process Control in food manufacturing. Implemented ISO 22000 compliance protocols. Conducted product inspections, documented deviations, and executed corrective action plans. Achieved 99.2% quality pass rate, reducing rejections by 8% quarter-over-quarter.'
        },
        {
            role: 'Internship - Food Processing & Database Management',
            company: 'Del Monte Foods (FieldFresh Foods Pvt. Ltd.)',
            period: '3 Months (2019)',
            description: 'Intensive hands-on training in food processing operations. Managed FieldFresh division database (PostgreSQL), supply chain tracking, and quality documentation. Sourcing analysis for 200+ produce SKUs, implementing traceability systems.'
        },
        {
            role: 'Agronomy & AI Product Specialist',
            company: 'FarmAgain Agro Private Ltd., India',
            period: '2020 - 2021',
            description: 'Agricultural technology product specialist combining traditional agronomy with AI-driven farm analytics. Collaborated with sales and R&D teams on precision agriculture product bundling. Dealer support and performance optimization for digital farming platforms.'
        },
        {
            role: 'Sales Coordinator - Agri-Tech Solutions',
            company: 'Global Connective Solutions, India',
            period: '2020 - 2021',
            description: 'B2B marketing communications and digital strategy for agricultural technology. Managed customer relationship databases, digital campaign execution, and stakeholder engagement. Digital marketing automation resulting in 25% lead conversion improvement.'
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
