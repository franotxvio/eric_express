import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Truck,
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  Package,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Globe,
  TrendingUp,
} from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import QuoteForm from "./components/QuoteForm";
import "./App.css";

// Importar imagens
import heroTrucks from "./assets/hero-trucks.jpeg";
import logisticsBanner from "./assets/logistics-banner.jpg";
import fleetManagement from "./assets/fleet-management.jpg";

// Componente Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-xl shadow-lg">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              Eric Express
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/servicos"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/sobre"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Sobre Nós
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contato"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/orcamento"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Solicitar Orçamento
            </Link>
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Eric%20Express."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.04 2C6.52 2 2 6.52 2 12.04c0 1.91.5 3.77 1.45 5.4L2 22l4.7-1.42c1.57.86 3.33 1.32 5.14 1.32h.01C17.56 22 22 17.52 22 12.04 22 6.52 17.52 2 12.04 2zm0 18.62c-1.58 0-3.12-.43-4.45-1.24l-.32-.2-2.79.84.84-2.71-.21-.35a8.41 8.41 0 01-1.31-4.53c0-4.67 3.8-8.47 8.48-8.47 2.27 0 4.4.89 6 2.48a8.433 8.433 0 012.49 6.02c0 4.67-3.8 8.46-8.48 8.46zm4.65-6.37c-.26-.13-1.52-.75-1.75-.83-.23-.08-.39-.13-.55.13-.17.26-.63.82-.77.98-.14.17-.28.19-.54.07-.26-.13-1.12-.41-2.14-1.32-.79-.7-1.33-1.56-1.49-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.3.4-.45.14-.15.18-.26.27-.43.09-.17.04-.32-.02-.45-.06-.13-.55-1.32-.76-1.8-.2-.48-.4-.42-.55-.43-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.29s-.84.82-.84 2c0 1.18.86 2.32.98 2.48.13.17 1.7 2.6 4.13 3.65.58.25 1.04.4 1.39.51.59.19 1.13.16 1.56.1.48-.07 1.52-.62 1.73-1.21.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" />
              </svg>
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t pt-6 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Início
            </Link>
            <Link
              to="/servicos"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Serviços
            </Link>
            <Link
              to="/sobre"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Sobre Nós
            </Link>
            <Link
              to="/contato"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Contato
            </Link>
            <Link
              to="/orcamento"
              className="block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full text-center font-semibold mt-4"
            >
              Solicitar Orçamento
            </Link>
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Eric%20Express."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full text-center font-semibold"
            >
              WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <span className="text-xl font-bold">Eric Express</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Soluções completas em logística e transporte para todo o Brasil
              com tecnologia e eficiência.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Globe className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <Phone className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">
              Serviços
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">
                Cargas Fracionadas
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Cargas Completas
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Logística Reversa
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Armazenagem
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">
              Contato
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>contato@ericexpress.com.br</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Diadema, SP</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">
              Horário de Atendimento
            </h3>
            <div className="text-gray-300 space-y-2">
              <p className="flex justify-between">
                <span>Segunda a Sexta:</span>
                <span className="text-white">8h às 18h</span>
              </p>
              <p className="flex justify-between">
                <span>Sábado:</span>
                <span className="text-white">8h às 12h</span>
              </p>
              <p className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-red-500">Fechado</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Eric Express. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

// Página Inicial
const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroTrucks})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-600/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-white">
            <div className="mb-6">
              <Badge className="bg-blue-500/20 text-white-300 border-blue-500 px-4 py-2 text-sm font-medium">
                ✨ Líder em Logística Inteligente
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Transporte
              <span className="block bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Seguro & Eficiente
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl">
              Conectamos seu negócio a todo o Brasil com soluções logísticas
              inteligentes, tecnologia avançada e o melhor atendimento do
              mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/orcamento">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/servicos">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg backdrop-blur-sm bg-white/10 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Nossos Serviços
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white-400">5+</div>
                <div className="text-sm opacity-80">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white-400">100+</div>
                <div className="text-sm opacity-80">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white-400">24/7</div>
                <div className="text-sm opacity-80">Suporte Disponível</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white-400">99%</div>
                <div className="text-sm opacity-80">Taxa de Entrega</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4 border-blue-500">
              🏆 Nossos Diferenciais
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Por que escolher a
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Eric Express?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos diferenciais fazem a diferença no seu negócio e garantem o
              sucesso das suas operações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Segurança Total
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Seguro total da carga, rastreamento em tempo real e equipe
                  especializada para máxima proteção.
                </p>
                <div className="mt-4 flex justify-center">
                  <Badge className="bg-blue-100 text-blue-800">
                    99.9% Seguro
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Velocidade & Eficiência
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Cumprimos prazos rigorosamente com planejamento logístico
                  avançado e rotas otimizadas.
                </p>
                <div className="mt-4 flex justify-center">
                  <Badge className="bg-blue-100 text-blue-800">
                    Entrega Rápida
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-green-50/30">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Qualidade Certificada
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Certificações ISO e anos de experiência no mercado de
                  logística com excelência comprovada.
                </p>
                <div className="mt-4 flex justify-center">
                  <Badge className="bg-blue-100 text-blue-800">
                    ISO Certificado
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="border-blue-500 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4">
              🚛 Nossos Serviços
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Soluções Completas em
              <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Logística
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços para atender todas as
              suas necessidades logísticas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50/50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Cargas Fracionadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ideal para pequenos volumes com economia e eficiência máxima.
                </p>
                <div className="mt-3">
                  <Badge className="bg-blue-100 text-blue-800 text-xs">
                    Econômico
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50/50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Cargas Completas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Caminhão exclusivo para grandes volumes e cargas especiais.
                </p>
                <div className="mt-3">
                  <Badge className="bg-blue-100 text-blue-800 text-xs">
                    Exclusivo
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 bg-gradient-to-br from-white to-green-50/50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Logística Reversa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Gestão completa do retorno de produtos e materiais.
                </p>
                <div className="mt-3">
                  <Badge className="bg-blue-100 text-blue-800 text-xs">
                    Sustentável
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 bg-gradient-to-br from-white to-purple-50/50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold">Armazenagem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Centros de distribuição estratégicos e seguros.
                </p>
                <div className="mt-3">
                  <Badge className="bg-blue-100 text-blue-800 text-xs">
                    Seguro
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/servicos">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${logisticsBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <Badge className="bg-blue-500/20 text-blue-300 border-white-400 px-4 py-2 text-sm font-medium mb-6">
            🚀 Transforme Sua Logística
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Pronto para otimizar
            <span className="block bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              sua logística?
            </span>
          </h2>

          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Solicite um orçamento personalizado e descubra como podemos ajudar
            seu negócio a crescer com soluções inteligentes e eficientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/orcamento">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Solicitar Orçamento Gratuito
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>

            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Eric%20Express."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg backdrop-blur-sm bg-white/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Página de Serviços (mantida similar mas com melhorias visuais)
const ServicesPage = () => {
  const services = [
    {
      title: "Cargas Fracionadas",
      description:
        "Ideal para pequenos e médios volumes, compartilhando o espaço do caminhão com outras cargas para máxima economia.",
      features: [
        "Economia de custos",
        "Flexibilidade de volumes",
        "Entrega programada",
        "Rastreamento online",
      ],
      icon: Package,
      color: "blue",
    },
    {
      title: "Cargas Completas",
      description:
        "Caminhão exclusivo para sua carga, ideal para grandes volumes ou produtos especiais que requerem cuidado extra.",
      features: [
        "Caminhão dedicado",
        "Maior segurança",
        "Prazos reduzidos",
        "Cargas especiais",
      ],
      icon: Truck,
      color: "blue",
    },
    {
      title: "Logística Reversa",
      description:
        "Gestão completa do retorno de produtos, embalagens e materiais recicláveis com responsabilidade ambiental.",
      features: [
        "Coleta programada",
        "Gestão sustentável",
        "Relatórios detalhados",
        "Conformidade legal",
      ],
      icon: TrendingUp,
      color: "blue",
    },
    {
      title: "Armazenagem",
      description:
        "Centros de distribuição estratégicos com tecnologia avançada de gestão e controle de estoque.",
      features: [
        "Localização estratégica",
        "Controle de estoque",
        "Picking e packing",
        "Distribuição integrada",
      ],
      icon: Users,
      color: "blue",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        card: "from-white to-blue-50/50",
        badge: "bg-blue-100 text-blue-800",
      },
      blue: {
        bg: "from-blue-500 to-blue-600",
        card: "from-white to-blue-50/50",
        badge: "bg-blue-100 text-blue-800",
      },
      green: {
        bg: "from-green-500 to-green-600",
        card: "from-white to-green-50/50",
        badge: "bg-green-100 text-green-800",
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        card: "from-white to-purple-50/50",
        badge: "bg-purple-100 text-purple-800",
      },
    };
    return colors[color];
  };

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="border-blue-500 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4">
            🚛 Nossos Serviços
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            Soluções Completas em
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Logística
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Oferecemos soluções completas em logística e transporte, adaptadas
            às necessidades específicas do seu negócio com tecnologia de ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClasses = getColorClasses(service.color);

            return (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br ${colorClasses.card}`}
              >
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`bg-gradient-to-br ${colorClasses.bg} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </CardTitle>
                      <Badge className={`${colorClasses.bg} mt-2`}>
                        Serviço Premium
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/orcamento">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Solicitar Orçamento Personalizado
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Página Sobre Nós (mantida similar mas com melhorias visuais)
const AboutPage = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="border-blue-500 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4">
            🏢 Nossa Empresa
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            Sobre a
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Eric Express
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Mais de 5 anos conectando São Paulo com soluções logísticas
            inovadoras, confiáveis e sustentáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Nossa História
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                A Eric Express, nome fantasia da empresa E B da Silva
                Transporte, foi fundada em 30 de junho de 2020 com o objetivo de
                oferecer soluções logísticas de qualidade, seguras e
                personalizadas para todo o Brasil.
              </p>
              <p>
                Mesmo sendo uma empresa jovem, temos conquistado rapidamente
                nosso espaço no setor graças ao comprometimento com o cliente, à
                eficiência operacional e à visão empreendedora que guia cada uma
                de nossas entregas.
              </p>
              <p>
                Nossa trajetória é marcada por investimentos constantes em
                tecnologia, capacitação da equipe e expansão da frota, sempre
                mantendo o foco na qualidade do serviço e satisfação do cliente.
              </p>
            </div>

            <div className="flex space-x-4 pt-4">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                Simples Nacional
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                Microempresa
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                Certificada
              </Badge>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-3"></div>
            <img
              src={fleetManagement}
              alt="Frota da Eric Express"
              className="relative rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30">
            <CardHeader className="pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-4xl font-bold text-blue-600 mb-2">
                5+
              </CardTitle>
              <CardDescription className="text-lg font-medium">
                Anos de Experiência
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30">
            <CardHeader className="pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-4xl font-bold text-blue-600 mb-2">
                100+
              </CardTitle>
              <CardDescription className="text-lg font-medium">
                Clientes Atendidos
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-green-50/30">
            <CardHeader className="pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-4xl font-bold text-blue-600 mb-2">
                4
              </CardTitle>
              <CardDescription className="text-lg font-medium">
                Veículos na Frota
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-gray-100 to-white rounded-3xl p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Oferecer soluções logísticas com foco em eficiência, segurança e
                atendimento personalizado, conectando negócios em toda São
                Paulo.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como uma empresa de referência no transporte
                rodoviário de cargas, valorizando a qualidade do serviço e a
                satisfação dos clientes.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Compromisso, transparência, sustentabilidade e foco no cliente
                em todas as nossas operações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Página de Contato (mantida similar mas com melhorias visuais)
const ContactPage = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="border-blue-500 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4">
            📞 Fale Conosco
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            Entre em
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Contato
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Estamos prontos para atender suas necessidades logísticas. Nossa
            equipe especializada está à disposição para ajudar você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Informações de Contato
            </h2>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-white to-blue-50/30">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Telefone
                    </h3>
                    <p className="text-gray-600 text-lg">(11) 9999-9999</p>
                    <p className="text-gray-600 text-lg">(11) 8888-8888</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-white to-blue-50/30">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      E-mail
                    </h3>
                    <p className="text-gray-600 text-lg">
                      contato@ericexpress.com.br
                    </p>
                    <p className="text-gray-600 text-lg">
                      orcamento@ericexpress.com.br
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-white to-green-50/30">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Endereço
                    </h3>
                      Conceição - Diadema, SP
                      <br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-white to-purple-50/30">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Horário de Atendimento
                    </h3>
                    <div className="space-y-2 text-lg">
                      <p className="flex justify-between">
                        <span className="text-gray-600">Segunda a Sexta:</span>
                        <span className="text-gray-900 font-medium">
                          8h às 18h
                        </span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-600">Sábado:</span>
                        <span className="text-gray-900 font-medium">
                          8h às 12h
                        </span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-600">Domingo:</span>
                        <span className="text-red-500 font-medium">
                          Fechado
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Envie uma Mensagem
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Preencha o formulário abaixo e entraremos em contato em breve.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700">
                    Assunto
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700">
                    Mensagem
                  </label>
                  <textarea
                    rows="5"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg resize-none"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Enviar Mensagem
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Página de Orçamento (mantida igual)
const QuotePage = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="border-blue-500 bg-blue-100 text-white-800 px-4 py-2 text-sm font-medium mb-4">
            💰 Orçamento Gratuito
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            Solicitar
            <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Orçamento
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Preencha os dados abaixo e receba um orçamento personalizado em até
            24 horas. Nossa equipe analisará suas necessidades e oferecerá a
            melhor solução.
          </p>
        </div>

        <QuoteForm />
      </div>
    </div>
  );
};

// WhatsApp (mantida igual)
const WhatsAppPage = () => {
  return (
    <div className="py-24 text-center bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium mb-4">
          💬 Atendimento Direto
        </Badge>
        <h1 className="text-5xl font-bold mb-8 text-gray-900">
          Atendimento via
          <span className="block bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
            WhatsApp
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Clique no botão abaixo para falar diretamente com nossa equipe pelo
          WhatsApp. Atendimento rápido e personalizado!
        </p>
        <a
          href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Eric%20Express."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="mr-3"
          >
            <path d="M12.04 2C6.52 2 2 6.52 2 12.04c0 1.91.5 3.77 1.45 5.4L2 22l4.7-1.42c1.57.86 3.33 1.32 5.14 1.32h.01C17.56 22 22 17.52 22 12.04 22 6.52 17.52 2 12.04 2zm0 18.62c-1.58 0-3.12-.43-4.45-1.24l-.32-.2-2.79.84.84-2.71-.21-.35a8.41 8.41 0 01-1.31-4.53c0-4.67 3.8-8.47 8.48-8.47 2.27 0 4.4.89 6 2.48a8.433 8.433 0 012.49 6.02c0 4.67-3.8 8.46-8.48 8.46zm4.65-6.37c-.26-.13-1.52-.75-1.75-.83-.23-.08-.39-.13-.55.13-.17.26-.63.82-.77.98-.14.17-.28.19-.54.07-.26-.13-1.12-.41-2.14-1.32-.79-.7-1.33-1.56-1.49-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.3.4-.45.14-.15.18-.26.27-.43.09-.17.04-.32-.02-.45-.06-.13-.55-1.32-.76-1.8-.2-.48-.4-.42-.55-.43-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.29s-.84.82-.84 2c0 1.18.86 2.32.98 2.48.13.17 1.7 2.6 4.13 3.65.58.25 1.04.4 1.39.51.59.19 1.13.16 1.56.1.48-.07 1.52-.62 1.73-1.21.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" />
          </svg>
          Iniciar conversa no WhatsApp
        </a>
      </div>
    </div>
  );
};

// Componente Principal
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/orcamento" element={<QuotePage />} />
            <Route path="/whatsapp" element={<WhatsAppPage />} />
          </Routes>

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Eric%20Express."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 z-50 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2C6.52 2 2 6.52 2 12.04c0 1.91.5 3.77 1.45 5.4L2 22l4.7-1.42c1.57.86 3.33 1.32 5.14 1.32h.01C17.56 22 22 17.52 22 12.04 22 6.52 17.52 2 12.04 2zm0 18.62c-1.58 0-3.12-.43-4.45-1.24l-.32-.2-2.79.84.84-2.71-.21-.35a8.41 8.41 0 01-1.31-4.53c0-4.67 3.8-8.47 8.48-8.47 2.27 0 4.4.89 6 2.48a8.433 8.433 0 012.49 6.02c0 4.67-3.8 8.46-8.48 8.46zm4.65-6.37c-.26-.13-1.52-.75-1.75-.83-.23-.08-.39-.13-.55.13-.17.26-.63.82-.77.98-.14.17-.28.19-.54.07-.26-.13-1.12-.41-2.14-1.32-.79-.7-1.33-1.56-1.49-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.3.4-.45.14-.15.18-.26.27-.43.09-.17.04-.32-.02-.45-.06-.13-.55-1.32-.76-1.8-.2-.48-.4-.42-.55-.43-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.29s-.84.82-.84 2c0 1.18.86 2.32.98 2.48.13.17 1.7 2.6 4.13 3.65.58.25 1.04.4 1.39.51.59.19 1.13.16 1.56.1.48-.07 1.52-.62 1.73-1.21.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" />
            </svg>
            <span className="hidden sm:inline font-semibold group-hover:text-green-100 transition-colors">
              Fale Conosco
            </span>
          </a>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
