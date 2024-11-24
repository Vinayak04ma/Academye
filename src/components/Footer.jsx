import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8 px-4">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">About Us</h4>
                    <p className="text-sm">
                        Learn more about Unacademy, its mission, and its offerings.
                    </p>
                </div>

                {/* Useful Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Useful Links</h4>
                    <ul>
                        <li className="mb-1">Courses</li>
                        <li className="mb-1">Pricing</li>
                        <li className="mb-1">Blog</li>
                        <li className="mb-1">Contact Us</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Social Media</h4>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com/unacademy" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://twitter.com/unacademy" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://linkedin.com/company/unacademy" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaLinkedinIn size={20} />
                        </a>
                        <a href="https://instagram.com/unacademy" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Contact/Support */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Support</h4>
                    <ul>
                        <li className="mb-1">Help Center</li>
                        <li className="mb-1">FAQ</li>
                        <li className="mb-1">Privacy Policy</li>
                        <li className="mb-1">Terms of Service</li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                <p>&copy; 2024 AcademyWallah. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;