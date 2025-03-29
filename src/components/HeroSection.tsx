
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="py-12 md:py-24 bg-pix-light">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-pix-primary/10 px-3 py-1 text-sm text-pix-primary">
              Novo
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Pagamentos instantâneos com Pix Portal
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Gere QR Codes para recebimento via Pix de forma rápida, segura e sem complicações. 
              Ideal para negócios e pessoas físicas.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/gerar">
                <Button className="bg-gradient-pix hover:opacity-90">Gerar Pix</Button>
              </Link>
              <Link to="/ajuda">
                <Button variant="outline">Saiba mais</Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] relative">
            <div className="aspect-video overflow-hidden rounded-xl bg-white p-6 shadow-lg">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-24 h-24 rounded-lg bg-gradient-pix flex items-center justify-center animate-pulse-slow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16.5 9.4 7.55 4.24"></path><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="w-24 h-24 grid grid-cols-4 grid-rows-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="bg-black rounded-sm"></div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-medium">Pix QR Code</p>
                  <p className="text-sm text-gray-500">Escaneie para pagamento</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-gradient-pix opacity-20"></div>
            <div className="hidden md:block absolute -top-10 -left-10 w-16 h-16 rounded-full bg-gradient-pix opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
