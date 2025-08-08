import React from "react";


function Navbar({className}) {

    return (
        <>  
            <div className={className + 'drop-shadow-6xl backdrop-blur-6xl'}>
                <div className={" w-screen font-['KreganDEMO-Regular'] font-light nav-main drop-shadow-xl drop-shadow-amber-400 text-white flex justify-between pt-1 align-middle opacity-100 "} >
                    <div id="mait-logo w-[40%]">
                        <img src="https://ik.imagekit.io/evkfzbhzw/MAIT_LOGO_FULL.png?updatedAt=1754509330340" alt="mait-logo" className="h-30 ml-2 w-170 object-cover scale-[0.78] lg:block sm:hidden" />
                    </div>
                    <div id="nav-links" className=" pt-4 font-sans w-[100%] mr-7 relative flex justify-around text-xl ">
                        <div id="home" className=" nav-items " >
                            Home
                        </div>
                        <div id="academics" className="nav-items " >
                            Academics
                        </div>
                        <div id="admissions" className="nav-items " >
                            Admissions
                        </div>
                        <div id="facilities" className="nav-items " >
                            Facilities
                        </div>
                        <div id="alumni" className="nav-items " >
                            Alumni
                        </div>
                        <div id="portals" className="nav-items " >
                            Portals
                        </div>
                        <div id="home" className="nav-items " >
                            Hackathons
                        </div>
                        <div id="societies" className="nav-items " >
                            Societies
                        </div>
                        <div id="activities" className="nav-items " >
                            Activities
                        </div>
                        <div id="quick-links" className="nav-items " >
                            Quick Links
                        </div>
                        <div id="contact-us" className="nav-items " >
                            Contact Us
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Navbar;