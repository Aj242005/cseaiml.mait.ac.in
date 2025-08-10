import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ className }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={className + 'drop-shadow-6xl backdrop-blur-6xl'}>
                <div className={" w-screen font-['KreganDEMO-Regular'] font-light nav-main drop-shadow-xl drop-shadow-amber-400 text-white flex justify-between pt-1 align-middle opacity-100 relative "} >
                    <div id="mait-logo" className="w-[40%] md:w-auto">
                        <img src="https://ik.imagekit.io/evkfzbhzw/MAIT_LOGO_FULL.png?updatedAt=1754509330340" alt="mait-logo" className="h-16 md:h-25 mt-2 ml-2 w-auto md:w-130 object-cover scale-[0.6] md:scale-[0.78]" />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center mr-4">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div id="nav-links" className="hidden md:flex pt-4 font-sans w-[100%] mr-7 relative justify-around text-base lg:text-xl">
                        <Link to="/" className="nav-items">
                            Home
                        </Link>
                        <Link to="/academics" className="nav-items">
                            Academics
                        </Link>
                        <Link to="/facilities" className="nav-items">
                            Facilities
                        </Link>
                        <Link to="/alumni" className="nav-items">
                            Alumni
                        </Link>
                        <Link to="/achievements" className="nav-items">
                            Achievements
                        </Link>
                        <Link to="/societies" className="nav-items">
                            Societies
                        </Link>
                        <Link to="/quick-links" className="nav-items">
                            Quick Links
                        </Link>
                        <Link to="/contact-us" className="nav-items">
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Navigation Menu */}
                    <div className={`md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-6xl transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <div className="flex flex-col py-4 space-y-4 text-center text-lg font-sans">
                            <Link to="/" className="nav-items py-2 px-4" onClick={toggleMenu}>
                                Home
                            </Link>
                            <Link to="/academics" className="nav-items py-2 px-4" onClick={toggleMenu}>
                                Academics
                            </Link>
                            <Link to="/facilities" className="nav-items py-2 px-4" onClick={toggleMenu}>
                                Facilities
                            </Link>
                            <Link to="/alumni" className="nav-items py-2 px-4" onClick={toggleMenu}>
                                Alumni
                            </Link>
                            <Link to="/achievements" className="nav-items py-2 px-4" onClick={toggleMenu}>
                                Achievements
                            </Link>
                            <Link to="/societies" className="nav-items py-2 px-4" onClick={toggleMenu}>
                                Societies
                            </Link>
                            <Link to="/quick-links" className="nav-items py-2 px-4" onClick={toggleMenu}>
                                Quick Links
                            </Link>
                            <Link to="/contact-us" className="nav-items py-2 px-4" onClick={toggleMenu}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;