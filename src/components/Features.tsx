
import React from 'react';
import { Shield, Truck, Heart, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Your transactions are protected with bank-level security"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Get your groceries delivered from nearby stores quickly"
    },
    {
      icon: Heart,
      title: "Support Local",
      description: "Help your neighborhood businesses thrive and grow"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Shop anytime with round-the-clock customer support"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Kirana Kart?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We bridge the gap between traditional shopping and modern convenience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
