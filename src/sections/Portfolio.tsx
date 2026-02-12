import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online shopping experience with AI-powered recommendations.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1000"
    },
    {
      title: "Healthcare App",
      description: "Patient management system with telemedicine capabilities.",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1000"
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with virtual tours.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1000"
    },
    {
      title: "Food Delivery App",
      description: "On-demand food delivery with tracking.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1000"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard for business insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000"
    }
  ];

  return (
    <Section id="portfolio" className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT TEXT */}
          <div className="-ml-24 md:-ml-36">
            <span className="text-sm tracking-widest text-gray-500 uppercase">
              Discover
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Our Recent Work
            </h2>

            <p className="text-base sm:text-lg text-gray-600 max-w-md mb-8">
              {projects[2].description}
            </p>

            <button className="px-6 py-3 border rounded-full text-gray-700 hover:bg-gray-100 transition">
              View Projects
            </button>
          </div>

          {/* RIGHT STACK */}
          <div className="lg:w-1/2 relative h-[400px] sm:h-[500px] lg:h-[560px] flex items-center justify-center pr-32">

            {projects.map((p,i)=>{

              const positions = [
  {x:-360, y:0, scale:0.9, z:1},
  {x:-180, y:0, scale:0.95, z:2},
  {x:0, y:0, scale:1, z:5},
  {x:180, y:0, scale:0.95, z:2},
  {x:360, y:0, scale:0.9, z:1},
];
              const pos = positions[i];

              return (
                <motion.div
                  key={i}
                  className="absolute w-80 h-[500px] overflow-hidden shadow-2xl"
                  style={{
                    x:pos.x,
                    scale:pos.scale,
                    zIndex:pos.z
                  }}
                  whileHover={{
                    scale:1.02,
                    zIndex:50
                  }}
                  transition={{
                    type:"spring",
                    stiffness:180,
                    damping:25
                  }}
                >
                  <img
                    src={p.image}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 flex flex-col justify-end">
                    <div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8 text-white">

                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                        {p.title}
                      </h3>

                      <p className="text-xs sm:text-sm opacity-90 mt-2">
                        {p.description}
                      </p>

                      {pos.z===5 && (
                        <button className="mt-4 bg-white text-black px-6 py-2 rounded-full text-sm">
                          Explore
                        </button>
                      )}

                    </div>
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div> {/* ✅ CLOSED MISSING DIV */}

      </div>
    </Section>
  );
};

export default Portfolio;
