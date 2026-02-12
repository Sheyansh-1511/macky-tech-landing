import React from "react";

const industries = [
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600",
  },
  {
    name: "Grocery",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600",
  },
  {
    name: "Restaurant",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600",
  },
  {
    name: "Furniture",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
  },
  {
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600",
  },
];

export default function CurvedIndustries(){
  return (
    <section className="relative py-24 bg-[#f3e9dc] overflow-hidden">

      {/* curved bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-[70%]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Industries We <span className="text-blue-600">Transform</span>
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            We deliver cutting-edge digital solutions across industries.
          </p>
        </div>

        {/* gallery */}
        <div className="flex justify-center gap-6">

          {industries.map((item,i)=>(
            <div
              key={i}
              className="relative w-[170px] h-[330px] rounded-[26px] overflow-hidden shadow-md group"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

              {/* center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {item.name}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
