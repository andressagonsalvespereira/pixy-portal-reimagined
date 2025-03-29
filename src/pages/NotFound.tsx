
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-6 max-w-md mx-auto">
            <div className="w-24 h-24 rounded-full bg-gradient-pix/20 mx-auto flex items-center justify-center">
              <span className="text-5xl font-bold text-pix-primary">404</span>
            </div>
            <h1 className="text-3xl font-bold">Página não encontrada</h1>
            <p className="text-gray-500">
              A página que você está procurando não existe ou foi movida.
            </p>
            <div className="pt-4">
              <Button asChild className="bg-gradient-pix hover:opacity-90">
                <Link to="/">Voltar para o início</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
