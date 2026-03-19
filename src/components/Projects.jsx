import React from 'react';
import { ExternalLink, Sprout, Nut, FlaskConical, Factory, Leaf, Settings, Mic, Flower } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Dutch Farming for Tomato Cultivation (M.Sc Thesis)',
            category: 'M.Sc Thesis',
            description: 'Designed & validated a passive hydroponic NFT system for year-round tomato & leafy greens production in South India climate. Engineered custom drip irrigation circuits with 1:1 N:K ratio optimization. Results: 70-90% water savings vs. field farming, 60% nutrient reduction, 200+ tons/hectare/year yield potential. System designed for scaling to 1000m² greenhouse facilities.',
            tools: ['Hydroponics (NFT)', 'Drip Irrigation Design', 'Climate Adaptation', 'Yield Optimization', 'Resource Analysis'],
            icon: <Sprout size={24} className="text-primary-color" />,
            link: 'https://www.researchgate.net/publication/398020320_Implementation_of_Dutch_Farming_for_the_Cultivation_of_Tomatoes_in_South_India'
        },
        {
            title: 'Disc Plough Dynamics & Mechanical Modeling',
            category: 'B.Tech Project',
            description: 'Modeled disc plough blade dynamics using SolidWorks & Ansys FEA. Performed stress-strain analysis under field conditions (500-1000 rpm blade speeds). Optimized blade geometry reducing soil resistance by 15% while maintaining structural integrity. Comprehensive cost-benefit analysis for small-scale farming mechanization.',
            tools: ['SolidWorks Design', 'Ansys FEA', 'Machine Dynamics', 'Material Selection', 'Cost Analysis'],
            icon: <Settings size={24} className="text-gray-700" />
        },
        {
            title: 'Post Hole Digger (Auger) - Structural Analysis',
            category: 'Design Project',
            description: 'Engineered a rotary post-hole digger using SolidWorks CAD. Conducted comprehensive Ansys structural & vibration analysis. Optimized auger blade geometry for soil excavation efficiency at 200-400 rpm operation. Reduced material waste by 12% through iterative design refinement. Design validated for use in diverse soil conditions.',
            tools: ['Solidworks CAD', 'Ansys Simulation', 'Blade Geometry Optimization', 'Vibration Analysis'],
            icon: <Settings size={24} className="text-gray-700" />
        },
        {
            title: 'Biodegradable Mulching Materials Research',
            category: 'Research (Fondazione Politecnico)',
            description: 'Conducted polymer materials research exploring biodegradable alternatives to plastic mulch. Field trials on 500m² test plots comparing bio-based vs. conventional mulching. Measured soil health parameters: water retention (+25%), organic matter (+18%), beneficial microbe count (+40%). Identified 3 economically viable biopolymer formulations.',
            tools: ['Material Science', 'Field Experimentation', 'Soil Analysis', 'Sustainability Impact'],
            icon: <Leaf size={24} className="text-green-500" />
        },
        {
            title: 'Automated Chemical Process Control System',
            category: 'Automation Project',
            description: 'Designed & simulated a PLC-based automated control system for nutrient dosing in hydroponic systems. Integrated temperature & pH feedback loops using Arduino sensors. Achieved real-time monitoring with ±2% accuracy for nutrient concentration. Reduced manual intervention by 80%, enabling unattended 24/7 operation for crop cycles.',
            tools: ['PLC Programming', 'Arduino Microcontrollers', 'Sensor Integration', 'Automation Logic', 'Control System Design'],
            icon: <FlaskConical size={24} className="text-blue-500" />
        },
        {
            title: 'Seed Ball Making Machine - Automation Design',
            category: 'B.Tech Project',
            description: 'Designed, fabricated & tested an automated seed ball making machine achieving 40 units/minute production rate. Mechanical system for seed coating with biodegradable clay mixture. Performance testing: 98% coating uniformity, 94% seed germination rate post-production. Comprehensive feasibility study for rural cooperative scaling.',
            tools: ['Machine Design', 'Production Engineering', 'Efficiency Testing', 'Equipment Costing'],
            icon: <Nut size={24} className="text-secondary-color" />
        },
        {
            title: 'Organic Farming & Bio-fertilizer System Design',
            category: 'Mini Project',
            description: 'Engineered a bio-fertilizer production & application system using Pseudomonas and Panchakavya formulations. Designed microbial culture chambers & storage protocols. Field validation showed 35% yield increase on legume crops without synthetic NPK. Cost analysis demonstrated 40% savings vs. commercial fertilizers while improving soil carbon by 3.2%.',
            tools: ['Bio-fertilizer Formulation', 'Organic Farming', 'Microbial Culture', 'Soil Science', 'Economics'],
            icon: <Flower size={24} className="text-pink-500" />
        },
        {
            title: 'Agricultural Mechanization Impact Analysis',
            category: 'Research Seminar',
            description: 'Presented data-driven research on mechanization\'s role in small-scale farming efficiency. Analysis of 50+ case studies showing average 45% labor cost reduction & 30% yield increase post-mechanization adoption. Identified critical barriers: upfront capital (€3,000-8,000), operator training, maintenance infrastructure. Framework for government subsidy programs.',
            tools: ['Research Analysis', 'Data Visualization', 'Economic Modeling', 'Technical Presentation'],
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
