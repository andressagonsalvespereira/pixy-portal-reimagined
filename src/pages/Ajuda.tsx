
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleHelp, FileQuestion, MessageCircleQuestion, Phone } from 'lucide-react';

const Ajuda: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Central de Ajuda</h1>
            <p className="text-gray-500 mb-8">Encontre respostas para suas dúvidas sobre o Pix Portal.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="flex flex-col items-center text-center p-6">
                <CardContent className="flex flex-col items-center pt-6">
                  <FileQuestion className="h-12 w-12 text-pix-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Tutoriais</h3>
                  <p className="text-gray-500 text-sm">
                    Guias passo a passo para utilizar todas as funcionalidades.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="flex flex-col items-center text-center p-6">
                <CardContent className="flex flex-col items-center pt-6">
                  <MessageCircleQuestion className="h-12 w-12 text-pix-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">FAQ</h3>
                  <p className="text-gray-500 text-sm">
                    Respostas para perguntas frequentes.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="flex flex-col items-center text-center p-6">
                <CardContent className="flex flex-col items-center pt-6">
                  <Phone className="h-12 w-12 text-pix-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Suporte</h3>
                  <p className="text-gray-500 text-sm">
                    Entre em contato com nossa equipe de atendimento.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mb-12" id="faq">
              <CardHeader>
                <CardTitle>Perguntas Frequentes</CardTitle>
                <CardDescription>
                  Tire suas dúvidas sobre o funcionamento do Pix Portal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>O que é o Pix Portal?</AccordionTrigger>
                    <AccordionContent>
                      O Pix Portal é uma plataforma que permite criar QR Codes para recebimento de pagamentos via Pix de forma rápida e segura. Nossa ferramenta é ideal para pessoas físicas e empresas que desejam simplificar o processo de recebimento.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Como funciona o QR Code do Pix?</AccordionTrigger>
                    <AccordionContent>
                      O QR Code do Pix contém todas as informações necessárias para realizar um pagamento: valor, chave Pix do recebedor, descrição e identificador da transação. Quando alguém escaneia o QR Code com o aplicativo do banco, essas informações são lidas automaticamente, tornando o pagamento mais rápido e seguro.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>É necessário ter uma chave Pix para usar o Pix Portal?</AccordionTrigger>
                    <AccordionContent>
                      Sim, você precisará ter uma chave Pix cadastrada no seu banco para receber os pagamentos. A chave pode ser CPF/CNPJ, e-mail, número de telefone ou uma chave aleatória. Ao gerar um QR Code no Pix Portal, você usará essa chave para indicar onde o dinheiro deverá ser depositado.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>O Pix Portal cobra taxas?</AccordionTrigger>
                    <AccordionContent>
                      O Pix Portal oferece um plano gratuito com funcionalidades básicas e planos pagos para recursos avançados. Em todos os casos, não há taxas sobre o valor transacionado via Pix, pois trata-se de um serviço do Banco Central. Nossa cobrança é apenas pela utilização da plataforma e suas funcionalidades.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Como receber notificações de pagamento?</AccordionTrigger>
                    <AccordionContent>
                      Para receber notificações automáticas quando um pagamento via Pix for recebido, você pode cadastrar seu e-mail ou número de telefone nas configurações da sua conta. Nos planos pagos, também oferecemos integrações via API para notificações em tempo real em outros sistemas.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger>O QR Code do Pix tem prazo de validade?</AccordionTrigger>
                    <AccordionContent>
                      Sim, por padrão, os QR Codes estáticos (valor definido) têm uma validade de 90 dias. Os QR Codes dinâmicos podem ter sua validade configurada no momento da criação, conforme sua necessidade. Após o prazo de validade, o QR Code não poderá mais ser utilizado para pagamento.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Como Funciona</CardTitle>
                <CardDescription>
                  Entenda o fluxo de pagamento via Pix Portal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-pix text-white">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Cadastro da Chave Pix</h3>
                      <p className="text-gray-500 text-sm">
                        Primeiro, você precisa ter uma chave Pix registrada em seu banco. Esta chave pode ser seu CPF, e-mail, celular ou uma chave aleatória.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-pix text-white">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Geração do QR Code</h3>
                      <p className="text-gray-500 text-sm">
                        No Pix Portal, você insere o valor a receber, sua chave Pix, uma descrição opcional e gera um QR Code específico para essa transação.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-pix text-white">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Compartilhamento</h3>
                      <p className="text-gray-500 text-sm">
                        Você compartilha o QR Code com o pagador através de qualquer meio: impresso, por e-mail, WhatsApp, redes sociais ou exibindo na tela para ser escaneado.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-pix text-white">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Pagamento</h3>
                      <p className="text-gray-500 text-sm">
                        O pagador escaneia o QR Code com o aplicativo do seu banco e confirma o pagamento. O valor é transferido instantaneamente para a conta vinculada à sua chave Pix.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-pix text-white">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Confirmação e Histórico</h3>
                      <p className="text-gray-500 text-sm">
                        Você recebe uma notificação de pagamento e pode visualizar a transação no histórico do Pix Portal, facilitando seu controle financeiro.
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ajuda;
