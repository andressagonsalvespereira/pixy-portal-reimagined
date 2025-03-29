
import React from 'react';
import { CheckCircle, Clock, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-10 w-10 text-pix-primary" />,
    title: "Instantâneo",
    description: "Receba pagamentos em segundos, 24 horas por dia, 7 dias por semana."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-pix-primary" />,
    title: "Seguro",
    description: "Transações protegidas pelo Banco Central e criptografia avançada."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-pix-primary" />,
    title: "Fácil",
    description: "Gere QR Codes com poucos cliques e compartilhe facilmente."
  },
  {
    icon: <Clock className="h-10 w-10 text-pix-primary" />,
    title: "Histórico",
    description: "Acesse seu histórico completo de transações a qualquer momento."
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Por que escolher o Pix Portal?</h2>
          <p className="text-gray-500">
            Nossa plataforma oferece a maneira mais simples e segura de gerar e gerenciar pagamentos via Pix.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
