import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  price: number;
  whatsappNumber: string;
}

export default function ServiceCard({ icon, name, description, price, whatsappNumber }: ServiceCardProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de mais informações sobre o serviço de ${name}.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="text-blue-600 mr-3">{icon}</div>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center pt-4 border-t">
        <span className="text-2xl font-bold text-blue-600">
          R$ {price}
        </span>
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          <MessageCircle size={20} />
          WhatsApp
        </button>
      </div>
    </div>
  );
}