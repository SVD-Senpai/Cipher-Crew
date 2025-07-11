
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Globe, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-amber-50 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight animate-fade-in">
              Choti dukan, <br />
              Badi pehchaan
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed animate-fade-in">
              Experience the convenience of online ordering with the trust and service of your neighborhood shops
            </p>
            
            <Button 
              size="lg" 
              className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 text-lg animate-fade-in hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Button>
            
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="bg-amber-100 p-2 rounded-full">
                  <Globe className="w-5 h-5 text-amber-800" />
                </div>
                <span className="text-gray-700">Now onboarding shops from your neighborhood</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-amber-100 p-2 rounded-full">
                  <Users className="w-5 h-5 text-amber-800" />
                </div>
                <span className="text-gray-700">There are 50+ local shops around you</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-amber-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-24 h-3 bg-amber-200 rounded-full"></div>
                      <CheckCircle className="w-5 h-5 text-amber-700" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-32 h-3 bg-amber-200 rounded-full"></div>
                      <CheckCircle className="w-5 h-5 text-amber-700" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-28 h-3 bg-amber-200 rounded-full"></div>
                      <CheckCircle className="w-5 h-5 text-amber-700" />
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">🛒</span>
                  </div>
                  <p className="text-gray-600 font-medium">Secure & Trusted Shopping</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-200 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-amber-100 rounded-full animate-pulse delay-75"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
