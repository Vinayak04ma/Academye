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
                        <li className="mb-1"><a href="/courses" className="hover:underline">Courses</a></li>
                        <li className="mb-1"><a href="/pricing" className="hover:underline">Pricing</a></li>
                        <li className="mb-1"><a href="/blog" className="hover:underline">Blog</a></li>
                        <li className="mb-1"><a href="/contact" className="hover:underline">Contact Us</a></li>
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
                        <li className="mb-1"><a href="/help" className="hover:underline">Help Center</a></li>
                        <li className="mb-1"><a href="/faq" className="hover:underline">FAQ</a></li>
                        <li className="mb-1"><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                        <li className="mb-1"><a href="/terms" className="hover:underline">Terms of Service</a></li>
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