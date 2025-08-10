// src/components/IsometricCubes.jsx

import React from 'react';

// This single component generates one of the small 3D cubes.
// src/components/IsometricCubes.jsx

const Cubelet = () => (
    <>
        {[3, 2, 1].map((i) => (
            <span
                key={i}
                style={{ zIndex: i }}
                className="
          inline-block relative w-[50px] h-[50px] bg-[#dcdcdc]
          transition-all duration-[1500ms]
          
          hover:bg-[#ef4149] hover:duration-0 hover:drop-shadow-[0_0_30px_#ef4149]
          
          /* Left face of the cube */
          before:content-[''] before:absolute before:w-[50px] before:h-full
          before:bg-white before:left-[-50px] before:origin-right
          before:skew-y-[45deg] before:transition-all before:duration-[1500ms]
          hover:before:bg-[#ef4149] hover:before:duration-0
          
          /* Top face of the cube */
          after:content-[''] after:absolute after:w-full after:h-[50px]
          after:bg-[#f2f2f2] after:top-[-50px] after:left-0 after:origin-bottom
          after:skew-x-[45deg] after:transition-all after:duration-[1500ms]
          hover:after:bg-[#ef4149] hover:after:duration-0
        "
            />
        ))}
    </>
);

// This is the main component that assembles the cubes.
const IsometricCubes = () => {
    // Array defining the position and z-index for each of the three large cubes.
    const cubes = [
        { z: 20, t: 'translate(0px, 0px)' },
        { z: 10, t: 'translate(-60px, -60px)' },
        { z: 30, t: 'translate(60px, 60px)' },
    ];

    return (
        // The main container that handles the overall animation and skew.
        <div className="relative -top-20 -skew-y-[20deg] animate-hue-rotate-slow">
            {cubes.map((cube, i) => (
                <div
                    key={i}
                    className="absolute flex" // Using flex instead of multiple divs for columns
                    style={{ zIndex: cube.z, transform: cube.t }}
                >
                    {[-1, 0, 1].map((pos) => (
                        <div
                            key={pos}
                            className="flex flex-col gap-[30px]"
                            style={{ transform: `translateX(${-70 * pos}px)` }}
                        >
                            <Cubelet />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default IsometricCubes;