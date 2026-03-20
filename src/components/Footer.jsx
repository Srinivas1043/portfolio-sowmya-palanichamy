import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Schema.org JSON-LD for better SEO indexing
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Sowmya Palanichamy",
        "title": "Agricultural Engineer",
        "url": "https://sowmyapalanichamy.com",
        "email": "sowmyavivin22@gmail.com",
        "phone": "+39 351 847 2236",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Milan",
            "addressCountry": "IT"
        },
        "jobTitle": "Agricultural Engineer | Machinery Design Specialist",
        "educationCredential": {
            "@type": "EducationalOccupationalCredential",
            "name": "M.Sc. Sustainable Development (Agri-food)",
            "credentialCategory": "Master's Degree",
            "issuedBy": {
                "@type": "EducationalOrganization",
                "name": "Politecnico di Milano"
            }
        },
        "sameAs": [
            "https://www.linkedin.com/in/sowmya-palanichamy",
            "https://www.researchgate.net/profile/Sowmya-Palanichamy"
        ]
    };

    React.useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schemaMarkup);
        document.head.appendChild(script);
        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return (
        <footer className="py-12 border-t border-gray-800 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Branding */}
                    <div>
                        <h3 className="text-xl font-bold gradient-text mb-3">Sowmya Palanichamy</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Agricultural Engineer | M.Sc. Sustainable Development | Machinery Design & Innovation Expert
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gray-300 font-semibold mb-4 text-sm">Specializations</h4>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li><a href="#projects" className="hover:text-primary-color transition-colors">Machinery Design</a></li>
                            <li><a href="#projects" className="hover:text-primary-color transition-colors">Hydroponic Systems</a></li>
                            <li><a href="#projects" className="hover:text-primary-color transition-colors">Quality Management</a></li>
                            <li><a href="#projects" className="hover:text-primary-color transition-colors">Process Automation</a></li>
                            <li><a href="#projects" className="hover:text-primary-color transition-colors">Sustainable Farming</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-gray-300 font-semibold mb-4 text-sm">Contact</h4>
                        <div className="space-y-3 text-gray-400 text-sm">
                            <div className="flex items-center gap-2">
                                <Mail size={16} className="text-primary-color flex-shrink-0" />
                                <a href="mailto:sowmyavivin22@gmail.com" className="hover:text-white transition-colors">sowmyavivin22@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-primary-color flex-shrink-0" />
                                <a href="tel:+393518472236" className="hover:text-white transition-colors">+39 351 847 2236</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-primary-color flex-shrink-0" />
                                <span>Milan, Italy</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links & Copyright */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
                        &copy; {currentYear} Sowmya Palanichamy. All rights reserved. | Agricultural Engineer | Based in Milan, Italy
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com/in/sowmya-palanichamy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary-color transition-colors"
                            title="LinkedIn Profile"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="https://www.researchgate.net/profile/Sowmya-Palanichamy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary-color transition-colors"
                            title="ResearchGate Profile"
                            aria-label="ResearchGate"
                        >
                            <span className="text-xs font-bold">RG</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
