import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-4" />
                <span>(65) 9999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-4" />
                <span>contato@techmato.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-4" />
                <span>Cuiabá, MT</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mensagem</label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}