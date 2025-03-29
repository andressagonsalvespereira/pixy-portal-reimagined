
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Dados de exemplo para transações
const transacoes = [
  {
    id: '1',
    data: '15/06/2023',
    valor: '259,90',
    descricao: 'Pagamento serviço',
    status: 'confirmado'
  },
  {
    id: '2',
    data: '10/06/2023',
    valor: '45,00',
    descricao: 'Produto X',
    status: 'confirmado'
  },
  {
    id: '3',
    data: '07/06/2023',
    valor: '127,50',
    descricao: 'Mensalidade',
    status: 'confirmado'
  },
  {
    id: '4',
    data: '01/06/2023',
    valor: '89,90',
    descricao: 'Assinatura',
    status: 'confirmado'
  },
  {
    id: '5',
    data: '25/05/2023',
    valor: '350,00',
    descricao: 'Freelance',
    status: 'confirmado'
  }
];

// QR Codes gerados de exemplo
const qrCodes = [
  {
    id: '1',
    data: '16/06/2023',
    valor: '199,90',
    descricao: 'Consultoria',
    status: 'pendente'
  },
  {
    id: '2',
    data: '14/06/2023',
    valor: '75,00',
    descricao: 'Produto Y',
    status: 'pendente'
  },
  {
    id: '3',
    data: '12/06/2023',
    valor: '120,00',
    descricao: 'Serviço Z',
    status: 'expirado'
  }
];

const Historico: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Histórico</h1>
            <p className="text-gray-500 mb-8">Gerencie e visualize suas transações e QR Codes gerados.</p>
            
            <Tabs defaultValue="transacoes" className="mb-8">
              <TabsList className="grid w-full grid-cols-2 max-w-md">
                <TabsTrigger value="transacoes">Transações Recebidas</TabsTrigger>
                <TabsTrigger value="qrcodes">QR Codes Gerados</TabsTrigger>
              </TabsList>
              
              <TabsContent value="transacoes">
                <Card>
                  <CardHeader>
                    <CardTitle>Pagamentos Recebidos</CardTitle>
                    <CardDescription>
                      Histórico de pagamentos recebidos via Pix.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {transacoes.length > 0 ? (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Data</TableHead>
                              <TableHead>Descrição</TableHead>
                              <TableHead>Valor (R$)</TableHead>
                              <TableHead>Status</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {transacoes.map((transacao) => (
                              <TableRow key={transacao.id}>
                                <TableCell>{transacao.data}</TableCell>
                                <TableCell>{transacao.descricao}</TableCell>
                                <TableCell>R$ {transacao.valor}</TableCell>
                                <TableCell>
                                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    Confirmado
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">Nenhuma transação encontrada.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="qrcodes">
                <Card>
                  <CardHeader>
                    <CardTitle>QR Codes Gerados</CardTitle>
                    <CardDescription>
                      QR Codes que você criou para recebimento.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {qrCodes.length > 0 ? (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Data</TableHead>
                              <TableHead>Descrição</TableHead>
                              <TableHead>Valor (R$)</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Ações</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {qrCodes.map((qrCode) => (
                              <TableRow key={qrCode.id}>
                                <TableCell>{qrCode.data}</TableCell>
                                <TableCell>{qrCode.descricao}</TableCell>
                                <TableCell>R$ {qrCode.valor}</TableCell>
                                <TableCell>
                                  <Badge 
                                    variant="outline" 
                                    className={
                                      qrCode.status === 'pendente' 
                                        ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                                        : "bg-gray-50 text-gray-700 border-gray-200"
                                    }
                                  >
                                    {qrCode.status === 'pendente' ? 'Pendente' : 'Expirado'}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <a href="#" className="text-pix-secondary hover:underline text-sm">
                                    Visualizar
                                  </a>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">Nenhum QR Code gerado.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <Card>
              <CardHeader>
                <CardTitle>Resumo</CardTitle>
                <CardDescription>
                  Visão geral das suas movimentações.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Total Recebido (30 dias)</p>
                    <p className="text-2xl font-bold text-green-600">R$ 872,30</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">QR Codes Gerados</p>
                    <p className="text-2xl font-bold text-pix-secondary">8</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Pagamentos Pendentes</p>
                    <p className="text-2xl font-bold text-yellow-600">2</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Historico;
