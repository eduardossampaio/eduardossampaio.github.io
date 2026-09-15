/**
 * Base de dados mock dos projetos do GitHub.
 * Centraliza as informações para fácil manutenção e futura integração com a API do GitHub.
 */
const projectsData = [
  {
    id: "sistema-gestao-tarefas",
    title: "TaskFlow Manager",
    shortDescription: "Plataforma web para organização e acompanhamento de tarefas e fluxos de trabalho em equipe.",
    fullDescription: "O TaskFlow Manager é uma aplicação desenvolvida para otimizar a produtividade individual e coletiva. Conta com quadro Kanban interativo, categorização por prioridade, prazos e relatórios em tempo real de conclusão de metas. A interface foi projetada com foco em usabilidade e design responsivo.",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage API"],
    image: "assets/images/project-placeholder.svg",
    githubUrl: "https://github.com/eduardossampaio",
    liveUrl: "https://eduardossampaio.github.io",
    highlights: [
      "Quadro Kanban dinâmico com drag-and-drop",
      "Persistência de dados local sem necessidade de backend",
      "Filtros avançados por prioridade, tag e status",
      "Design 100% responsivo para mobile e desktop"
    ]
  },
  {
    id: "dashboard-financeiro",
    title: "Finances Dashboard",
    shortDescription: "Painel interativo para controle de finanças pessoais, gráficos de despesas e projeções mensais.",
    fullDescription: "Um dashboard financeiro completo com visualização intuitiva de receitas, despesas e saldo líquido. Permite ao usuário cadastrar transações recorrentes, definir metas de economia e exportar relatórios em formato CSV.",
    technologies: ["JavaScript", "CSS Grid", "SVG Charts", "Responsive Design"],
    image: "assets/images/project-placeholder.svg",
    githubUrl: "https://github.com/eduardossampaio",
    liveUrl: "https://eduardossampaio.github.io",
    highlights: [
      "Gráficos customizados em SVG sem dependências pesadas",
      "Cálculo automático de balanço e projeções futuras",
      "Exportação de dados para CSV/JSON",
      "Modo escuro e claro integrado"
    ]
  },
  {
    id: "gerador-documentacao-api",
    title: "API Doc Generator",
    shortDescription: "Utilitário CLI e interface web para gerar páginas de documentação técnica legíveis a partir de especificações OpenAPI.",
    fullDescription: "Ferramenta leve e configurável criada para desenvolvedores que precisam gerar documentação estática para APIs REST. Transforma esquemas OpenAPI/Swagger em páginas HTML elegantes com busca instantânea e snippets de código executáveis.",
    technologies: ["Node.js", "JavaScript", "Markdown Parser", "CSS Moderno"],
    image: "assets/images/project-placeholder.svg",
    githubUrl: "https://github.com/eduardossampaio",
    liveUrl: "https://eduardossampaio.github.io",
    highlights: [
      "Suporte a especificações OpenAPI 3.0",
      "Busca rápida client-side por rotas e parâmetros",
      "Geração de exemplos de requisição em cURL, JS e Python",
      "Saída estática pronta para deploy no GitHub Pages"
    ]
  },
  {
    id: "monitor-servicos-uptime",
    title: "Service Uptime Monitor",
    shortDescription: "Script e interface de monitoramento de disponibilidade de serviços e endpoints HTTP com alertas.",
    fullDescription: "Sistema simples e eficiente para monitoramento periódico de APIs e websites. Realiza healthchecks a intervalos definidos, mede latência e armazena o histórico para apresentação em uma página de status pública.",
    technologies: ["JavaScript", "Fetch API", "Async/Await", "Webhooks"],
    image: "assets/images/project-placeholder.svg",
    githubUrl: "https://github.com/eduardossampaio",
    liveUrl: "https://eduardossampaio.github.io",
    highlights: [
      "Healthchecks contínuos com métricas de tempo de resposta",
      "Página de status com histórico dos últimos 90 dias",
      "Notificação via Webhooks em caso de queda",
      "Consumo mínimo de recursos computacionais"
    ]
  }
];
