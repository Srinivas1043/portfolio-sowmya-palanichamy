import React from 'react';
import { Award, BookOpen, Leaf, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="about" className="bg-white">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    About <span className="gradient-text">Me</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <motion.div variants={itemVariants}>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            I am a dedicated Agricultural Engineer with a strong foundation in <strong>Engineering Processes</strong>, <strong>Quality Management</strong>, and <strong>Sustainable Development</strong>.
                            Currently pursuing my Master's at <strong>Politecnico Di Milano</strong>, I excel in fast-paced environments and collaborative settings.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            My expertise spans <strong>hydroponic systems design</strong>, <strong>agricultural machinery engineering</strong>, <strong>quality control</strong>, and <strong>automation in farming</strong>. From designing automated systems to researching sustainable practices, I am committed to driving innovation through technical excellence. I am multilingual (English, Tamil, Italian) and eager to contribute to agricultural solutions globally. Proven track record: 70-90% water savings, enhanced crop yields, optimized production efficiency.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-green-50 p-6 rounded-xl border border-green-100"
                            >
                                <Leaf className="text-primary-color mb-3" size={32} />
                                <h3 className="text-2xl font-bold text-primary-color mb-1">M.Sc.</h3>
                                <p className="text-sm text-gray-600">Sustainable Development (Agri-food)</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-green-50 p-6 rounded-xl border border-green-100"
                            >
                                <Globe className="text-secondary-color mb-3" size={32} />
                                <h3 className="text-2xl font-bold text-secondary-color mb-1">3+</h3>
                                <p className="text-sm text-gray-600">Languages (En, Ta, It)</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-stone-50 p-8 rounded-2xl border border-stone-100"
                    >
                        <h3 className="text-xl font-bold mb-6 text-[#064e3b] flex items-center gap-2">
                            <BookOpen size={20} /> Field of Expertise
                        </h3>

                        <div className="space-y-6">
                            {/* Skill Bars with Animation */}
                            {[
                                { name: 'Sustainable Agriculture & Hydroponics', level: '95%' },
                                { name: 'Agricultural Machinery Design & Engineering', level: '90%' },
                                { name: 'Quality Management & Process Control', level: '90%' },
                                { name: 'CAD Design (SolidWorks) & Simulation (Ansys)', level: '85%' },
                                { name: 'Automation & Control Systems', level: '85%' },
                                { name: 'Irrigation Systems & Water Optimization', level: '90%' }
                            ].map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-md font-medium text-gray-700">{skill.name}</span>
                                        <span className="text-sm text-primary-color font-bold">{skill.level}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: skill.level }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="bg-primary-color h-2 rounded-full"
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
