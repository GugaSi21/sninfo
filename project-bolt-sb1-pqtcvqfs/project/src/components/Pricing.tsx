import React from 'react';
import ServiceCard from './ServiceCard';
import { services, cities } from '../data/services';
import type { City } from '../data/services';

export default function Pricing() {
  const [selectedCity, setSelectedCity] = React.useState<City>(cities[0]);

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Preços dos Serviços</h2>
        
        <div className="flex justify-center mb-12">
          <select 
            className="px-4 py-2 border rounded-md"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value as City)}
          >
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              icon={<service.icon size={24} />}
              name={service.name}
              description={service.description}
              price={service.prices[selectedCity]}
              whatsappNumber={service.whatsappNumber}
            />
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>* Preços por visita técnica</p>
          <p>* Valores podem variar de acordo com a complexidade do serviço</p>
        </div>
      </div>
    </section>
  );
}