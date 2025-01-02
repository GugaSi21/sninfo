import React from 'react';
import { Monitor, Wifi, HardDrive, Shield, Laptop, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Monitor size={40} />,
    title: 'Manutenção de Computadores',
    description: 'Reparo e manutenção preventiva de desktops e notebooks'
  },
  {
    icon: <Wifi size={40} />,
    title: 'Redes e Wi-Fi',
    description: 'Instalação e configuração de redes empresariais e residenciais'
  },
  {
    icon: <HardDrive size={40} />,
    title: 'Backup e Recuperação',
    description: 'Soluções de backup e recuperação de dados'
  },
  {
    icon: <Shield size={40} />,
    title: 'Segurança Digital',
    description: 'Proteção contra vírus e ameaças digitais'
  },
  {
    icon: <Laptop size={40} />,
    title: 'Suporte Empresarial',
    description: 'Suporte técnico dedicado para empresas'
  },
  {
    icon: <Smartphone size={40} />,
    title: 'Suporte Mobile',
    description: 'Configuração e suporte para dispositivos móveis'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}