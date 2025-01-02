import { Monitor, Wifi, HardDrive, Shield, Laptop, Smartphone } from 'lucide-react';

export const cities = ['Cuiabá', 'Várzea Grande', 'Rondonópolis'] as const;
export type City = typeof cities[number];

export const services = [
  {
    icon: Monitor,
    name: 'Manutenção de Computadores',
    prices: {
      'Cuiabá': 120,
      'Várzea Grande': 120,
      'Rondonópolis': 150
    },
    description: 'Reparo e manutenção preventiva',
    whatsappNumber: '5565999999999'
  },
  {
    icon: Wifi,
    name: 'Configuração de Rede',
    prices: {
      'Cuiabá': 150,
      'Várzea Grande': 150,
      'Rondonópolis': 180
    },
    description: 'Instalação e configuração de redes',
    whatsappNumber: '5565999999999'
  },
  {
    icon: HardDrive,
    name: 'Backup de Dados',
    prices: {
      'Cuiabá': 200,
      'Várzea Grande': 200,
      'Rondonópolis': 230
    },
    description: 'Backup e recuperação de dados',
    whatsappNumber: '5565999999999'
  },
  {
    icon: Shield,
    name: 'Segurança Digital',
    prices: {
      'Cuiabá': 180,
      'Várzea Grande': 180,
      'Rondonópolis': 210
    },
    description: 'Proteção contra vírus e ameaças',
    whatsappNumber: '5565999999999'
  },
  {
    icon: Laptop,
    name: 'Formatação',
    prices: {
      'Cuiabá': 130,
      'Várzea Grande': 130,
      'Rondonópolis': 160
    },
    description: 'Formatação e instalação do sistema',
    whatsappNumber: '5565999999999'
  },
  {
    icon: Smartphone,
    name: 'Suporte Mobile',
    prices: {
      'Cuiabá': 100,
      'Várzea Grande': 100,
      'Rondonópolis': 130
    },
    description: 'Configuração de dispositivos móveis',
    whatsappNumber: '5565999999999'
  }
] as const;