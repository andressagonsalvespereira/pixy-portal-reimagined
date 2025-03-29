
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-pix text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Pronto para simplificar seus recebimentos?</h2>
            <p className="mb-6 opacity-90">
              Comece a usar o Pix Portal hoje mesmo e descubra como é fácil gerar e gerenciar QR Codes para pagamentos via Pix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/gerar">
                <Button className="bg-white text-pix-primary hover:bg-gray-100">
                  Comece Agora
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="w-64 h-64 bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <div className="w-20 h-20 rounded-lg bg-white flex items-center justify-center">
                    <div className="text-pix-primary font-bold text-xl">
                      PIX
                    </div>
                  </div>
                  <p className="text-center font-medium">
                    Escaneie e pague instantaneamente
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
