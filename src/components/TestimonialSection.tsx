
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Silva",
    role: "Pequena Empresária",
    content: "O Pix Portal revolucionou a forma como recebo pagamentos na minha loja. É rápido, prático e os clientes adoram a facilidade.",
    rating: 5
  },
  {
    name: "João Oliveira",
    role: "Profissional Autônomo",
    content: "Uso para receber dos meus clientes e facilita muito o controle financeiro. A interface é intuitiva e o suporte é excelente.",
    rating: 5
  },
  {
    name: "Ana Souza",
    role: "Influenciadora Digital",
    content: "Perfeito para receber doações e pagamentos dos meus seguidores. Simplesmente gero o QR Code e compartilho nas redes sociais.",
    rating: 4
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">O que dizem nossos usuários</h2>
          <p className="text-gray-500">
            Milhares de pessoas e empresas já utilizam o Pix Portal para facilitar seus recebimentos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-pix flex items-center justify-center text-white font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
