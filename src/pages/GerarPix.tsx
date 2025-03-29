
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const GerarPix: React.FC = () => {
  const [formData, setFormData] = useState({
    valor: '',
    tipoChave: 'cpf',
    chave: '',
    descricao: '',
    nome: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, tipoChave: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.valor || !formData.chave || !formData.nome) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    // Simular geração do QR Code
    setTimeout(() => {
      setLoading(false);
      setQrCodeGenerated(true);
      toast({
        title: "QR Code gerado com sucesso!",
        description: "Compartilhe o QR Code para receber o pagamento.",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Gerar QR Code Pix</h1>
            <p className="text-gray-500 mb-8">Preencha os dados abaixo para gerar seu QR Code Pix para recebimento.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Dados do Pagamento</CardTitle>
                    <CardDescription>
                      Insira as informações necessárias para gerar seu QR Code.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="valor">Valor (R$)*</Label>
                        <Input
                          id="valor"
                          name="valor"
                          type="text"
                          placeholder="0,00"
                          value={formData.valor}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="tipoChave">Tipo de Chave*</Label>
                        <Select value={formData.tipoChave} onValueChange={handleSelectChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo de chave" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cpf">CPF</SelectItem>
                            <SelectItem value="celular">Celular</SelectItem>
                            <SelectItem value="email">E-mail</SelectItem>
                            <SelectItem value="aleatoria">Chave Aleatória</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="chave">Chave Pix*</Label>
                        <Input
                          id="chave"
                          name="chave"
                          type="text"
                          placeholder={formData.tipoChave === 'cpf' ? '000.000.000-00' : 
                                      formData.tipoChave === 'celular' ? '(00) 00000-0000' : 
                                      formData.tipoChave === 'email' ? 'email@exemplo.com' : 
                                      'Chave aleatória'}
                          value={formData.chave}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome do Recebedor*</Label>
                        <Input
                          id="nome"
                          name="nome"
                          type="text"
                          placeholder="Seu nome completo"
                          value={formData.nome}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="descricao">Descrição (opcional)</Label>
                        <Textarea
                          id="descricao"
                          name="descricao"
                          placeholder="Pagamento referente a..."
                          value={formData.descricao}
                          onChange={handleChange}
                        />
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleSubmit} 
                      disabled={loading} 
                      className="w-full bg-gradient-pix hover:opacity-90"
                    >
                      {loading ? 'Gerando...' : 'Gerar QR Code'}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div>
                {qrCodeGenerated ? (
                  <Card>
                    <CardHeader>
                      <CardTitle>QR Code Gerado</CardTitle>
                      <CardDescription>
                        Compartilhe este QR Code para receber o pagamento.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                      <div className="w-48 h-48 bg-gray-100 border rounded-lg flex items-center justify-center mb-4">
                        <div className="w-40 h-40 grid grid-cols-5 grid-rows-5 gap-1">
                          {[...Array(25)].map((_, i) => (
                            <div key={i} className="bg-black rounded-sm"></div>
                          ))}
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <p className="font-medium">R$ {formData.valor}</p>
                        <p className="text-sm text-gray-500">{formData.nome}</p>
                      </div>
                      <div className="w-full p-3 bg-gray-100 rounded text-center mb-4">
                        <p className="text-xs text-gray-500">Código Pix Copia e Cola</p>
                        <p className="text-sm font-mono break-all">00020126580014BR.GOV.BCB.PIX0136a6ebb8d2-7c77-4e62-9c5e-4e99ea1fbd98520400005303986540{formData.valor}5802BR5913{formData.nome}6008BRASILIA62070503***63041234</p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-2">
                      <Button className="w-full">Copiar Código Pix</Button>
                      <Button variant="outline" className="w-full">
                        Baixar QR Code
                      </Button>
                    </CardFooter>
                  </Card>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full bg-gray-100 rounded-xl p-8 text-center">
                    <div className="w-24 h-24 rounded-lg bg-gradient-pix opacity-30 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M7 7h.01" />
                        <path d="M7 17h.01" />
                        <path d="M17 7h.01" />
                        <path d="M17 17h.01" />
                        <path d="M7 12h10" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg mb-2">Seu QR Code aparecerá aqui</h3>
                    <p className="text-sm text-gray-500">
                      Preencha o formulário e clique em "Gerar QR Code" para visualizar.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GerarPix;
