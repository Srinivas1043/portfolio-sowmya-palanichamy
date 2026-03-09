import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar, Globe } from 'lucide-react';

const News = () => {
    const newsItems = [
        {
            title: 'Engineering for Efficiency and Sustainability',
            publication: 'Mondo Padano',
            date: 'December 12, 2025',
            location: 'Cremona, Italy',
            description: 'Featured in the renowned Italian publication Mondo Padano\'s "Young & Work" section for her outstanding achievements in agricultural engineering education. The article highlights Sowmya\'s three-year academic journey at Politecnico di Milano, her innovative research on sustainable farming methods, and her contributions to bridging agricultural practices between Europe and South India.',
            highlights: [
                'Master\'s Degree in Agricultural Engineering',
                'Implementation of Dutch Farming for Tomato Cultivation thesis',
                'International student exchange experience',
                'Expertise in sustainable hydroponics and resource optimization'
            ],
            link: 'https://www.mondopadano.it/news/economia-lavoro/giovani-e-lavoro/lingegneria-per-creare-efficienza-e-sostenibilita/22951',
            icon: <Award size={24} className="text-primary-color" />
        }
    ];

    return (
        <section id="news" className="py-20 bg-stone-50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title text-center mb-16"
                >
                    Featured In The <span className="gradient-text">News</span>
                </motion.h2>

                <div className="max-w-4xl mx-auto space-y-8">
                    {newsItems.map((news, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl border border-stone-200 hover:border-primary-color hover:shadow-lg transition-all duration-300 overflow-hidden group"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-primary-color/10 to-secondary-color/10 p-6 border-b border-stone-200">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary-color/20 rounded-lg group-hover:bg-primary-color/30 transition-colors">
                                            {news.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-color transition-colors">
                                                {news.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-1">
                                                    <Globe size={16} className="text-primary-color" />
                                                    <span className="font-medium">{news.publication}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={16} className="text-secondary-color" />
                                                    <span>{news.date}</span>
                                                </div>
                                                <span className="text-gray-500">📍 {news.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    {news.description}
                                </p>

                                {/* Highlights */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">Key Highlights</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {news.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <span className="text-primary-color font-bold mt-1">✓</span>
                                                <span className="text-gray-700 text-sm">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <a
                                    href={news.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-primary-color hover:bg-primary-color/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                                >
                                    Read Full Article
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats/Quote Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-primary-color/5 to-secondary-color/5 rounded-xl p-8 border border-stone-200"
                >
                    <blockquote className="text-center">
                        <p className="text-lg text-gray-800 italic mb-4">
                            "My experience in Italy over the last three years has enriched me both personally and academically. Studying at Politecnico di Milano allowed me to learn advanced agricultural engineering techniques and live in a diverse, international learning environment. My time in Italy has made me more confident, with a global mindset and better professional preparation."
                        </p>
                        <p className="text-sm font-bold text-primary-color">- Sowmya Palanichamy</p>
                        <p className="text-xs text-gray-600 mt-2">Featured in Mondo Padano, December 12, 2025</p>
                    </blockquote>
                </motion.div>
            </div>
        </section>
    );
};

export default News;
