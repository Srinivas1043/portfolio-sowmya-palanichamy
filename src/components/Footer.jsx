import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-gray-800">
            <div className="container text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Sowmya Palanichamy. All rights reserved.</p>
                <p className="mt-2">Built with React & Tailwind CSS (Styled manually)</p>
            </div>
        </footer>
    );
};

export default Footer;
