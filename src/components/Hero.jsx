import React from 'react';
import { Download, ChevronRight, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-br from-green-50 to-stone-100">

            {/* Decorative Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-20 left-0 w-96 h-96 bg-stone-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="container relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm text-primary-color text-sm font-semibold mb-6 border border-green-100">
                            <Leaf size={16} />
                            <span>Cultivating Sustainable Solutions</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                            Hi, I'm <br />
                            <span className="gradient-text">Sowmya</span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-medium">
                            Agricultural Engineer & Researcher
                        </h2>

                        <p className="text-gray-500 text-lg mb-8 max-w-lg leading-relaxed">
                            Merging engineering precision with nature's wisdom. Specializing in Sustainable Farming, Quality Management, and Agricultural Automation.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="bg-primary-color text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors flex items-center gap-2 shadow-lg shadow-green-200"
                            >
                                View My Work <ChevronRight size={18} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/assets/CV_SOWMYAPALANICHAMY.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-gray-800 px-8 py-3 rounded-full font-medium border border-gray-200 hover:border-primary-color hover:text-primary-color transition-colors flex items-center gap-2 shadow-sm"
                            >
                                Download CV <Download size={18} />
                            </motion.a>
                        </div>

                        <div className="mt-12 flex gap-8 items-center text-gray-400">
                            <div>
                                <h4 className="text-3xl font-bold text-gray-800">4+</h4>
                                <p className="text-sm">Years Exp</p>
                            </div>
                            <div className="w-px h-10 bg-gray-300"></div>
                            <div>
                                <h4 className="text-3xl font-bold text-gray-800">10+</h4>
                                <p className="text-sm">Projects</p>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                            {/* Image Border/Shape */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-color to-secondary-color rounded-[2rem] rotate-6 opacity-20"></div>
                            <div className="absolute inset-0 bg-white rounded-[2rem] -rotate-6 shadow-xl overflow-hidden border-4 border-white">
                                <img
                                    src="/src/assets/sowmya.jpg"
                                    alt="Sowmya Palanichamy"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Sowmya+Palanichamy&background=059669&color=fff&size=400' }}
                                />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3"
                            >
                                <div className="bg-green-100 p-2 rounded-full text-primary-color">
                                    <Leaf size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase">Focus</p>
                                    <p className="font-bold text-gray-800">Sustainability</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
