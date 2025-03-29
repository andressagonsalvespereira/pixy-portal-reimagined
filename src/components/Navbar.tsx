
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-pix flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-xl">Pix Portal</span>
          </Link>
        </div>
        
        {/* Mobile menu */}
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-6">
                <Link to="/" className="text-lg font-medium">Início</Link>
                <Link to="/gerar" className="text-lg font-medium">Gerar Pix</Link>
                <Link to="/historico" className="text-lg font-medium">Histórico</Link>
                <Link to="/ajuda" className="text-lg font-medium">Ajuda</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-pix-primary">
            Início
          </Link>
          <Link to="/gerar" className="text-sm font-medium transition-colors hover:text-pix-primary">
            Gerar Pix
          </Link>
          <Link to="/historico" className="text-sm font-medium transition-colors hover:text-pix-primary">
            Histórico
          </Link>
          <Link to="/ajuda" className="text-sm font-medium transition-colors hover:text-pix-primary">
            Ajuda
          </Link>
          <Button className="bg-gradient-pix hover:opacity-90">
            Entrar
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
