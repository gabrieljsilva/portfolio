---
slug: redesign-modernist
title: Redesign do portfólio sobre o design system Modernist
state: execution
created: 2026-09-01
updated: 2026-09-01
---

## Contexto de negócio

O portfólio em produção (`gabrieljs.dev`) está desatualizado em conteúdo e em visual. O
conteúdo ainda descreve o Gabriel como "Software Developer" com "mais de 5 anos" no
Hospital Israelita Albert Einstein, quando hoje ele é Engenheiro de Software na Sami Saúde,
tem mais de 6 anos de carreira e mantém um SaaS próprio (Untimeless AI). O visual é o padrão
shadcn/neutral com Inter e cantos arredondados, sem identidade própria.

Foi produzido um protótipo em Claude Design — projeto **"Redesign de portfólio com IA"**,
na raiz do repositório — sobre o design system **Modernist**. Ele é a especificação desta
tarefa: define layout, tipografia, tokens, conteúdo PT/EN e comportamento das três
superfícies.

### Fontes de verdade

| Superfície | Arquivo do protótipo |
| --- | --- |
| Portfólio | `Redesign de portfólio com IA/Portfólio.dc.html` |
| Link tree | `Redesign de portfólio com IA/Links.dc.html` |
| Currículo (PDF) | `Redesign de portfólio com IA/Currículo.dc.html` |
| Tokens do design system | `Redesign de portfólio com IA/_ds/modernist-*/styles.css` |

Referência **visual** do currículo: `uploads/currículo - Gabriel de Jesus Silva.docx.pdf`
— A4, margem 2,5cm, Helvetica ~11pt, títulos de seção em caixa alta, marcador `●`,
nota da empresa em itálico.

Esse anexo é um **recorte**: nasce de um `.docx` vivo que o Gabriel ajusta a cada vaga,
enxugando o que não interessa àquela candidatura. O PDF do site é estático e serve como
registro completo — deve conter **tudo**. Por isso o conteúdo vem do protótipo, que é o
superconjunto: inclui CAMEJA (09/2019–02/2020) e Newtic (12/2018–01/2019), a linha
"Inteligência Artificial" nas qualificações, e a Untimeless descrita com Meet/Teams/Zoom
e servidor MCP. Cargo na Sami Saúde: **Engenheiro de Software**.

Em resumo: **layout do anexo, conteúdo do protótipo.**

### Valor entregue

Um portfólio que representa o posicionamento atual — engenharia de software com foco em
IA aplicada (RAG, MCP, agentes) — com identidade visual própria, bilíngue e com as
preferências do visitante preservadas entre visitas.

### Decisões de produto tomadas no refinamento

1. **Currículo continua sendo download de `.pdf`.** O protótipo virou o currículo numa
   página HTML imprimível; foi decidido manter o comportamento atual (botão baixa o
   arquivo). O layout e o conteúdo do protótipo passam a ser o layout e o conteúdo do
   documento gerado. Não há rota `/curriculo`.
2. **Blog sai.** A rota `/blog` e sua entrada de navegação são removidas.
3. **Formulário de contato sai.** O modal com formulário e a server action de submissão
   são removidos; o contato passa a ser um CTA `mailto:` mais o botão de currículo.

### Fora de escopo

- A seção de métricas (19% → 53%, 10 min → 30 s) existe nos dados do protótipo mas **não é
  renderizada** por ele. Os números continuam aparecendo dentro dos textos do projeto
  Samira e da experiência na Sami Saúde.
- Blog e formulário de contato (removidos, ver acima).

### Personas

**Visitante** — recrutador, cliente em potencial ou pessoa desenvolvedora. Chega pelo link
tree (`/links`, divulgado em redes sociais) ou direto no portfólio (`/`). Pode ler em
português ou em inglês. Não há autenticação nem papéis: todo mundo vê tudo.

O projeto não tem glossary de personas; esta é inline.

## Comportamento esperado

### Identidade visual (as três superfícies)

- Tipografia Archivo (títulos em peso 600–800, corpo em 400), cantos retos, paleta de
  tokens do Modernist: fundo `#f3f2f2`, texto `#201e1d` no claro; fundo `#1b1a19`,
  texto `#f0eeec` no escuro.
- Tema claro/escuro alternável por botão, com transição suave.
- Idioma alternável entre PT e EN por um seletor segmentado.
- Idioma e tema ficam guardados no navegador e valem para as duas páginas.

### Portfólio (`/`)

Cabeçalho fixo com o nome, navegação âncora (Sobre, Projetos, Experiência, Habilidades,
Contato), seletor PT/EN, botão de tema e botão de currículo. Abaixo de 980px a navegação
vira menu sanduíche.

Seções, nesta ordem:

1. **Hero** — rótulo "Engenheiro de Software", título que se digita sozinho alternando
   entre três frases, parágrafo de apresentação e dois CTAs (ver projetos / falar comigo).
2. **Untimeless AI** — bloco destacado com selo "Produto próprio · SaaS", descrição,
   etiquetas, lista numerada de cinco capacidades e link para `untimeless.com`.
3. **Sobre** — três parágrafos de trajetória, etiquetas de fatos e retrato colorido com
   legenda de localização.
4. **Projetos** — grade de oito cards (tipo, ano, nome, descrição, etiquetas de stack).
   Card só mostra "Acessar" quando o projeto tem link público.
5. **Experiência** — lista de seis empresas em acordeão. Fechado mostra empresa, cargo e
   período; aberto revela resumo, realizações e stack.
6. **Formação** — dois registros com curso, instituição, nível, período e situação.
7. **Habilidades** — sete grupos, cada um com suas tecnologias em etiquetas.
8. **Links** — cards para GitHub, LinkedIn, e-mail, telefone e untimeless.com.
9. **Contato** — bloco em cores invertidas com CTA de e-mail e botão de currículo.
10. **Rodapé** — copyright e citação do Martin Fowler.

### Link tree (`/links`)

Página centrada com fundo pontilhado: retrato colorido, nome, cargo, bio curta,
cinco links (LinkedIn, GitHub, Instagram, site, e-mail) cada um com ícone, rótulo e valor,
botão "Ver portfólio completo" e o copyright. Seletor de idioma e tema no canto superior
direito.

### Currículo (PDF)

Baixado pelo botão "Currículo" do cabeçalho ou pelo botão do bloco de contato, no idioma
que estiver ativo na tela. Documento A4 com margem de 2,5cm, Helvetica ~11pt, contendo:
cabeçalho de identificação (nome, cargo, data de nascimento, cidade, telefone, e-mail,
LinkedIn, site, GitHub), Resumo profissional com três parágrafos e quatro resultados,
Formação acadêmica, Experiência profissional (seis empresas), Projetos independentes
(Untimeless) e Cursos e qualificações.

## Testes de aceitação

```
Feature: Conhecer o profissional pelo portfólio
  As a visitante
  I want to ler a trajetória, os projetos e a stack do Gabriel
  So que eu consiga avaliar se ele resolve o meu problema

  Scenario: Chegar no portfólio pela primeira vez
    Given que eu nunca visitei o portfólio
    When eu abro a página inicial
    Then eu vejo o cargo "Engenheiro de Software" e a apresentação dele
    And o título principal alterna sozinho entre frases diferentes
    And eu consigo alcançar Sobre, Projetos, Experiência, Habilidades e Contato

  Scenario: Ver o produto próprio em destaque
    Given que eu estou no portfólio
    When eu percorro a página
    Then eu encontro o Untimeless AI apresentado como produto próprio
    And eu vejo as cinco capacidades da plataforma
    And eu consigo abrir untimeless.com
```

```
Feature: Explorar a experiência profissional
  As a visitante
  I want to abrir só as experiências que me interessam
  So que eu leia o detalhe sem percorrer tudo

  Scenario: Abrir uma experiência
    Given que eu estou na seção de experiência
    And todas as empresas estão fechadas
    When eu escolho a Sami Saúde
    Then eu vejo o resumo, as realizações e a stack daquela passagem

  Scenario: Abrir mais de uma experiência
    Given que eu já abri a Sami Saúde
    When eu escolho também o Hospital Israelita Albert Einstein
    Then as duas continuam abertas
```

```
Feature: Acessar um projeto
  As a visitante
  I want to abrir o projeto que me chamou atenção
  So que eu veja o trabalho de perto

  Scenario: Projeto com link público
    Given que eu estou na seção de projetos
    When eu olho o Untimeless AI
    Then existe uma ação para acessar o projeto

  Scenario: Projeto sem link público
    Given que eu estou na seção de projetos
    When eu olho a Samira, da Sami Saúde
    Then eu leio a descrição e a stack
    And não existe ação para acessar, porque o sistema é interno
```

```
Feature: Ler no meu idioma
  As a visitante
  I want to escolher entre português e inglês
  So que eu leia com conforto

  Scenario: Idioma sugerido pelo navegador
    Given que eu nunca escolhi um idioma neste site
    And meu navegador está em inglês
    When eu abro o portfólio
    Then o conteúdo aparece em inglês

  Scenario: Trocar de idioma
    Given que eu estou lendo o portfólio em português
    When eu escolho inglês
    Then todo o conteúdo passa para inglês

  Scenario: Idioma preservado entre visitas
    Given que eu escolhi inglês no portfólio
    When eu volto ao site depois
    Then o conteúdo continua em inglês

  Scenario: Idioma compartilhado entre as páginas
    Given que eu escolhi inglês no link tree
    When eu abro o portfólio completo
    Then o conteúdo aparece em inglês
```

```
Feature: Escolher o tema
  As a visitante
  I want to ler no claro ou no escuro
  So que a leitura não me canse

  Scenario: Tema sugerido pelo sistema
    Given que eu nunca escolhi um tema neste site
    And meu sistema está no modo escuro
    When eu abro o portfólio
    Then a página aparece no tema escuro

  Scenario: Tema preservado entre visitas
    Given que eu escolhi o tema claro
    When eu volto ao site depois
    Then a página continua no tema claro
```

```
Feature: Levar o currículo
  As a recrutador
  I want to baixar o currículo em PDF
  So que eu anexe ao meu processo seletivo

  Scenario: Baixar em português
    Given que eu estou lendo o portfólio em português
    When eu peço o currículo
    Then um arquivo PDF é baixado
    And o conteúdo dele está em português

  Scenario: Baixar em inglês
    Given que eu estou lendo o portfólio em inglês
    When eu peço o currículo
    Then um arquivo PDF é baixado
    And o conteúdo dele está em inglês

  Scenario: Conteúdo do currículo
    Given que eu baixei o currículo
    When eu abro o arquivo
    Then eu encontro identificação, resumo profissional com resultados,
      formação acadêmica, as seis experiências profissionais,
      o projeto independente Untimeless e as qualificações
```

```
Feature: Chegar pelo link tree
  As a visitante vindo de uma rede social
  I want to encontrar rapidamente os canais do Gabriel
  So que eu escolha por onde falar com ele

  Scenario: Ver os canais
    Given que eu abri o link tree
    Then eu vejo o retrato, o nome, o cargo e a bio curta
    And eu vejo LinkedIn, GitHub, Instagram, site e e-mail

  Scenario: Seguir para o portfólio
    Given que eu abri o link tree
    When eu escolho ver o portfólio completo
    Then eu chego no portfólio
```

```
Feature: Falar com o Gabriel
  As a visitante interessado
  I want to abrir um contato direto
  So que eu comece a conversa

  Scenario: Contato por e-mail
    Given que eu estou na seção de contato
    When eu escolho o endereço de e-mail
    Then meu cliente de e-mail abre uma mensagem para contato@gabrieljs.dev
```

## Plano técnico

### Stack e restrições descobertas

- `next.config.mjs` usa `output: "export"`. O site é **estático**: nada de server action,
  route handler ou middleware. Toda interatividade é cliente.
- O mesmo arquivo tem `typescript.ignoreBuildErrors: true` — o build não falha em erro de
  tipo — e tenta importar `./v0-user-next.config`, que não existe (resíduo do scaffold do
  v0, engolido por um `try/catch`). Ambos saem.
- `components/ui/` tem 50 arquivos de shadcn; só 13 são importados fora da própria pasta.
  Tudo sai.
- `styles/globals.css` é cópia morta de `app/globals.css`. Ninguém importa.

### Design system

Os tokens do Modernist vivem em `Redesign de portfólio com IA/_ds/modernist-*/styles.css`.
Vão para `app/globals.css` como variáveis CSS e são expostos ao Tailwind pelo
`tailwind.config.ts`:

| Token | Claro | Escuro |
| --- | --- | --- |
| `--color-bg` | `#f3f2f2` | `#1b1a19` |
| `--color-surface` | `#eae9e9` | `#232221` |
| `--color-text` | `#201e1d` | `#f0eeec` |
| `--line` | `text/16%` | `text/15%` |
| `--line-strong` | `text/30%` | `text/26%` |
| `--muted` | `text/58%` | `text/55%` |

Mais `--soft: 4px` (raio único) e `--ease: cubic-bezier(.22,1,.36,1)`.

O protótipo alterna tema por `html[data-theme="dark"]`; aqui fica `.dark` na raiz, que é o
que o `next-themes` já faz com `attribute="class"` e o que o `darkMode: ["class"]` do
Tailwind espera. Sem mudança de biblioteca.

Tipografia: Archivo pelo `next/font/google`, que no build estático baixa e auto-hospeda os
arquivos — sem chamada ao `fonts.googleapis.com` em runtime. Substitui o Inter.

As animações do protótipo (`pageIn`, `panelIn`, `caret`, `accOpen`, `accInner`) viram
keyframes do Tailwind. `framer-motion` sai: o protótipo não usa nenhuma animação que exija
JS.

### Idioma por rota

Quatro rotas pré-renderizadas, cada uma um arquivo fino sobre um componente compartilhado:

| Rota | Idioma | Renderiza |
| --- | --- | --- |
| `/` | pt-br | `<PortfolioPage lang="pt-br" />` |
| `/en` | en | `<PortfolioPage lang="en" />` |
| `/links` | pt-br | `<LinksPage lang="pt-br" />` |
| `/en/links` | en | `<LinksPage lang="en" />` |

`contexts/language-context.tsx` sai. No lugar entra `lib/i18n.ts` com o tipo `Lang`, um
`getTranslations(lang)` síncrono e helpers de rota (`localizedPath`, `alternatePath`). As
seções recebem `t` por props, o que mantém a maior parte da árvore como Server Component —
só o cabeçalho, o acordeão de experiência, o efeito de digitação, o botão de tema e o botão
de currículo precisam de `"use client"`.

**Redirecionamento de primeira visita.** Script inline e bloqueante no `<head>` do layout,
antes de qualquer paint. Age **apenas** quando o caminho é `/` ou `/links` e não existe
preferência salva:

```
pref = localStorage["gjs.lang"]
se pref existe            → respeita, não redireciona
senão se navigator.language começa com "en" → location.replace("/en" + path)
```

Escolher idioma no seletor grava `gjs.lang` e navega, então ninguém é redirecionado duas
vezes. Como isso cria dois caminhos para o mesmo conteúdo, cada página declara
`alternates.canonical` e `alternates.languages` no `metadata` do Next, para o buscador não
tratar `/` e `/en` como duplicata.

O tema continua com o script do próprio `next-themes` (`suppressHydrationWarning` já está
no `<html>`).

### Conteúdo

`constants/translations/{pt-br,en}` são reescritos na forma do protótipo, com dois ramos:

- `site` — `nav`, `hero` (incl. `rotating`), `untimeless`, `about`, `work`, `experience`,
  `education`, `skills`, `links`, `contact`, `footer`.
- `resume` — conteúdo do `Currículo.dc.html`, mais longo e em outro registro. Não dá para
  derivar de `site`: as realizações do currículo são frases completas, as do site são
  resumos.

`constants/profile.tsx` deixa de exportar o hook `useTranslations()` (que lia o contexto) e
passa a expor `getTranslations(lang)`.

### Currículo em PDF

`lib/generate-resume.tsx` vira `lib/resume/resume-document.tsx`, reescrito sobre o ramo
`resume` das traduções e sobre o layout do anexo:

- A4, margens de 2,5cm nos quatro lados (70,87pt).
- Helvetica — fonte embutida no `@react-pdf/renderer`, sem `Font.register`. Os TTFs de
  Roboto em `public/fonts/` param de ser usados e saem (~60 arquivos).
- Corpo 11pt, entrelinha 1,35. Nome em negrito 14pt, cargo abaixo em corpo normal.
- Títulos de seção em negrito 11pt, caixa alta.
- Marcador `●` em 8pt, recuo de 22pt, texto alinhado à esquerda; parágrafos do resumo
  justificados.
- Nota da empresa (ex.: "Empresa de soluções e serviços de tecnologia") em itálico.
- E-mail, LinkedIn, site e GitHub como `<Link>` clicável.
- `wrap={false}` por bloco de emprego, para nenhuma empresa quebrar entre páginas.

`lib/download-resume.ts` passa a receber o idioma e nomear o arquivo por ele
(`Gabriel_Silva_Curriculo.pdf` / `Gabriel_Silva_Resume.pdf`).

O `@react-pdf/renderer` é pesado (~500 kB). O botão de currículo importa o documento por
`import()` dinâmico no clique, para não entrar no bundle inicial das páginas.

### Ícones

Os SVGs desenhados à mão do protótipo são descartados. `constants/icons.ts` é estendido com
o que o redesign precisa, usando as libs já instaladas: `SiInstagram` (react-icons) e
`Globe`, `Phone`, `ChevronDown`, `ArrowUpRight`, `Menu`, `X`, `Sun`, `Moon` (lucide-react).
O mapa `tech` existente cobre as etiquetas de stack.

### Componentes

Primitivos próprios, pequenos, em `components/ui/` (pasta esvaziada e repovoada):
`Tag`, `LinkCard`, `SectionHeading`, `DottedBackdrop`, `SegmentedControl`.

Seções em `components/sections/`, uma por bloco do protótipo. O acordeão de experiência
controla o conjunto aberto com `useState<Set<number>>` — o protótipo permite mais de um
aberto ao mesmo tempo, e o cenário de aceitação exige isso.

O efeito de digitação (`components/typewriter.tsx`) é reescrito: recebe as frases por prop,
usa um único `useEffect` (timer é sistema externo — o caso que o CLAUDE.md admite) e renderiza
um "ghost" invisível com o resto da palavra em curso, que reserva a largura e impede o `h1`
de pular de linha a cada caractere.

`prefers-reduced-motion` desliga a digitação e as animações de entrada.

### Fora de escopo

Error Boundary e Suspense por ilha de UI: o site é estático, sem data fetching e sem estado
remoto — não há falha para isolar. Sem baseline, fora de escopo.

### Ordem de execução

1. Tokens e base — `globals.css`, `tailwind.config.ts`, `layout.tsx`, fonte Archivo.
2. `lib/i18n.ts` e as traduções PT/EN nos dois ramos.
3. Primitivos de UI e ícones.
4. Seções do portfólio, na ordem do protótipo.
5. Rotas (`/`, `/en`, `/links`, `/en/links`) e o script de redirecionamento.
6. Currículo em PDF.
7. Remoção do shadcn, do código morto e das dependências órfãs.
8. `tsc --noEmit` + `next build`.

A limpeza vem depois das telas de propósito: enquanto as seções não estiverem prontas, os
arquivos antigos servem de referência viva do conteúdo.

## Arquivos

### Criar

- `app/en/page.tsx` — rota do portfólio em inglês.
- `app/en/links/page.tsx` — rota do link tree em inglês.
- `components/portfolio-page.tsx` — composição das dez seções, recebe `lang`.
- `components/links-page.tsx` — composição do link tree, recebe `lang`.
- `components/sections/site-header.tsx` — cabeçalho fixo com navegação, seletores e currículo.
- `components/sections/untimeless.section.tsx` — bloco do produto próprio.
- `components/sections/education.section.tsx` — formação acadêmica no layout novo.
- `components/sections/links.section.tsx` — grade de canais dentro do portfólio.
- `components/sections/contact.section.tsx` — bloco de contato em cores invertidas.
- `components/language-toggle.tsx` — seletor PT/EN que navega entre as rotas e grava a preferência.
- `components/resume-button.tsx` — botão que carrega o gerador de PDF sob demanda.
- `components/ui/tag.tsx` — etiqueta em pílula com borda.
- `components/ui/link-card.tsx` — card de link com ícone, rótulo, valor e seta.
- `components/ui/section-heading.tsx` — rótulo em caixa alta + título da seção.
- `components/ui/dotted-backdrop.tsx` — fundo pontilhado com máscara radial.
- `components/ui/segmented-control.tsx` — controle segmentado de duas opções.
- `lib/i18n.ts` — tipo `Lang`, `getTranslations`, helpers de rota.
- `lib/resume/resume-document.tsx` — documento react-pdf no layout do anexo.

### Alterar

- `app/layout.tsx` — Archivo, script de idioma, remoção do `LanguageProvider`, do `Toaster` e do `LanguageSwitcher` global.
- `app/globals.css` — tokens do Modernist no lugar dos do shadcn.
- `app/page.tsx` — passa a delegar para `PortfolioPage` em pt-br.
- `app/links/page.tsx` — passa a delegar para `LinksPage` em pt-br.
- `tailwind.config.ts` — cores, raio, fonte e keyframes do Modernist; remoção dos tokens de sidebar/chart.
- `next.config.mjs` — remove `ignoreBuildErrors` e o import do `v0-user-next.config`.
- `package.json` — remove as dependências órfãs.
- `constants/icons.ts` — acrescenta os ícones do redesign.
- `constants/profile.tsx` — `useTranslations()` vira `getTranslations(lang)`.
- `constants/translations/pt-br/pt.br.ts` — reescrito com os ramos `site` e `resume`.
- `constants/translations/en/en.ts` — idem.
- `components/theme-toggle.tsx` — visual do protótipo, sem o `Button` do shadcn.
- `components/typewriter.tsx` — reescrito para frases rotativas com caret e ghost.
- `components/sections/hero.tsx` — layout novo, sem o modal de contato.
- `components/sections/about.section.tsx` — layout de duas colunas com retrato.
- `components/sections/projects.section.tsx` — grade de cards do protótipo.
- `components/sections/experiences.section.tsx` — acordeão de múltipla abertura.
- `components/sections/skill.section.tsx` — grupos em linhas divididas.
- `components/sections/footer.section.tsx` — copyright e citação.
- `lib/download-resume.ts` — recebe idioma, nomeia o arquivo por ele.

### Excluir

- `app/blog/` — blog removido do escopo.
- `app/actions.ts` — server action do formulário; nem rodaria em `output: "export"`.
- `components/contact-modal.tsx` — formulário substituído por CTA `mailto:`.
- `components/language-switcher.tsx` — substituído pelo seletor por rota.
- `components/sections/navbar.tsx` — substituído por `site-header.tsx`.
- `components/sections/academic-background.section.tsx` — substituído por `education.section.tsx`.
- `components/academic-card.tsx`, `components/project-card.tsx`, `components/social-link.tsx`,
  `components/tech-badge.tsx`, `components/thumbnail.tsx`, `components/icon-button.tsx`,
  `components/loading-button.tsx` — cards e botões do visual antigo.
- `components/types.ts` — `Project` some junto com a seção que o usava.
- `components/ui/` (50 arquivos) — shadcn removido; a pasta é repovoada com os primitivos novos.
- `hooks/use-toast.ts`, `hooks/use-mobile.tsx` — só serviam ao shadcn.
- `contexts/language-context.tsx` — idioma passa a vir da rota.
- `styles/globals.css` — duplicata morta.
- `lib/generate-resume.tsx` — vira `lib/resume/resume-document.tsx`.
- `public/fonts/roboto/` — o PDF passa a usar a Helvetica embutida na lib.

### Dependências removidas

`@radix-ui/*` (28 pacotes), `@hookform/resolvers`, `class-variance-authority`, `cmdk`,
`date-fns`, `embla-carousel-react`, `framer-motion`, `input-otp`, `react-day-picker`,
`react-hook-form`, `react-resizable-panels`, `recharts`, `sonner`, `vaul`, `zod`.

Ficam: `next`, `react`, `react-dom`, `next-themes`, `lucide-react`, `react-icons`, `clsx`,
`tailwind-merge`, `@react-pdf/renderer`, `tailwindcss`, `tailwindcss-animate`,
`autoprefixer`, `postcss`.

### Disclaimer de impactos

- **`/blog` passa a responder 404.** Se a rota estiver indexada, o host precisa de um
  redirect para `/`.
- **`/` deixa de ser a única URL do conteúdo.** Um visitante com navegador em inglês e sem
  preferência salva será mandado para `/en` antes do paint. `canonical` e `hreflang`
  mitigam o efeito no buscador, mas é uma mudança de comportamento observável.
- **`typescript.ignoreBuildErrors` sai.** Erros de tipo que hoje passam batido vão quebrar
  o build. É o objetivo, mas pode revelar problemas pré-existentes fora do escopo desta
  tarefa.
- **Remoção em massa de dependências** mexe no `yarn.lock`. Qualquer código não mapeado que
  dependa delas quebra — a varredura da fase de execução cobre isso.
- **Sem testes automatizados no projeto hoje.** Não há rede de segurança para regressão; a
  validação é `tsc --noEmit`, `next build` e conferência visual contra o protótipo.

## Execução

Plano executado. Validado com `tsc --noEmit`, `next build` e conferência visual das quatro
rotas contra o protótipo, mais o PDF gerado e comparado ao documento de referência.

### Desvios do plano

1. **Dois root layouts em vez de um.** O `<html lang>` precisa diferir por idioma e só o
   root layout renderiza essa tag. Virou `app/(pt-br)/layout.tsx` e `app/(en)/layout.tsx`
   (route groups, que não afetam a URL), ambos sobre `components/site-shell.tsx`. As quatro
   rotas e o comportamento são os do plano; muda só onde o `<html>` mora.
2. **`components/ui/segmented-control.tsx` não foi criado.** Seria usado uma única vez —
   virou parte de `components/language-toggle.tsx`.
3. **`constants/profile.tsx` guarda os dados não traduzíveis**, e `getTranslations(lang)`
   ficou em `lib/i18n.ts`. O plano previa o contrário; separar dado de máquina de idioma
   ficou mais limpo.
4. **`constants/icons.ts` foi reduzido, não estendido.** O protótipo não põe ícone nas
   etiquetas de stack, então os mapas `tech`, `categories`, `navigation` e `misc` ficaram
   sem uso. Sobrou `linkIcons`, com os seis ícones dos cards de link.
5. **`components.json` removido** — configuração da CLI do shadcn, morta com ele.
6. **`tailwindcss-animate` removido** também: as animações do protótipo viraram keyframes
   próprios no `tailwind.config.ts`.

### Defeitos encontrados e corrigidos durante a execução

- **`bg-bg/90` no cabeçalho gerava `rgba(0,0,0,0)`.** O Tailwind v3 não aplica o
  modificador de opacidade sobre cor declarada como `var(...)` cru. O cabeçalho ficava
  100% transparente. Trocado por `bg-[color:color-mix(...)]`.
- **`tailwind-merge` engolia o `border` no botão do bloco de contato**, ao combiná-lo com
  `border-[color-mix(...)]` — que ele lê como largura arbitrária. A borda sumia. Resolvido
  com `border-[1px]` mais o type hint `border-[color:...]`.
- **Retratos saíam em preto e branco.** O protótipo aplica `grayscale(1) contrast(1.08)`
  no avatar das duas páginas; a pedido do usuário o filtro foi removido e a utilidade
  `.portrait` saiu do `globals.css`.
- **`.dot-field` vencia a classe de cor** no bloco de contato, deixando os pontos escuros
  sobre fundo escuro (invisíveis). `DottedBackdrop` passou a receber `color` inline.
- **O marcador `●` (U+25CF) não existe na Helvetica** embutida no `@react-pdf/renderer` e
  saía como `ĩ`. Trocado por `•` (U+2022), que está no WinAnsi.
- **`minPresenceAhead={40}` deixava "EXPERIÊNCIA PROFISSIONAL" órfão** no rodapé da
  página 1. Subiu para 120.

### Pendências para o usuário decidir

Assets que ficaram órfãos mas **não** estavam na lista de exclusão do plano, então foram
mantidos:

- `public/images/logo/` — 5 logos de empresas (hiae, redfox, takaoka, fleury, gohealth).
  O protótipo não exibe logo em lugar nenhum.
- `public/placeholder*.{jpg,png,svg}` — 4 arquivos, resíduo do scaffold do v0.
- `.DS_Store` na raiz, em `public/` e em `public/images/`.

### Resultado do build

Quatro rotas estáticas: `/`, `/en`, `/links`, `/en/links`. `tsc --noEmit` limpo,
`biome check` limpo, console do navegador sem erros nas quatro páginas.

## ADR

—

## Testes

—

## Observabilidade

—

## Self review

—

## Segurança

—

## Documentação

—

## Lint & build

—

## PR

—
