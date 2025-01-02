import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções em TI União do Sul
          </h1>
          <p className="text-xl mb-8">
            Serviços profissionais de informática para empresas e residências
          </p>
          <div className="flex justify-center space-x-12">
            <div className="flex flex-col items-center">
              <Shield className="mb-2" size={24} />
              <span>Segurança</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="mb-2" size={24} />
              <span>24/7 Suporte</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="mb-2" size={24} />
              <span>Qualidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}