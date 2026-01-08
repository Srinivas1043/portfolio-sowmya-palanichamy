import React from 'react';
import { ExternalLink, Sprout, Nut, FlaskConical, Factory, Leaf, Settings, Mic, Flower } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Dutch Farming for Tomato Cultivation',
            category: 'M.Sc Thesis',
            description: 'Designed a passive hydroponic model system for year-round tomato and leafy vegetable production in South India. Achieved 70% - 90% water savings and 60% nutrient reduction.',
            tools: ['Hydroponics', 'Sustainable Farming', 'Resource Optimization'],
            icon: <Sprout size={24} className="text-primary-color" />,
            link: 'https://www.researchgate.net/publication/398020320_Implementation_of_Dutch_Farming_for_the_Cultivation_of_Tomatoes_in_South_India'
        },
        {
            title: 'Organic Farming using Bio-fertilizers',
            category: 'Mini Project',
            description: 'Designed and cost-analyzed an organic farming system using bio-fertilizers like Pseudomonas and Panchakavya. Focused on sustainable soil health and chemical-free production.',
            tools: ['Bio-fertilizers', 'Organic Farming', 'Cost Analysis'],
            icon: <Flower size={24} className="text-pink-500" />
        },
        {
            title: 'Post Hole Digger (Auger) Analysis',
            category: 'Design Project',
            description: 'Performed design and structural analysis of a post hole digger using Solidworks and Ansys. Optimized the blade geometry for efficient soil excavation and durability.',
            tools: ['Solidworks', 'Ansys', 'Machine Design', 'Simulation'],
            icon: <Settings size={24} className="text-gray-700" />
        },
        {
            title: 'Biodegradable Mulching Materials',
            category: 'Research (Fondazione Politecnico)',
            description: 'Researched natural polymers and conducted field trials to identify environmentally-friendly alternatives to plastic mulching. Focused on enhancing soil health.',
            tools: ['Material Science', 'Field Trials', 'Sustainability'],
            icon: <Leaf size={24} className="text-green-500" />
        },
        {
            title: 'Automated Chemical Process Control',
            category: 'Automation Project',
            description: 'Designed and simulated an automated control system using Arduino and PLC. Achieved seamless real-time monitoring and control over temperature and flow rates.',
            tools: ['Arduino', 'PLC', 'Automation', 'Simulation'],
            icon: <FlaskConical size={24} className="text-blue-500" />
        },
        {
            title: 'Seed Ball Making Machine',
            category: 'B.Tech Project',
            description: 'Designed, developed, and tested an automated seed ball making machine. Conducted cost analysis and efficiency testing, earning recognition for innovation.',
            tools: ['Machine Design', 'Efficiency Testing', 'Cost Analysis'],
            icon: <Nut size={24} className="text-secondary-color" />
        },
        {
            title: 'Agricultural Mechanization Seminar',
            category: 'Seminar',
            description: 'Presented comprehensive research on "Increasing agricultural mechanization for optimal crop yield". Analyzed the impact of modern machinery on small-scale farming efficiency.',
            tools: ['Research', 'Presentation', 'Farm Machinery'],
            icon: <Mic size={24} className="text-purple-500" />
        }
    ];

    return (
        <section id="projects" className="bg-white">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Research & <span className="gradient-text">Field Work</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: 'var(--primary-color)' }}
                            className="card group border border-gray-100 hover:shadow-lg flex flex-col h-full bg-white transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                                    {project.icon}
                                </div>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide border border-gray-200 px-2 py-1 rounded">
                                    {project.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary-color transition-colors flex items-center gap-2">
                                {project.title}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-primary-color transition-colors"
                                        title="View Publication"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </h3>

                            <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 mt-auto">
                                {project.tools.map((tag, i) => (
                                    <span key={i} className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
