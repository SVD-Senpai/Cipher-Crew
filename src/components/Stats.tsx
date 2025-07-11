
import React from 'react';

const Stats = () => {
  const stats = [
    { number: "50+", label: "Local Stores" },
    { number: "1000+", label: "Happy Customers" },
    { number: "24/7", label: "Support" },
    { number: "100%", label: "Secure" }
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-amber-700 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
