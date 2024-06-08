import React from "react";  // Correct import with uppercase 'R' for React

function Footer() {
    const currentYear = new Date().getFullYear();  // Get current year dynamically

    return (
        <footer className="footer bg-light text-center py-3">
            <div className="container">
                <p className="mb-0">
                    &copy; {currentYear} <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">Your Website</a>
                </p>
            </div>
        </footer>
    );
}
export default Footer;