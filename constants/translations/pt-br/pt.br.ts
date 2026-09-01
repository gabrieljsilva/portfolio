import { mailtoHref, profile, telHref } from "@/constants/profile";

export const ptBr = {
	meta: {
		portfolio: {
			title: "Gabriel Silva - Engenheiro de Software",
			description:
				"Engenheiro de software desde 2018. Sistemas web e backends distribuídos em Node.js e TypeScript, com foco em IA aplicada: RAG, MCP e agentes.",
		},
		linktree: {
			title: "Gabriel Silva - Links",
			description: "Onde encontrar o Gabriel de Jesus Silva.",
		},
	},

	ui: {
		themeToggle: "Alternar tema",
		openMenu: "Abrir menu",
		closeMenu: "Fechar menu",
		language: "Idioma",
	},

	site: {
		resumeBtn: "Currículo",
		nav: [
			{ label: "Sobre", href: "#about" },
			{ label: "Projetos", href: "#work" },
			{ label: "Experiência", href: "#experience" },
			{ label: "Habilidades", href: "#skills" },
			{ label: "Contato", href: "#contact" },
		],
		hero: {
			kicker: "Engenheiro de Software",
			statement: "Do discovery ao deploy.",
			rotating: [
				"Do discovery ao deploy.",
				"Sistemas distribuídos para saúde.",
				"Backend, produto e infraestrutura.",
			],
			support:
				"Sou Gabriel de Jesus Silva, engenheiro de software desde 2018. Construo sistemas web e backends distribuídos em Node.js e TypeScript, do discovery técnico ao deploy. Hoje trabalho principalmente com produtos de IA na Sami Saúde e no Untimeless AI.",
			ctaWork: "Ver projetos",
			ctaContact: "Falar comigo",
		},
		untimeless: {
			kicker: "Produto próprio · SaaS",
			lead: "Plataforma de inteligência sobre reuniões. Uma extensão de navegador captura as legendas de Google Meet, Teams e Zoom, e a plataforma transforma esse material em base de conhecimento para chats e agentes de IA.",
			cta: "Visitar untimeless.com",
			tags: [
				"Extensão de navegador",
				"Google Meet · Teams · Zoom",
				"MCP",
				"Workspaces",
			],
			bullets: [
				{
					title: "Captura de legendas",
					body: "Extensão de navegador que faz o scraping das legendas ao vivo em Meet, Teams e Zoom.",
				},
				{
					title: "Chats de IA",
					body: "Conversas sobre o conteúdo das reuniões, com o histórico como contexto.",
				},
				{
					title: "Servidor MCP",
					body: "MCP próprio para plugar as reuniões em qualquer ferramenta de IA do time.",
				},
				{
					title: "Integrações externas",
					body: "Conexão com servidores MCP de terceiros para ampliar ações e fontes de dados.",
				},
				{
					title: "Times e workspaces",
					body: "Organização por workspace, com gestão de membros e acesso.",
				},
			],
		},
		about: {
			kicker: "Sobre",
			title: "Da arquitetura ao produto em produção.",
			caption: "Senhor do Bonfim, Bahia, Brasil",
			paragraphs: [
				"Trabalho com desenvolvimento desde 2018, no design e na implementação de sistemas escaláveis e de alta performance, com atuação nos setores de saúde, tecnologia, jurídico, financeiro e RH.",
				"Uso principalmente Node.js, TypeScript e NestJS em arquiteturas distribuídas (monólitos modulares, microsserviços e sistemas orientados a eventos com Kafka, RabbitMQ e SQS), apoiado por CI/CD, OpenTelemetry, Grafana e testes automatizados.",
				"Nos últimos anos meu foco passou a ser IA aplicada: soluções com IA generativa, RAG e MCP, do discovery técnico e da modelagem de arquitetura até a implementação, o deploy e a validação com usuários reais.",
			],
			facts: [
				"Desde 2018",
				"Node.js · TypeScript · NestJS",
				"RAG · MCP · Agentes",
				"Saúde · SaaS · Fintech",
			],
		},
		work: {
			kicker: "Projetos",
			title: "Projetos selecionados",
			sub: "Sistemas de produção, produtos próprios e bibliotecas open source.",
			visit: "Acessar",
			items: [
				{
					kind: "Produto próprio",
					year: "2025 a 2026",
					name: "Untimeless AI",
					description:
						"SaaS de inteligência sobre reuniões: captura de legendas via extensão, chats de IA, servidor MCP e gestão de times. Desenvolvido end-to-end, do discovery ao deploy.",
					tags: [
						"TypeScript",
						"NestJS",
						"React",
						"PostgreSQL",
						"IA generativa",
						"MCP",
					],
					link: profile.social.product,
				},
				{
					kind: "Sami Saúde",
					year: "desde 2025",
					name: "Samira",
					description:
						"Agente de IA de atendimento que combina RAG, servidores MCP internos e agentes inteligentes, integrado a Zendesk e serviços internos. Elevou a resolução sem transbordo humano de 19% para 53%, com mais de 85% de avaliações positivas.",
					tags: [
						"RAG",
						"MCP",
						"Agentes",
						"NestJS",
						"RabbitMQ",
						"OpenTelemetry",
					],
					link: "",
				},
				{
					kind: "Albert Einstein",
					year: "2024 a 2025",
					name: "Coordenação do Cuidado",
					description:
						"Sistema que vincula pacientes a profissionais de saúde por meio de times de cuidado, integrado ao portal de micro front-ends do hospital.",
					tags: ["NestJS", "GraphQL", "React", "Kafka", "MySQL", "Kubernetes"],
					link: "",
				},
				{
					kind: "Open source",
					year: "2023",
					name: "Decorated Dataloaders",
					description:
						"Módulo NestJS que declara dataloaders GraphQL via decorators, resolvendo o problema N+1 com batching e cache configuráveis.",
					tags: ["NestJS", "GraphQL", "TypeScript"],
					link: "https://decorated-dataloaders.gabrieljs.dev/",
				},
				{
					kind: "Open source",
					year: "2023",
					name: "Decorated Factory",
					description:
						"Biblioteca que gera instâncias de objetos para testes a partir de decorators, com suporte a relações, arrays e sobreposição de valores.",
					tags: ["TypeScript", "Faker", "Rollup"],
					link: "https://github.com/gabrieljsilva/decorated-factory",
				},
				{
					kind: "Takaoka Anestesia",
					year: "2022 a 2024",
					name: "Demand To Invoice",
					description:
						"Sistema de escalas médicas que cobre o fluxo completo, do cadastro e atendimento ao paciente até o faturamento e o pagamento.",
					tags: ["NestJS", "GraphQL", "React", "PostgreSQL", "Azure"],
					link: "",
				},
				{
					kind: "Fleury",
					year: "2021 a 2023",
					name: "Escalas Médicas",
					description:
						"Aplicação web e mobile para escalas e negociação de plantões entre médicos da rede, com formulários dinâmicos de anamnese.",
					tags: ["Node.js", "React Native", "Next.js", "GraphQL", "PostgreSQL"],
					link: "",
				},
				{
					kind: "GoHealth",
					year: "2021 a 2022",
					name: "NPS para clínicas e hospitais",
					description:
						"Plataforma SaaS de Net Promoter Score para medir a satisfação de pacientes em unidades hospitalares parceiras.",
					tags: ["NestJS", "GraphQL", "React", "PostgreSQL", "Docker"],
					link: "",
				},
			],
		},
		experience: {
			kicker: "Trajetória",
			title: "Experiência profissional",
			items: [
				{
					company: "Sami Saúde",
					role: "Engenheiro de Software",
					period: "Jul 2025 até hoje",
					summary:
						"Desenvolvimento de sistemas para planos de saúde, com protagonismo no discovery técnico e na arquitetura da solução de atendimento automatizado com IA.",
					bullets: [
						"Evolução da automação do atendimento de 19% para 53% de resolução sem transbordo, combinando RAG, servidores MCP e agentes inteligentes.",
						"Mais de 85% de avaliações positivas no atendimento automatizado.",
						"Modelagem de arquitetura e decisões técnicas para integrações entre times, incluindo Zendesk, servidores MCP e serviços internos.",
						"Desenvolvimento de sistemas médicos com IA generativa, incluindo aplicações baseadas em RAG e servidores MCP.",
						"Backends escaláveis em Node.js, TypeScript, Fastify e NestJS, com microsserviços e eventos via RabbitMQ.",
						"Observabilidade com OpenTelemetry e Grafana: logs, métricas e alertas instrumentados.",
						"Mentoria de profissionais não técnicos na adoção de IA generativa para produtividade.",
					],
					stack: [
						"TypeScript",
						"Node.js",
						"Fastify",
						"NestJS",
						"RabbitMQ",
						"PostgreSQL",
						"MongoDB",
						"Redis",
						"OpenTelemetry",
						"Grafana",
						"GCP",
					],
				},
				{
					company: "Hospital Israelita Albert Einstein",
					role: "Fullstack Software Developer",
					period: "Mar 2024 a Jun 2025",
					summary:
						"Sistemas para a área de atendimento primário à saúde, com foco em arquitetura modular e integração entre serviços.",
					bullets: [
						"Aplicações web com JavaScript, Node.js, TypeScript e GraphQL.",
						"Aplicações modulares e escaláveis com NestJS e GraphQL.",
						"Sistemas orientados a eventos e microsserviços com Kafka, RabbitMQ e SQS.",
						"Infraestrutura com Docker e Kubernetes, e ambientes de CI/CD para automatizar o deploy.",
						"Bibliotecas internas para melhorar qualidade de código e experiência de desenvolvimento.",
						"Supervisão e acompanhamento de desenvolvedores juniores.",
					],
					stack: [
						"NestJS",
						"GraphQL",
						"React",
						"Kafka",
						"RabbitMQ",
						"MySQL",
						"Redis",
						"Docker",
						"Kubernetes",
						"AWS",
						"Azure",
					],
				},
				{
					company: "Freelancer",
					role: "Desenvolvedor Fullstack",
					period: "Out 2022 a Mar 2024",
					summary:
						"Projetos para Recursos Humanos, Recrutamento e Seleção e LawTechs, com soluções sob medida em Next.js e NestJS.",
					bullets: [
						"Aplicações integradas com JavaScript, Node.js e TypeScript.",
						"Microsserviços com Kafka e RabbitMQ para comunicação entre sistemas.",
						"Interfaces responsivas com React, Tailwind e Material UI.",
						"CI/CD, Docker e Kubernetes para entrega contínua.",
					],
					stack: [
						"Next.js",
						"NestJS",
						"GraphQL",
						"React",
						"Tailwind",
						"Kafka",
						"RabbitMQ",
						"PostgreSQL",
						"Docker",
					],
				},
				{
					company: "RedFox Digital Solutions",
					role: "Fullstack Software Developer",
					period: "Abr 2021 a Mar 2024",
					summary:
						"Empresa de soluções e serviços de tecnologia. Desenvolvimento de aplicações para a área da saúde.",
					bullets: [
						"Escalas médicas, plataforma SaaS de NPS para clínicas e hospitais e aplicações mobile.",
						"Desenvolvimento web com JavaScript, Node.js, TypeScript e React.",
						"Desenvolvimento mobile com React Native.",
						"Aplicações modulares e escaláveis com NestJS.",
						"Bancos relacionais como PostgreSQL e MySQL.",
					],
					stack: [
						"Node.js",
						"TypeScript",
						"React",
						"React Native",
						"NestJS",
						"GraphQL",
						"PostgreSQL",
						"MySQL",
					],
				},
				{
					company: "CAMEJA",
					role: "Programador de sistemas de informação",
					period: "Set 2019 a Fev 2020",
					summary:
						"Soluções integradas para as áreas jurídica e financeira, com foco em automação de processos.",
					bullets: [
						"APIs e interfaces de usuário para comunicação entre módulos.",
						"Sistemas em JavaScript, Node.js e MySQL.",
					],
					stack: ["JavaScript", "Node.js", "MySQL"],
				},
				{
					company: "Newtic",
					role: "Estagiário de Desenvolvimento Web",
					period: "Dez 2018 a Jan 2019",
					summary:
						"Primeira experiência profissional: criação e manutenção de funcionalidades em aplicações web.",
					bullets: [
						"Interfaces dinâmicas com Vue.js.",
						"Suporte a funcionalidades com Node.js e JavaScript.",
					],
					stack: ["JavaScript", "Node.js", "Vue.js"],
				},
			],
		},
		education: {
			kicker: "Formação",
			title: "Formação acadêmica",
			items: [
				{
					course: "Ciências da Computação",
					place: "Instituto Federal de Educação, Ciência e Tecnologia",
					level: "Ensino Superior",
					period: "Início em 2018",
					status: "Trancado no 4º semestre",
				},
				{
					course: "Técnico em Informática",
					place: "Instituto Federal de Educação, Ciência e Tecnologia",
					level: "Ensino Técnico",
					period: "2018 a 2019",
					status: "Concluído",
				},
			],
		},
		skills: {
			kicker: "Stack",
			title: "Habilidades técnicas",
			sub: "Tecnologias que uso no dia a dia para desenhar, construir e operar sistemas.",
			groups: [
				{
					name: "IA aplicada",
					items: [
						"IA generativa",
						"RAG",
						"MCP",
						"Agentes",
						"Gemini",
						"Prompt engineering",
					],
				},
				{
					name: "Back-end",
					items: [
						"JavaScript",
						"TypeScript",
						"Node.js",
						"NestJS",
						"Fastify",
						"GraphQL",
						"Express",
					],
				},
				{
					name: "Front-end",
					items: [
						"React",
						"Next.js",
						"React Native",
						"Tailwind",
						"Material UI",
						"HTML",
						"CSS",
					],
				},
				{
					name: "Dados",
					items: [
						"PostgreSQL",
						"MySQL",
						"MongoDB",
						"Redis",
						"SQLite",
						"SQL Server",
					],
				},
				{
					name: "Arquitetura & mensageria",
					items: [
						"Microsserviços",
						"Event-driven",
						"Kafka",
						"RabbitMQ",
						"AWS SQS",
					],
				},
				{
					name: "Infra & DevOps",
					items: [
						"Docker",
						"Kubernetes",
						"CI/CD",
						"AWS",
						"Azure",
						"GCP",
						"GitHub Actions",
						"Jenkins",
						"Coolify",
					],
				},
				{
					name: "Observabilidade & qualidade",
					items: [
						"OpenTelemetry",
						"Grafana",
						"Kibana",
						"Testes automatizados",
						"Scrum",
						"Kanban",
					],
				},
			],
		},
		links: {
			kicker: "Links",
			title: "Onde me encontrar",
			items: [
				{
					icon: "github" as const,
					label: "GitHub",
					value: "gabrieljsilva",
					href: profile.social.github,
				},
				{
					icon: "linkedin" as const,
					label: "LinkedIn",
					value: "gabrieldjs21",
					href: profile.social.linkedin,
				},
				{
					icon: "mail" as const,
					label: "E-mail",
					value: profile.email,
					href: mailtoHref,
				},
				{
					icon: "phone" as const,
					label: "Telefone",
					value: profile.phone,
					href: telHref,
				},
				{
					icon: "globe" as const,
					label: "Produto",
					value: "untimeless.com",
					href: profile.social.product,
				},
			],
		},
		contact: {
			kicker: "Contato",
			title: "Vamos construir algo com IA",
			lead: "Disponível para conversas sobre produtos de IA, arquitetura de sistemas distribuídos e projetos de engenharia.",
			resume: "Baixar currículo (PT)",
		},
		footer: {
			copyright: "© 2026 Gabriel de Jesus Silva. Todos os direitos reservados.",
			quote:
				"Qualquer um pode escrever código que um computador entenda. Bons programadores escrevem código que humanos entendem.",
			author: "Martin Fowler",
		},
	},

	linktree: {
		role: "Engenheiro de Software na Sami Saúde",
		bio: "Sistemas web e backends distribuídos em Node.js e TypeScript.",
		portfolio: "Ver portfólio completo",
		footer: "© 2026 Gabriel de Jesus Silva",
		links: [
			{
				icon: "linkedin" as const,
				label: "LinkedIn",
				value: "in/gabrieldjs21",
				href: profile.social.linkedin,
			},
			{
				icon: "github" as const,
				label: "GitHub",
				value: "github.com/gabrieljsilva",
				href: profile.social.github,
			},
			{
				icon: "instagram" as const,
				label: "Instagram",
				value: "@gabrieljsillva",
				href: profile.social.instagram,
			},
			{
				icon: "globe" as const,
				label: "Site",
				value: "gabrieljs.dev",
				href: profile.social.website,
			},
			{
				icon: "mail" as const,
				label: "E-mail",
				value: profile.email,
				href: mailtoHref,
			},
		],
	},

	resume: {
		fileName: "Gabriel_Silva_Curriculo.pdf",
		role: "Engenheiro de Software",
		summaryTitle: "Resumo profissional",
		summary: [
			"Engenheiro de Software com mais de 6 anos de experiência no design e implementação de sistemas escaláveis e de alta performance, com atuação nos setores de saúde, tecnologia, jurídico, financeiro e RH.",
			"Especialista em Node.js, TypeScript e NestJS, com sólida experiência em arquiteturas distribuídas, incluindo monólitos modulares, microsserviços e sistemas orientados a eventos. Experiência prática com Kafka, RabbitMQ, AWS SQS, CI/CD, OpenTelemetry, Grafana e testes automatizados, além do desenvolvimento de soluções baseadas em IA generativa, RAG e MCP.",
			"Atuação em discovery técnico, modelagem de arquitetura e tomada de decisões técnicas, participando da definição e evolução de soluções e integrações entre diferentes sistemas e times. Experiência também na construção de produtos SaaS end-to-end, desde discovery e arquitetura até implementação, infraestrutura, deploy e validação com usuários reais.",
		],
		resultsLead:
			"Foco em qualidade de código, escalabilidade, confiabilidade e eficiência operacional, com resultados como:",
		results: [
			"Redução de custos anuais com serviços externos de R$220 mil para R$40 mil.",
			"Redução da taxa de falhas em deploys de 60% para 8%.",
			"Desenvolvimento de sistema médico com IA generativa que reduziu o tempo médio de escrita médica de 10 minutos para aproximadamente 30 segundos.",
			"Evolução de solução de atendimento baseada em RAG, MCP e agentes inteligentes, aumentando a resolução sem transbordo para atendimento humano de 19% para 53%.",
		],
		educationTitle: "Formação acadêmica",
		education: [
			"Graduação em Ciências da Computação – Instituto Federal de Educação, Ciência e Tecnologia (trancado – 4º semestre) – Início em 2018",
			"Curso Técnico de Informática – Instituto Federal de Educação, Ciência e Tecnologia - Início em 2018 - Concluído em 2019",
		],
		experienceTitle: "Experiência profissional",
		experience: [
			{
				company: "Sami Saúde - 07/2025",
				note: "",
				role: "Engenheiro de Software",
				bullets: [
					"Evolução da automação do atendimento de 19% para 53% de resolução sem transbordo para agentes humanos, por meio da combinação de RAG, servidores MCP e agentes inteligentes, aumentando a eficiência operacional do time de atendimento.",
					"Atuação com protagonismo no discovery técnico da solução de atendimento automatizado, conduzindo pesquisas, refinamentos, avaliação de alternativas e discussões técnicas para definição e evolução da solução.",
					"Modelagem de arquitetura e tomada de decisões técnicas para integrações entre sistemas de diferentes times, incluindo Zendesk, servidores MCP e serviços internos, com criação de diagramas e definição de fluxos críticos desde a inclusão do membro até o suporte técnico.",
					"Atuação no diagnóstico e resolução de problemas técnicos críticos nas fases iniciais do projeto, apoiando a estabilização das integrações e a evolução da arquitetura.",
					"Desenvolvimento de aplicações backend escaláveis utilizando Node.js, TypeScript, Fastify e NestJS, com foco em desempenho, qualidade de código e arquitetura modular.",
					"Desenvolvimento de microsserviços e sistemas orientados a eventos utilizando RabbitMQ, além da implementação de integrações entre serviços e sistemas internos.",
					"Integração com bancos de dados relacionais e não relacionais, incluindo PostgreSQL, MySQL, MongoDB e Redis.",
					"Desenvolvimento e manutenção de testes unitários e de integração, além da criação de bibliotecas internas para padronização de testes e melhoria da experiência de desenvolvimento.",
					"Implementação de observabilidade utilizando OpenTelemetry e Grafana, com instrumentação de logs, métricas e alertas para monitoramento de aplicações e serviços.",
					"Desenvolvimento de sistemas médicos utilizando IA generativa, incluindo aplicações baseadas em RAG e servidores MCP (Model Context Protocol) para integração entre modelos de linguagem, ferramentas e serviços internos.",
					"Mentoria de profissionais de áreas não técnicas na adoção de IA generativa para produtividade, utilizando ferramentas do ecossistema Google, como Gemini, Antigravity, Apps Script e Stitch.",
				],
			},
			{
				company: "Hospital Israelita Albert Einstein - 03/2024 – 06/2025",
				note: "",
				role: "Fullstack Software Developer",
				bullets: [
					"Atuação no desenvolvimento de sistemas voltados para a área de atendimento primário à saúde.",
					"Implementação de aplicações web utilizando JavaScript, Node.js, TypeScript e GraphQL.",
					"Uso de banco de dados relacionais como MySQL.",
					"Criação de aplicações modulares e escaláveis com Nest.js e GraphQL.",
					"Criação de sistemas orientados a eventos e microsserviços com Kafka, RabbitMQ e SQS.",
					"Criação de testes automatizados.",
					"Desenvolvimento de bibliotecas para aprimorar a qualidade do código e experiência de desenvolvimento.",
					"Implementação de integrações entre front-end e back-end utilizando APIs REST e GraphQL.",
					"Implantação de infraestrutura com Docker, Kubernetes.",
					"Criação de ambientes utilizando CI/CD para automatização de processos de deploy.",
					"Supervisão e acompanhamento de desenvolvedores juniores.",
				],
			},
			{
				company: "RedFox Digital Solutions – 04/2021 – 03/2024",
				note: "Empresa de soluções e serviços de tecnologia",
				role: "Fullstack Software Developer",
				bullets: [
					"Desenvolvimento de aplicações voltados para a área da saúde, como: Escalas médicas, Plataforma SaaS de NPS para clínicas e hospitais e aplicações mobile.",
					"Atuação com tecnologias de desenvolvimento web, como: JavaScript, Node.js, TypeScript e React.",
					"Atuação com tecnologias de desenvolvimento mobile como React Native.",
					"Desenvolvimento de aplicações modulares e escaláveis com Nest.js.",
					"Uso de banco de dados relacionais como PostgreSQL e MySQL.",
				],
			},
			{
				company: "CAMEJA – 09/2019 – 02/2020",
				note: "",
				role: "Programador de sistemas de informação",
				bullets: [
					"Desenvolvimento de soluções integradas para as áreas jurídica e financeira, com foco na automação de processos críticos.",
					"Implementação de APIs e interfaces de usuário para comunicação entre diferentes módulos do sistema.",
					"Uso de JavaScript, Node.js e MySQL na construção e manutenção das aplicações.",
				],
			},
			{
				company: "Newtic – 12/2018 – 01/2019",
				note: "",
				role: "Estagiário em Desenvolvimento Web",
				bullets: [
					"Participação na criação e manutenção de funcionalidades em aplicações web.",
					"Desenvolvimento de interfaces dinâmicas e responsivas com Vue.js.",
					"Suporte à implementação de funcionalidades com Node.js e JavaScript.",
				],
			},
		],
		projectsTitle: "Projetos independentes",
		projects: [
			{
				name: "Untimeless – 2025 – 2026",
				kind: "SaaS Independente",
				role: "Fundador / Engenheiro de Software",
				bullets: [
					"Desenvolvimento end-to-end de um SaaS de inteligência sobre reuniões, baseado em captura de legendas e IA generativa.",
					"Desenvolvimento de extensão de navegador que realiza o scraping das legendas de Google Meet, Microsoft Teams e Zoom, utilizadas como insumo para os recursos de IA da plataforma.",
					"Implementação de chats de IA sobre o conteúdo das reuniões, com servidor MCP próprio para integração com ferramentas de IA e conexão com servidores MCP externos.",
					"Implementação de backend, infraestrutura, autenticação, sistema de times e workspaces e funcionalidades de IA.",
					"Responsável por todo o ciclo do produto, desde discovery e definição da solução até arquitetura, implementação, deploy e validação com usuários reais.",
					"Evolução contínua do produto a partir de feedback de usuários reais e validação de hipóteses de negócio.",
				],
			},
		],
		skillsTitle: "Cursos e qualificações",
		skills: [
			"Inteligência Artificial - IA generativa, RAG, MCP (Model Context Protocol), agentes inteligentes.",
			"Back-end - JavaScript, TypeScript, Node.js, Nest.js, Fastify, GraphQL, Express.",
			"Front-end - HTML, CSS, JavaScript, React, Tailwind, Material UI.",
			"Banco de Dados - MySQL, PostgreSQL, MongoDB, Redis, SQLite, SQLServer.",
			"Infraestrutura & DevOps - Docker, Kubernetes, CI/CD, AWS, Azure, jenkins, Github Actions, S3, EC2, Coolify, VPS.",
			"Arquitetura - Kafka, RabbitMQ.",
			"Metodologias & Qualidade - Scrum, Kanban, Testes Automatizados.",
			"Observabilidade - OpenTelemetry, Grafana e Kibana.",
			"Inglês – Leitura Técnica.",
		],
	},
};
