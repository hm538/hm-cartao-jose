// Dados deste cartão. Para editar o cartão, mude só este arquivo.
// Campos marcados com "TODO" ainda precisam dos dados reais.
window.HM_PROFILE = {
  slug: "jose",
  name: "José Neto Hoffmann",          // TODO: confirmar nome de exibição
  role: "CEO da HM Digital",
  photo: "",                            // ex.: "/assets/img/foto.jpg" (vazio = iniciais)
  status: "Agenda aberta",
  bio: [
      "Sou CEO da HM Digital, um estúdio que transforma a presença de marcas e pessoas em experiências digitais que ficam na memória.",
      "Acredito que o primeiro contato decide muito. Por isso cada cartão, página e identidade que a gente entrega é feito sob medida, com cuidado de marca grande.",
      "Hoje a HM cria cartões digitais, sites e identidades para empresários e marcas que querem ser lembrados no primeiro toque."
  ],
  signature: "HM Digital. Feito para ser lembrado.",
  whatsapp: "5500000000000",            // TODO: DDI + DDD + número, só dígitos
  whatsappMsg: "Olá, José! Vim pelo seu cartão digital.",
  phone: "+55 00 00000-0000",           // TODO
  email: "contato@hmdigital.com.br",    // TODO
  instagram: "",                        // TODO: @ pessoal, sem o @
  company: "HM Digital"
};

// Dados da HM. São iguais nos dois cartões (José e Mariana).
window.HM_COMPANY = {
  name: "HM Digital",
  logo: "",                               // TODO: "/assets/img/logo-hm.png" quando o arquivo do logo for adicionado
  instagram: "hmdigital",                 // TODO: @ da empresa
  site: "",                               // ex.: "https://hmdigital.com.br"
  services: [
    { title: "Cartão digital premium", text: "Página pessoal com contatos, links e história. Abre pelo link, QR code ou NFC.", tag: "Carro-chefe" },
    { title: "Sites e landing pages", text: "Páginas rápidas, bonitas no celular e feitas para transformar visita em conversa.", tag: "Web" },
    { title: "Identidade visual", text: "Logo, cores e tipografia que deixam a marca reconhecível em qualquer tela.", tag: "Marca" }
  ]
};
