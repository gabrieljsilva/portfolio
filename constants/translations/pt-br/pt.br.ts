export const ptBr = {
	ui: {},
	profile: {
		name: "Gabriel Silva",
		fullName: "Gabriel de Jesus Silva",
		role: "Desenvolvedor Fullstack",
		currentCompany: "Hospital Israelita Albert Einstein",
		currentCompanyShortName: "HIAE",
		birthdayDate: "2000-01-23",
		resumeSummary:
			"Desenvolvedor Full Stack com mais de 5 anos de experiência criando soluções corporativas para os setores de saúde e tecnologia. Comprovada habilidade em construir sistemas de alta performance capazes de lidar com mais de 10k requisições por minuto. Contribuidor open source focado em ferramentas para desenvolvedores.",
		resume: `Desenvolvedor Full Stack apaixonado por tecnologia com mais de 5 anos de experiência, especializado em criar soluções tecnológicas eficientes. Minha jornada começou em 2018 como estagiário, onde construí a base que sustenta meu trabalho até hoje.

Ao longo da carreira, tive o privilégio de trabalhar em projetos importantes para grandes instituições de saúde, incluindo Hospital Israelita Albert Einstein e Rede Fleury. Essa experiência moldou minha abordagem para desenvolver soluções robustas e confiáveis.

Como contribuidor open source, me dedico a melhorar o ecossistema JavaScript/TypeScript criando bibliotecas e ferramentas que ajudam outros desenvolvedores. Acredito no poder do desenvolvimento colaborativo e na aprendizagem contínua.`,
		shortDescription:
			"Criando soluções elegantes através de código. Especializado em desenvolver aplicações web modernas com tecnologias de ponta e experiências de usuário excepcionais.",
		contact: {
			email: "contact@gabrieljs.dev",
			formAccessKey: "81309db0-39fb-4bb6-8738-4dae02fcbd40",
		},
		social: {
			linkedin: "https://www.linkedin.com/in/gabrieldjs21/",
			github: "https://github.com/gabrieljsilva",
			website: "https://gabrieljs.dev",
		},
		location: {
			city: "Senhor do Bonfim",
			state: "Bahia",
			country: "Brasil",
		},
		navigation: [
			{ key: "Home", title: "Início", href: "/#home" },
			{ key: "About", title: "Sobre", href: "/#about" },
			{ key: "Projects", title: "Projetos", href: "/#projects" },
			{ key: "Experiences", title: "Experiências", href: "/#experiences" },
			{ key: "Skills", title: "Habilidades", href: "/#skills" },
			{ key: "Blog", title: "Blog", href: "/blog" },
		],
		skillsSet: [
			{
				category: "Back-end",
				description:
					"Desenvolvimento de microsserviços escaláveis que lidam com mais de 10k RPM. Expertise em Node.js e TypeScript permitiu otimizar tempos de resposta de APIs mantendo padrões de arquitetura limpa.",
				skills: [
					{
						name: "JavaScript",
						description: "Domínio de recursos ES6+ e programação assíncrona",
					},
					{
						name: "TypeScript",
						description: "Tipagem forte e padrões avançados",
					},
					{ name: "Node.js", description: "Runtime server-side eficiente" },
					{ name: "Nest.js", description: "Framework estruturado e escalável" },
					{ name: "GraphQL", description: "Desenvolvimento de APIs GraphQL" },
					{
						name: "Express",
						description: "Framework robusto para APIs RESTful",
					},
				],
			},
			{
				category: "Front-end",
				description:
					"Entreguei mais de 15 interfaces responsivas usando React. Foco em otimização de performance, reduzindo tempo de carregamento inicial em 40% através de code splitting e lazy loading.",
				skills: [
					{ name: "HTML", description: "Estrutura semântica e acessibilidade" },
					{ name: "CSS", description: "Estilização criativa e animações" },
					{ name: "React", description: "UI dinâmica baseada em componentes" },
					{
						name: "Tailwind",
						description: "Desenvolvimento rápido com utility classes",
					},
					{
						name: "Material UI",
						description: "Design moderno com princípios Material",
					},
				],
			},
			{
				category: "Banco de Dados",
				description:
					"Projetei modelos de dados para mais de 8 sistemas em produção. Implementei cache com Redis que reduziu chamadas ao banco em 70% em plataformas de e-commerce de alto tráfego.",
				skills: [
					{ name: "MySQL", description: "Expertise em bancos relacionais" },
					{
						name: "PostgreSQL",
						description: "Recursos SQL avançados e confiabilidade",
					},
					{ name: "MongoDB", description: "Soluções NoSQL flexíveis" },
					{
						name: "Redis",
						description: "Armazenamento in-memory de alta performance",
					},
					{ name: "SQLite", description: "Banco de dados leve e eficiente" },
				],
			},
			{
				category: "Infraestrutura & DevOps",
				description:
					"Automatizei pipelines de deploy reduzindo ciclos de release de dias para horas. Containerizei mais de 12 serviços melhorando consistência de ambientes de desenvolvimento.",
				skills: [
					{ name: "Docker", description: "Containerização para consistência" },
					{
						name: "CI/CD",
						description: "Pipelines de desenvolvimento eficientes",
					},
					{ name: "AWS", description: "Gerenciamento de infraestrutura cloud" },
				],
			},
			{
				category: "Arquitetura",
				description:
					"Projetei sistemas orientados a eventos processando mais de 1M de eventos diários. Implementações com Kafka reduziram acoplamento do sistema enquanto melhoravam tolerância a falhas.",
				skills: [
					{ name: "Kafka", description: "Event streaming escalável" },
					{ name: "RabbitMQ", description: "Message brokering confiável" },
					{ name: "AWS", description: "Cloud message queuing" },
				],
			},
			{
				category: "Metodologias & Qualidade",
				description:
					"Liderei times ágeis entregando mais de 30 sprints com taxa de conclusão de 95%. Implementei testes com Jest alcançando 85% de cobertura em serviços críticos.",
				skills: [
					{
						name: "Agile",
						description: "Desenvolvimento iterativo e flexível",
					},
					{
						name: "Testes",
						description: "Testes automatizados e garantia de qualidade",
					},
				],
			},
		],
		projects: [
			{
				id: 1,
				title: "Plataforma de E-commerce",
				description:
					"Solução fullstack para e-commerce com gestão de estoque em tempo real",
				image: "/placeholder.svg",
				technologies: ["Next.js", "TypeScript", "Postgresql", "Prisma"],
			},
			{
				id: 2,
				title: "Dashboard de Mídias Sociais",
				description:
					"Plataforma de analytics e gestão de conteúdo em tempo real",
				technologies: ["React", "Firebase", "TailwindCSS", "TypeScript"],
			},
			{
				id: 3,
				title: "App de Gestão de Tarefas",
				description: "Ferramenta colaborativa com atualizações em tempo real",
				image: "/placeholder.svg",
				technologies: ["Next.js", "MongoDB", "Node.js", "TypeScript"],
			},
			{
				id: 4,
				title: "Website de Portfólio",
				description: "Portfólio moderno com gestão dinâmica de conteúdo",
				technologies: ["React", "TailwindCSS", "TypeScript", "Prisma"],
			},
			{
				id: 5,
				title: "Plataforma de Conteúdo com IA",
				description: "Plataforma de geração de conteúdo powered by AI",
				image: "/placeholder.svg",
				technologies: ["Next.js", "TypeScript", "MongoDB", "Node.js"],
			},
		],
		experiences: [
			{
				id: 1,
				company: "Tech Solutions Inc",
				role: "Desenvolvedor Frontend Sênior",
				startDate: "Jan 2023",
				description:
					"Liderança no desenvolvimento de aplicações web de alto impacto com foco em otimização de performance e acessibilidade",
				detailedDescription:
					"Liderança técnica no desenvolvimento de aplicações web corporativas com foco em performance, acessibilidade e experiência do usuário. Implementação de arquiteturas frontend modernas usando React e Next.js, resultando em maior engajamento e tempos de carregamento mais rápidos.",
				achievements: [
					"Redução de 60% no tempo de carregamento através de dynamic imports e code splitting",
					"Liderança de equipe de 5 desenvolvedores na entrega de plataforma de saúde",
					"Implementação de testes automatizados com 90% de cobertura de código",
					"Mentoria de desenvolvedores juniores e condução de entrevistas técnicas",
				],
				technologies: [
					{ name: "React" },
					{ name: "Next.js" },
					{ name: "TypeScript" },
					{ name: "Tailwind CSS" },
					{ name: "GraphQL" },
				],
			},
			{
				id: 2,
				company: "Digital Innovations Co",
				role: "Desenvolvedor Full Stack",
				startDate: "Mar 2021",
				endDate: "Dez 2022",
				description:
					"Desenvolvimento e manutenção de aplicações full stack em colaboração com times multifuncionais",
				detailedDescription:
					"Papel chave no desenvolvimento e manutenção de aplicações full stack em colaboração com times multifuncionais. Especialização em implementação de APIs RESTful, otimização de queries e criação de interfaces responsivas.",
				achievements: [
					"Desenvolvimento de sistema de processamento de pagamentos de alta performance",
					"Redução de 40% no tempo de resposta de APIs através de otimização de queries",
					"Implementação de sistema de sincronização de dados em tempo real",
				],
				technologies: [
					{ name: "React" },
					{ name: "Node.js" },
					{ name: "PostgreSQL" },
					{ name: "Express" },
					{ name: "AWS" },
				],
			},
			{
				id: 3,
				company: "Creative Tech Labs",
				role: "Desenvolvedor Frontend",
				startDate: "Jun 2019",
				endDate: "Fev 2021",
				description:
					"Desenvolvimento de aplicações web responsivas e implementação de designs UI/UX",
				detailedDescription:
					"Foco na criação de aplicações web responsivas e intuitivas em colaboração com designers para implementação de interfaces pixel-perfect. Especialização em desenvolvimento frontend com frameworks JavaScript modernos.",
				achievements: [
					"Desenvolvimento e manutenção de 3 grandes projetos para clientes",
					"Implementação de sistema de design responsivo usado em 10+ projetos",
					"Redução de 45% em relatos de bugs através de testes abrangentes",
				],
				technologies: [
					{ name: "React" },
					{ name: "JavaScript" },
					{ name: "CSS3" },
					{ name: "HTML5" },
					{ name: "Redux" },
				],
			},
		],

		footer: {
			quote: {
				text: "Qualquer um pode escrever código que um computador entenda. Bons programadores escrevem código que humanos entendem.",
				author: "Martin Fowler",
			},
			copyright: "© 2025. Todos os direitos reservados.",
		},
		posts: [
			{
				id: 1,
				title: "Entendendo o Básico do TypeScript",
				content:
					"TypeScript é uma linguagem fortemente tipada que adiciona tipos opcionais ao JavaScript, proporcionando melhores ferramentas em qualquer escala. Compila para JavaScript padrão e legível. Neste guia completo, exploraremos os conceitos fundamentais do TypeScript e como ele pode melhorar seu fluxo de trabalho de desenvolvimento.",
				date: new Date("2024-02-15"),
				tags: ["TypeScript", "Programação", "Desenvolvimento Web"],
				views: 1234,
			},
			{
				id: 2,
				title: "O Futuro do Desenvolvimento Web com Next.js",
				content:
					"Next.js revolucionou o desenvolvimento web ao combinar React com server-side rendering. Exploraremos os novos recursos como App Router e server components, e seu impacto no futuro do desenvolvimento web.",
				date: new Date("2024-02-18"),
				tags: ["Next.js", "React", "Desenvolvimento Web"],
				views: 856,
			},
			{
				id: 3,
				title: "Dominando CSS Grid Layout",
				content:
					"CSS Grid Layout é uma ferramenta poderosa para criar layouts complexos com menos markup. Este guia cobre desde conceitos básicos até técnicas avançadas de design responsivo.",
				date: new Date("2024-02-20"),
				tags: ["CSS", "Web Design", "Frontend"],
				views: 2341,
			},
			{
				id: 4,
				title: "Guia Completo de React Server Components",
				content:
					"React Server Components representam uma nova abordagem para renderização server-side mantendo a interatividade. Exploraremos seus benefícios, casos de uso e melhores práticas.",
				date: new Date("2024-02-21"),
				tags: ["React", "Server Components", "Performance"],
				views: 1567,
			},
			{
				id: 5,
				title: "Otimizando Consultas de Banco de Dados",
				content:
					"A otimização de bancos de dados é crucial para performance e escalabilidade. Este artigo explora técnicas como indexação, planejamento de queries e caching.",
				date: new Date("2024-02-22"),
				tags: ["Banco de Dados", "Performance", "Backend"],
				views: 987,
			},
			{
				id: 6,
				title: "Construindo Aplicações Web Acessíveis",
				content:
					"Acessibilidade web é essencial para inclusão digital. Este guia cobre princípios como atributos ARIA, navegação por teclado e HTML semântico.",
				date: new Date("2024-02-23"),
				tags: ["Acessibilidade", "Desenvolvimento Web", "UI/UX"],
				views: 654,
			},
			{
				id: 7,
				title: "Introdução à Arquitetura de Microsserviços",
				content:
					"A arquitetura de microsserviços permite aplicações escaláveis e mantíveis. Exploraremos seus princípios, benefícios e desafios na implementação.",
				date: new Date("2024-02-24"),
				tags: ["Microsserviços", "Arquitetura", "Backend"],
				views: 432,
			},
		],
	},
};
