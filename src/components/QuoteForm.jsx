import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Package,
  MapPin,
  Calendar,
  Truck,
  Shield,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  Building,
} from "lucide-react";

const QuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    cpfCnpj: "",
    tipoCliente: "pessoa_fisica",

    tipoCarga: "",
    pesoEstimado: "",
    altura: "",
    largura: "",
    comprimento: "",
    quantidadeVolumes: "",
    valorNotaFiscal: "",

    cepOrigem: "",
    enderecoOrigem: "",
    numeroOrigem: "",
    complementoOrigem: "",
    bairroOrigem: "",
    cidadeOrigem: "",
    estadoOrigem: "",
    dataColeta: "",

    cepDestino: "",
    enderecoDestino: "",
    numeroDestino: "",
    complementoDestino: "",
    bairroDestino: "",
    cidadeDestino: "",
    estadoDestino: "",
    dataEntrega: "",

    observacoes: "",
    servicosAdicionais: [],
    aceitaTermos: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tiposCarga = [
    { value: "seca", label: "Carga Seca" },
    { value: "refrigerada", label: "Carga Refrigerada" },
    { value: "perigosa", label: "Carga Perigosa" },
    { value: "fragil", label: "Carga Frágil" },
    { value: "liquida", label: "Carga Líquida" },
    { value: "outros", label: "Outros" },
  ];

  const servicosDisponiveis = [
    { id: "coleta", label: "Coleta no Local", icon: Truck },
    { id: "entrega", label: "Entrega no Destino", icon: MapPin },
    { id: "armazenagem", label: "Armazenagem Temporária", icon: Package },
    { id: "seguro", label: "Seguro da Carga", icon: Shield },
    { id: "rastreamento", label: "Rastreamento Online", icon: CheckCircle },
    { id: "urgente", label: "Entrega Urgente", icon: AlertCircle },
  ];

  const estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const fetchAddressFromCep = async (cep, type) => {
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (!data.erro) {
          setFormData((prev) => ({
            ...prev,
            [`endereco${type}`]: data.logradouro,
            [`bairro${type}`]: data.bairro,
            [`cidade${type}`]: data.localidade,
            [`estado${type}`]: data.uf,
          }));
        } else {
          setFormData((prev) => ({
            ...prev,
            [`endereco${type}`]: "",
            [`bairro${type}`]: "",
            [`cidade${type}`]: "",
            [`estado${type}`]: "",
          }));
          setErrors((prev) => ({
            ...prev,
            [`cep${type}`]: "CEP não encontrado ou inválido",
          }));
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        setErrors((prev) => ({
          ...prev,
          [`cep${type}`]: "Erro ao buscar CEP",
        }));
      }
    }
  };

  const handleCepChange = (e, type) => {
    const cep = e.target.value.replace(/\D/g, "");
    handleInputChange(`cep${type}`, cep);
    if (cep.length === 8) {
      fetchAddressFromCep(cep, type);
    }
  };

  const handleServiceToggle = (serviceId) => {
    setFormData((prev) => ({
      ...prev,
      servicosAdicionais: prev.servicosAdicionais.includes(serviceId)
        ? prev.servicosAdicionais.filter((id) => id !== serviceId)
        : [...prev.servicosAdicionais, serviceId],
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.nomeCompleto.trim())
        newErrors.nomeCompleto = "Nome é obrigatório";
      if (!formData.email.trim()) newErrors.email = "E-mail é obrigatório";
      if (!formData.telefone.trim())
        newErrors.telefone = "Telefone é obrigatório";
      if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "E-mail inválido";
    }

    if (step === 2) {
      if (!formData.tipoCarga)
        newErrors.tipoCarga = "Tipo de carga é obrigatório";
      if (!formData.pesoEstimado) newErrors.pesoEstimado = "Peso é obrigatório";
      if (!formData.quantidadeVolumes)
        newErrors.quantidadeVolumes = "Quantidade de volumes é obrigatória";
    }

    if (step === 3) {
      if (!formData.cepOrigem.trim())
        newErrors.cepOrigem = "CEP de origem é obrigatório";
      if (!formData.enderecoOrigem.trim())
        newErrors.enderecoOrigem = "Endereço de origem é obrigatório";
      if (!formData.cidadeOrigem.trim())
        newErrors.cidadeOrigem = "Cidade de origem é obrigatória";
      if (!formData.estadoOrigem)
        newErrors.estadoOrigem = "Estado de origem é obrigatório";
    }

    if (step === 4) {
      if (!formData.cepDestino.trim())
        newErrors.cepDestino = "CEP de destino é obrigatório";
      if (!formData.enderecoDestino.trim())
        newErrors.enderecoDestino = "Endereço de destino é obrigatório";
      if (!formData.cidadeDestino.trim())
        newErrors.cidadeDestino = "Cidade de destino é obrigatória";
      if (!formData.estadoDestino)
        newErrors.estadoDestino = "Estado de destino é obrigatório";
    }

    if (step === 5) {
      if (!formData.aceitaTermos)
        newErrors.aceitaTermos = "Você deve aceitar os termos";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(5)) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="text-center py-12">
          <CardContent>
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">
              Orçamento Solicitado com Sucesso!
            </h2>
            <p className="text-gray-600 mb-6">
              Recebemos sua solicitação de orçamento. Nossa equipe entrará em
              contato em até 24 horas.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600">
                <strong>Protocolo:</strong> #
                {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
              <p className="text-sm text-gray-600">
                <strong>E-mail de contato:</strong> {formData.email}
              </p>
            </div>
            <Button onClick={() => window.location.reload()}>
              Solicitar Novo Orçamento
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Informações Pessoais/Empresa
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tipo de Cliente
                  </label>
                  <select
                    value={formData.tipoCliente}
                    onChange={(e) =>
                      handleInputChange("tipoCliente", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="pessoa_fisica">Pessoa Física</option>
                    <option value="pessoa_juridica">Pessoa Jurídica</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {formData.tipoCliente === "pessoa_fisica" ? "CPF" : "CNPJ"}{" "}
                    (Opcional)
                  </label>
                  <input
                    type="text"
                    value={formData.cpfCnpj}
                    onChange={(e) =>
                      handleInputChange("cpfCnpj", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder={
                      formData.tipoCliente === "pessoa_fisica"
                        ? "000.000.000-00"
                        : "00.000.000/0000-00"
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {formData.tipoCliente === "pessoa_fisica"
                      ? "Nome Completo"
                      : "Razão Social"}{" "}
                    *
                  </label>
                  <input
                    type="text"
                    value={formData.nomeCompleto}
                    onChange={(e) =>
                      handleInputChange("nomeCompleto", e.target.value)
                    }
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.nomeCompleto ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Digite o nome completo"
                  />
                  {errors.nomeCompleto && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.nomeCompleto}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) =>
                    handleInputChange("telefone", e.target.value)
                  }
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.telefone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="(11) 99999-9999"
                />
                {errors.telefone && (
                  <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Informações da Carga
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tipo de Carga *
                  </label>
                  <select
                    value={formData.tipoCarga}
                    onChange={(e) =>
                      handleInputChange("tipoCarga", e.target.value)
                    }
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.tipoCarga ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Selecione o tipo de carga</option>
                    {tiposCarga.map((tipo) => (
                      <option key={tipo.value} value={tipo.value}>
                        {tipo.label}
                      </option>
                    ))}
                  </select>
                  {errors.tipoCarga && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.tipoCarga}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Peso Estimado (kg) *
                  </label>
                  <input
                    type="number"
                    value={formData.pesoEstimado}
                    onChange={(e) =>
                      handleInputChange("pesoEstimado", e.target.value)
                    }
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.pesoEstimado ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Ex: 100"
                  />
                  {errors.pesoEstimado && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.pesoEstimado}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Dimensões (cm)
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="number"
                    value={formData.altura}
                    onChange={(e) =>
                      handleInputChange("altura", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Altura"
                  />
                  <input
                    type="number"
                    value={formData.largura}
                    onChange={(e) =>
                      handleInputChange("largura", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Largura"
                  />
                  <input
                    type="number"
                    value={formData.comprimento}
                    onChange={(e) =>
                      handleInputChange("comprimento", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Comprimento"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Quantidade de Volumes *
                  </label>
                  <input
                    type="number"
                    value={formData.quantidadeVolumes}
                    onChange={(e) =>
                      handleInputChange("quantidadeVolumes", e.target.value)
                    }
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.quantidadeVolumes
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Ex: 5"
                  />
                  {errors.quantidadeVolumes && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.quantidadeVolumes}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Valor da Nota Fiscal (R$)
                  </label>
                  <input
                    type="number"
                    value={formData.valorNotaFiscal}
                    onChange={(e) =>
                      handleInputChange("valorNotaFiscal", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ex: 1000.00"
                    step="0.01"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Endereço de Origem
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    CEP *
                  </label>
                  <input
                    type="text"
                    value={formData.cepOrigem}
                    onChange={(e) => handleCepChange(e, "Origem")}
                    onBlur={(e) => handleCepChange(e, "Origem")}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.cepOrigem ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="00000-000"
                  />
                  {errors.cepOrigem && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.cepOrigem}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Data de Coleta
                  </label>
                  <input
                    type="date"
                    value={formData.dataColeta}
                    onChange={(e) =>
                      handleInputChange("dataColeta", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Endereço *
                </label>
                <input
                  type="text"
                  value={formData.enderecoOrigem}
                  onChange={(e) =>
                    handleInputChange("enderecoOrigem", e.target.value)
                  }
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.enderecoOrigem ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Rua, Avenida, etc."
                />
                {errors.enderecoOrigem && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.enderecoOrigem}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Número
                  </label>
                  <input
                    type="text"
                    value={formData.numeroOrigem}
                    onChange={(e) =>
                      handleInputChange("numeroOrigem", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="123"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Complemento
                  </label>
                  <input
                    type="text"
                    value={formData.complementoOrigem}
                    onChange={(e) =>
                      handleInputChange("complementoOrigem", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Apto, Sala, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Bairro
                  </label>
                  <input
                    type="text"
                    value={formData.bairroOrigem}
                    onChange={(e) =>
                      handleInputChange("bairroOrigem", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Nome do bairro"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    value={formData.cidadeOrigem}
                    onChange={(e) =>
                      handleInputChange("cidadeOrigem", e.target.value)
                    }
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.cidadeOrigem ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Nome da cidade"
                  />
                  {errors.cidadeOrigem && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.cidadeOrigem}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Estado *
                  </label>
                  <select
                    value={formData.estadoOrigem}
                    onChange={(e) =>
                      handleInputChange("estadoOrigem", e.target.value)
                    }
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.estadoOrigem ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Selecione o estado</option>
                    {estados.map((estado) => (
                      <option key={estado} value={estado}>
                        {estado}
                      </option>
                    ))}
                  </select>
                  {errors.estadoOrigem && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.estadoOrigem}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Endereço de Destino
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    CEP *
                  </label>
                  <input
                    type="text"
                    value={formData.cepDestino}
                    onChange={(e) => handleCepChange(e, "Destino")}
                    onBlur={(e) => handleCepChange(e, "Destino")}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.cepDestino ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="00000-000"
                  />
                  {errors.cepDestino && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.cepDestino}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Data de Entrega Desejada
                  </label>
                  <input
                    type="date"
                    value={formData.dataEntrega}
                    onChange={(e) =>
                      handleInputChange("dataEntrega", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Endereço *
                </label>
                <input
                  type="text"
                  value={formData.enderecoDestino}
                  onChange={(e) =>
                    handleInputChange("enderecoDestino", e.target.value)
                  }
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.enderecoDestino
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder="Rua, Avenida, etc."
                />
                {errors.enderecoDestino && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.enderecoDestino}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Número
                  </label>
                  <input
                    type="text"
                    value={formData.numeroDestino}
                    onChange={(e) =>
                      handleInputChange("numeroDestino", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="123"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Complemento
                  </label>
                  <input
                    type="text"
                    value={formData.complementoDestino}
                    onChange={(e) =>
                      handleInputChange("complementoDestino", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Apto, Sala, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Bairro
                  </label>
                  <input
                    type="text"
                    value={formData.bairroDestino}
                    onChange={(e) =>
                      handleInputChange("bairroDestino", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Nome do bairro"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    value={formData.cidadeDestino}
                    onChange={(e) =>
                      handleInputChange("cidadeDestino", e.target.value)
                    }
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.cidadeDestino
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Nome da cidade"
                  />
                  {errors.cidadeDestino && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.cidadeDestino}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Estado *
                  </label>
                  <select
                    value={formData.estadoDestino}
                    onChange={(e) =>
                      handleInputChange("estadoDestino", e.target.value)
                    }
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.estadoDestino
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Selecione o estado</option>
                    {estados.map((estado) => (
                      <option key={estado} value={estado}>
                        {estado}
                      </option>
                    ))}
                  </select>
                  {errors.estadoDestino && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.estadoDestino}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Serviços Adicionais
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicosDisponiveis.map((servico) => {
                  const IconComponent = servico.icon;
                  const isSelected = formData.servicosAdicionais.includes(
                    servico.id
                  );

                  return (
                    <div
                      key={servico.id}
                      onClick={() => handleServiceToggle(servico.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent
                          className={`h-5 w-5 ${
                            isSelected ? "text-primary" : "text-gray-500"
                          }`}
                        />
                        <span
                          className={`font-medium ${
                            isSelected ? "text-primary" : "text-gray-700"
                          }`}
                        >
                          {servico.label}
                        </span>
                        {isSelected && (
                          <CheckCircle className="h-4 w-4 text-primary ml-auto" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Observações Adicionais
              </label>
              <textarea
                value={formData.observacoes}
                onChange={(e) =>
                  handleInputChange("observacoes", e.target.value)
                }
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Descreva detalhes específicos sobre sua carga ou necessidades especiais..."
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="termos"
                  checked={formData.aceitaTermos}
                  onChange={(e) =>
                    handleInputChange("aceitaTermos", e.target.checked)
                  }
                  className="mt-1"
                />
                <label htmlFor="termos" className="text-sm text-gray-600">
                  Aceito os termos e condições de serviço e autorizo o uso dos
                  meus dados para elaboração do orçamento. Declaro que as
                  informações fornecidas são verdadeiras e completas.
                </label>
              </div>
              {errors.aceitaTermos && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.aceitaTermos}
                </p>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const steps = [
    { number: 1, title: "Dados Pessoais", icon: User },
    { number: 2, title: "Informações da Carga", icon: Package },
    { number: 3, title: "Origem", icon: MapPin },
    { number: 4, title: "Destino", icon: MapPin },
    { number: 5, title: "Finalização", icon: CheckCircle },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;

            return (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    isCompleted
                      ? "bg-primary border-primary text-white"
                      : isActive
                      ? "border-primary text-primary bg-primary/10"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <IconComponent className="h-5 w-5" />
                  )}
                </div>
                <div className="ml-2 hidden md:block">
                  <p
                    className={`text-sm font-medium ${
                      isActive
                        ? "text-primary"
                        : isCompleted
                        ? "text-gray-900"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 md:w-16 h-0.5 mx-4 ${
                      isCompleted ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <Card>
        <CardHeader>
          <CardTitle>Solicitar Orçamento - Etapa {currentStep} de 5</CardTitle>
          <CardDescription>
            Preencha as informações abaixo para receber um orçamento
            personalizado.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                Voltar
              </Button>

              {currentStep < 5 ? (
                <Button type="button" onClick={nextStep}>
                  Próximo
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Orçamento"}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteForm;
