
import React from 'react';
import { CircleDashed } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Preencha os dados",
    description: "Insira o valor, descrição e chave Pix para recebimento."
  },
  {
    number: "02",
    title: "Gere o QR Code",
    description: "Nosso sistema irá gerar um QR Code Pix instantaneamente."
  },
  {
    number: "03",
    title: "Compartilhe",
    description: "Envie o QR Code ou copie o código Pix para quem vai pagar."
  },
  {
    number: "04",
    title: "Receba o pagamento",
    description: "O valor será creditado na conta associada à chave Pix."
  }
];

const StepsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Como funciona</h2>
          <p className="text-gray-500">
            Gerar e receber pagamentos via Pix nunca foi tão fácil.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200">
                  <CircleDashed className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-gray-300" />
                </div>
              )}
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-pix flex items-center justify-center text-white font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
