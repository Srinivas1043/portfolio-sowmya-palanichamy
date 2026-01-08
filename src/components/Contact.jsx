import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:sowmyapalanichamy20@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="bg-stone-50 relative overflow-hidden">
            {/* Decorative background leaf */}
            <Leaf className="absolute -top-10 -right-10 text-green-100 opacity-50 rotate-45" size={200} />

            <div className="container relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Get In <span className="gradient-text">Touch</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-800">Let's Cultivate Growth Together</h3>
                        <p className="text-gray-600 leading-relaxed">
                            I'm always open to discussing sustainable agriculture, automation in farming, new research opportunities, or creative collaborations.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-color shadow-sm group-hover:bg-primary-color group-hover:text-white transition-colors">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <a href="mailto:sowmyapalanichamy20@gmail.com" className="font-medium text-gray-800 hover:text-primary-color">sowmyapalanichamy20@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-color shadow-sm group-hover:bg-primary-color group-hover:text-white transition-colors">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <a href="tel:+393758364375" className="font-medium text-gray-800 hover:text-primary-color">+39 375 836 4375</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-color shadow-sm group-hover:bg-primary-color group-hover:text-white transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium text-gray-800">Milan, Italy</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <span className="text-gray-500 text-sm block mb-4">Connect with me</span>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/sowmya-palanichamy-40505a178/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-transform hover:scale-110"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100"
                    >
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="How can we work together?..."
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-primary-color text-white font-bold py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Send Message
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
