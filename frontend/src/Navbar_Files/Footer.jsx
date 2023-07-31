import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-3 fixed bottom-0 left-0 right-0">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} LearnEdge. All rights reserved.</p>
                <p><i>Learn Anytime Anywhere </i> 🎓🕜🌐</p>
            </div>
        </footer>
    );
};

export default Footer;