import React from 'react';
import { Monitor, Server, Smartphone, Mail, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header>
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Mail size={16} />
            <span>gunnar.oliveiraipt@gmail.com</span>
            <Phone size={16} />
            <span>(66) 99263-4123</span>
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Monitor className="text-blue-600" size={32} />
            <span className="text-2xl font-bold text-blue-600">SN Informática</span>
          </div>
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-blue-600">Início</a>
            <a href="#services" className="hover:text-blue-600">Serviços</a>
            <a href="#pricing" className="hover:text-blue-600">Preços</a>
            <a href="#contact" className="hover:text-blue-600">Contato</a>
          </div>
        </div>
      </nav>
    </header>
  );
}