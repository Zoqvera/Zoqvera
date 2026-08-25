(() => {
  const STORAGE_KEY = 'zoqvera-language';
  const currentScript = document.currentScript;
  const ROOT = new URL('./', currentScript?.src || new URL('/i18n-core.js', window.location.origin).href);
  const supported = new Set(['pt', 'en']);

  const getQueryLanguage = () => {
    const value = new URLSearchParams(window.location.search).get('lang');
    return supported.has(value) ? value : null;
  };

  const getStoredLanguage = () => {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      return supported.has(value) ? value : null;
    } catch {
      return null;
    }
  };

  const language = getQueryLanguage() || getStoredLanguage() || 'pt';
  const dictionary = Object.create(null);

  const common = {
    'Zoqvera — página inicial': 'Zoqvera — home page',
    'Zoqvera — início': 'Zoqvera — home',
    'Navegação principal': 'Main navigation',
    'Navegação da página de serviço': 'Service page navigation',
    'Navegação do case': 'Case study navigation',
    'Navegação de Insights': 'Insights navigation',
    'Abrir menu': 'Open menu',
    'Fechar menu': 'Close menu',
    'Pular para o conteúdo principal': 'Skip to main content',
    'Início': 'Home',
    'Serviços': 'Services',
    'Projetos': 'Projects',
    'Portfólio': 'Portfolio',
    'Processo': 'Process',
    'Sobre': 'About',
    'Contato': 'Contact',
    'Solicitar orçamento': 'Request a quote',
    'Solicitar orçamento para um projeto': 'Request a quote for a project',
    'Ver serviços': 'View services',
    'Ver todos os serviços': 'View all services',
    'Mostrar menos': 'Show less',
    'Lista de serviços reduzida.': 'Service list collapsed.',
    'Todos os serviços estão visíveis.': 'All services are visible.',
    'Falar pelo WhatsApp': 'Chat on WhatsApp',
    'Fale no WhatsApp': 'Chat on WhatsApp',
    'Falar com a Zoqvera pelo WhatsApp': 'Chat with Zoqvera on WhatsApp',
    'Ver o que está incluído': 'See what is included',
    '← Serviços': '← Services',
    '← Portfólio': '← Portfolio',
    '← Voltar ao site': '← Back to site',
    'Voltar ao topo ↑': 'Back to top ↑',
    'Ver portfólio': 'View portfolio',
    'Ver portfólio →': 'View portfolio →',
    'Ver case →': 'View case →',
    'Ver projeto ↗': 'View project ↗',
    'Visitar projeto ↗': 'Visit project ↗',
    'Visitar site': 'Visit website',
    'Entender a solução': 'Understand the solution',
    'Ler artigo →': 'Read article →',
    'Ler guia →': 'Read guide →',
    'Ler artigo-pilar →': 'Read pillar article →',
    'Ler →': 'Read →',
    'Comparar →': 'Compare →',
    'Conhecer serviço →': 'Explore service →',
    'Solicitar orçamento →': 'Request a quote →',
    'Todos os Insights →': 'All Insights →',
    'Explorar todos os Insights →': 'Explore all Insights →',
    'Produto': 'Product',
    'Produtos': 'Products',
    'Serviço': 'Service',
    'Serviço relacionado': 'Related service',
    'Próximo passo': 'Next step',
    'Novo produto': 'New product',
    'Área': 'Area',
    'Público': 'Audience',
    'Experiência': 'Experience',
    'Operação': 'Operations',
    'Integrações': 'Integrations',
    'Integração': 'Integration',
    'Arquitetura': 'Architecture',
    'Dados': 'Data',
    'Interface': 'Interface',
    'Aplicação': 'Application',
    'Aplicações': 'Applications',
    'Qualidade': 'Quality',
    'Estrutura': 'Structure',
    'Interação': 'Interaction',
    'Conversão': 'Conversion',
    'Descoberta': 'Discovery',
    'Marca': 'Brand',
    'Busca': 'Search',
    'Carrinho': 'Cart',
    'Imagem': 'Image',
    'Categoria': 'Category',
    'Preço': 'Price',
    'Tamanho': 'Size',
    'Coleção': 'Collection',
    'Manifesto': 'Manifesto',
    'Conteúdo': 'Content',
    'Análise': 'Analysis',
    'Automação': 'Automation',
    'Automações': 'Automation',
    'Autenticação': 'Authentication',
    'Pagamentos': 'Payments',
    'Pagamento': 'Payment',
    'Banco de dados': 'Database',
    'Responsivo': 'Responsive',
    'Segurança': 'Security',
    'Modernização': 'Modernization',
    'Manutenção': 'Maintenance',
    'Performance': 'Performance',
    'Correções': 'Fixes',
    'Suporte': 'Support',
    'Atualizações': 'Updates',
    'Estratégia': 'Strategy',
    'Escopo': 'Scope',
    'Tecnologia': 'Technology',
    'Métricas': 'Metrics',
    'Visitantes': 'Visitors',
    'Indexação': 'Indexing',
    'Monitoramento': 'Monitoring',
    'Domínio': 'Domain',
    'Cartão': 'Card',
    'Reservas': 'Bookings',
    'Consultas': 'Appointments',
    'Aulas': 'Classes',
    'Documentos': 'Documents',
    'Painel privado': 'Private dashboard',
    'Regras de negócio': 'Business rules',
    'Navegador': 'Browser',
    'Apresentação': 'Presentation',
    'Vendas': 'Sales',
    'Credibilidade': 'Credibility',
    'Oferta': 'Offer',
    'Catálogo': 'Catalog',
    'Compartilhamento': 'Sharing',
    'Visual': 'Visual',
    'Plataformas': 'Platforms',
    'Plataforma': 'Platform',
    'Sites': 'Websites',
    'Softwares': 'Software',
    'Sistemas': 'Systems',
    'Inteligência Artificial': 'Artificial Intelligence',
    'IA': 'AI',
    'IA + DADOS': 'AI + DATA',
    'GESTÃO': 'MANAGEMENT',
    'SERVIÇOS': 'SERVICES',
    'MODA': 'FASHION',
    'PLATAFORMA': 'PLATFORM',
    'PLATAFORMA WEB': 'WEB PLATFORM',
    'E-mail (opcional)': 'Email (optional)',
    'Opcional': 'Optional',
    'Nome': 'Name',
    'Seu nome': 'Your name',
    'O que você quer desenvolver?': 'What do you want to build?',
    'Enviar projeto': 'Send project',
    'Ao enviar, abriremos o WhatsApp da Zoqvera com os dados do seu projeto.': 'When you submit, we will open Zoqvera on WhatsApp with your project details.',
    'Abrindo o WhatsApp para enviar os dados do seu projeto...': 'Opening WhatsApp with your project details...',
    'Continuar pelo WhatsApp': 'Continue on WhatsApp',
    'Nada é enviado automaticamente. O WhatsApp abrirá com uma mensagem pronta para você revisar antes do envio.': 'Nothing is sent automatically. WhatsApp will open with a prepared message for you to review before sending.',
    'Conte apenas o essencial para entendermos sua necessidade. Você não precisa chegar com um briefing completo nem saber qual solução técnica escolher.': 'Tell us only what is essential for understanding your need. You do not need a complete brief or to know which technical solution to choose.',
    'Conte o essencial sobre o projeto': 'Tell us the essentials about the project',
    'Usaremos seu WhatsApp apenas para responder a esta solicitação.': 'We will use your WhatsApp only to respond to this request.',
    'Qual solução parece mais próxima do que você precisa? *': 'Which solution seems closest to what you need? *',
    'Conte brevemente o que você precisa resolver *': 'Briefly tell us what you need to solve *',
    'Ex.: preciso apresentar meus serviços com mais profissionalismo e receber contatos pelo WhatsApp.': 'E.g.: I need to present my services more professionally and receive inquiries through WhatsApp.',
    '01 / ENCONTRE SUA SOLUÇÃO': '01 / FIND YOUR SOLUTION',
    'Comece pelo que você precisa resolver.': 'Start with what you need to solve.',
    'Você não precisa conhecer o nome técnico da solução. Escolha o objetivo mais próximo do seu momento.': 'You do not need to know the technical name of the solution. Choose the goal that best matches your current situation.',
    'Quero apresentar meu negócio melhor': 'I want to present my business better',
    'Sites profissionais, landing pages e páginas de vendas.': 'Professional websites, landing pages, and sales pages.',
    'Ver soluções para sites →': 'See website solutions →',
    'Quero vender pela internet': 'I want to sell online',
    'Loja virtual, pagamentos e estrutura de comércio digital.': 'Online store, payments, and digital commerce infrastructure.',
    'Ver solução para vendas →': 'See sales solution →',
    'Preciso digitalizar um processo': 'I need to digitize a process',
    'Sistemas, aplicações web e fluxos personalizados.': 'Systems, web applications, and custom workflows.',
    'Ver sistemas sob medida →': 'See custom systems →',
    'Quero automatizar ou usar IA': 'I want to automate or use AI',
    'Atendimento, conteúdo, análise e automações inteligentes.': 'Customer service, content, analysis, and intelligent automation.',
    'Ver soluções de IA →': 'See AI solutions →',
    'Meu site ou sistema precisa evoluir': 'My website or system needs to evolve',
    'Modernização, performance, SEO, correções e manutenção.': 'Modernization, performance, SEO, fixes, and maintenance.',
    'Ver evolução e suporte →': 'See evolution and support →',
    'Landing pages, sites profissionais e páginas de vendas': 'Landing pages, professional websites, and sales pages',
    'Comércio digital': 'Digital commerce',
    'Lojas, pagamentos, áreas do cliente e agendamentos': 'Stores, payments, client portals, and scheduling',
    'Software e aplicações web sob medida': 'Custom software and web applications',
    'IA e automação': 'AI and automation',
    'Integrações de IA e automação de atendimento': 'AI integrations and customer service automation',
    'Manutenção e evolução': 'Maintenance and evolution',
    'Modernização, performance, SEO e suporte': 'Modernization, performance, SEO, and support',
    '02 / SERVIÇOS': '02 / SERVICES',
    '03 / PORTFÓLIO': '03 / PORTFOLIO',
    '04 / COMPETÊNCIA': '04 / CAPABILITY',
    '05 / PROCESSO': '05 / PROCESS',
    '06 / ZOQVERA': '06 / ZOQVERA',
    '07 / INSIGHTS': '07 / INSIGHTS',
    '08 / CONTATO': '08 / CONTACT',
    '01 / SERVIÇOS': '01 / SERVICES',
    '02 / PORTFÓLIO': '02 / PORTFOLIO',
    '03 / COMPETÊNCIA': '03 / CAPABILITY',
    '04 / PROCESSO': '04 / PROCESS',
    '05 / ZOQVERA': '05 / ZOQVERA',
    '06 / INSIGHTS': '06 / INSIGHTS',
    '07 / CONTATO': '07 / CONTACT',
    'PROCESSO': 'PROCESS',
    'ARQUITETURA': 'ARCHITECTURE',
    'CAPACIDADES': 'CAPABILITIES',
    'EVIDÊNCIAS': 'EVIDENCE',
    'APLICAÇÕES': 'APPLICATIONS',
    'DESAFIO': 'CHALLENGE',
    'PROBLEMA': 'PROBLEM',
    'SOLUÇÃO': 'SOLUTION',
    'DESIGN': 'DESIGN',
    'IMPLEMENTAÇÃO': 'IMPLEMENTATION',
    'PRINCÍPIOS': 'PRINCIPLES',
    'ENTREGA': 'DELIVERY',
    'PRODUTO': 'PRODUCT',
    'ESTRUTURA': 'STRUCTURE',
    'Todos os direitos reservados.': 'All rights reserved.',
    'Feito para funcionar.': 'Built to work.'
  };

  Object.assign(dictionary, common);

  const translateString = (value) => {
    if (typeof value !== 'string') return value;
    return dictionary[value] || value;
  };

  const shouldSkipTextNode = (node) => {
    const parent = node.parentElement;
    return !parent || Boolean(parent.closest('script, style, noscript, textarea, [data-no-i18n]'));
  };

  const translateTextNode = (node) => {
    if (language !== 'en' || shouldSkipTextNode(node)) return;
    const raw = node.nodeValue || '';
    const match = raw.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!match || !match[2]) return;
    const translated = translateString(match[2]);
    if (translated !== match[2]) node.nodeValue = `${match[1]}${translated}${match[3]}`;
  };

  const translatableAttributes = ['aria-label', 'placeholder', 'title', 'alt'];
  const translateElementAttributes = (element) => {
    if (language !== 'en' || !(element instanceof Element)) return;
    translatableAttributes.forEach((name) => {
      if (!element.hasAttribute(name)) return;
      const value = element.getAttribute(name) || '';
      const translated = translateString(value);
      if (translated !== value) element.setAttribute(name, translated);
    });
  };

  const translateTree = (root = document) => {
    if (language !== 'en') return;
    if (root instanceof Element) translateElementAttributes(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) translateTextNode(node);
    const selector = translatableAttributes.map((name) => `[${name}]`).join(',');
    root.querySelectorAll?.(selector).forEach(translateElementAttributes);
  };

  const translateMetadata = () => {
    if (language !== 'en') return;
    document.documentElement.lang = 'en';
    document.title = translateString(document.title);
    document.querySelectorAll('meta[content]').forEach((meta) => {
      const key = meta.getAttribute('property') || meta.getAttribute('name') || '';
      if (key === 'og:locale') {
        meta.setAttribute('content', 'en_US');
        return;
      }
      if (!['description', 'keywords', 'og:title', 'og:description', 'og:image:alt', 'twitter:title', 'twitter:description', 'twitter:image:alt'].includes(key)) return;
      const value = meta.getAttribute('content') || '';
      const translated = translateString(value);
      if (translated !== value) meta.setAttribute('content', translated);
    });
  };

  const translateJsonLd = () => {
    if (language !== 'en') return;
    document.querySelectorAll('script[type="application/ld+json"]').forEach((script) => {
      try {
        const data = JSON.parse(script.textContent || '{}');
        const walk = (value, key = '') => {
          if (Array.isArray(value)) return value.map((item) => walk(item));
          if (value && typeof value === 'object') {
            Object.keys(value).forEach((childKey) => { value[childKey] = walk(value[childKey], childKey); });
            return value;
          }
          if (key === 'inLanguage') return 'en';
          return typeof value === 'string' ? translateString(value) : value;
        };
        script.textContent = JSON.stringify(walk(data));
      } catch {
        // Invalid or non-JSON structured data is left untouched.
      }
    });
  };

  const translateWhatsappText = (text) => {
    if (language !== 'en' || !text) return text;
    const exact = translateString(text);
    if (exact !== text) return exact;
    return text
      .replace(/^Olá! Entrei em contato pelo site da Zoqvera\./m, 'Hello! I contacted Zoqvera through the website.')
      .replace(/^Olá! Conheci a Zoqvera pelo site e gostaria de conversar sobre um projeto\./m, 'Hello! I found Zoqvera through the website and would like to discuss a project.')
      .replace(/^Olá! Gostaria de solicitar um orçamento para um projeto com a Zoqvera\./m, 'Hello! I would like to request a quote for a project with Zoqvera.')
      .replace(/^\*DADOS INICIAIS\*$/m, '*INITIAL DETAILS*')
      .replace(/^Nome:/gm, 'Name:')
      .replace(/^E-mail:/gm, 'Email:')
      .replace(/^Projeto:/gm, 'Project:')
      .replace(/^Serviço de interesse:/gm, 'Service of interest:')
      .replace(/^\*O que preciso resolver:\*$/m, '*What I need to solve:*');
  };

  const translateWhatsappUrl = (input) => {
    if (language !== 'en') return input;
    try {
      const url = new URL(input, window.location.href);
      if (url.hostname !== 'wa.me' && !url.hostname.endsWith('whatsapp.com')) return input;
      const text = url.searchParams.get('text');
      if (!text) return input;
      const translated = translateWhatsappText(text);
      if (translated === text) return input;
      url.searchParams.set('text', translated);
      return url.href;
    } catch {
      return input;
    }
  };

  const translateWhatsappLinks = () => {
    if (language !== 'en') return;
    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      const translated = translateWhatsappUrl(href);
      if (translated !== href) link.setAttribute('href', translated);
    });
  };

  const installWindowOpenTranslation = () => {
    if (language !== 'en' || window.__zoqveraI18nWindowOpen) return;
    window.__zoqveraI18nWindowOpen = true;
    const previousOpen = window.open.bind(window);
    window.open = (url, target, features) => previousOpen(translateWhatsappUrl(url), target, features);
  };

  const apply = () => {
    if (language !== 'en') {
      document.documentElement.lang = 'pt-BR';
      return;
    }
    translateTree(document.body);
    translateMetadata();
    translateJsonLd();
    translateWhatsappLinks();
    installWindowOpenTranslation();
    document.documentElement.dataset.language = 'en';
  };

  const setLanguage = (nextLanguage) => {
    if (!supported.has(nextLanguage)) return;
    try { window.localStorage.setItem(STORAGE_KEY, nextLanguage); } catch {}
    const url = new URL(window.location.href);
    if (nextLanguage === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    window.location.assign(url.href);
  };

  const insertSwitcher = () => {
    if (document.querySelector('.zq-lang-switcher')) return;
    const header = document.querySelector('.site-header .nav-wrap, .site-header .container');
    if (!header) return;

    const switcher = document.createElement('div');
    switcher.className = 'zq-lang-switcher';
    switcher.setAttribute('role', 'group');
    switcher.setAttribute('aria-label', language === 'en' ? 'Language' : 'Idioma');
    switcher.innerHTML = `
      <button type="button" data-language="pt" aria-pressed="${language === 'pt'}" title="Português">PT</button>
      <span aria-hidden="true">/</span>
      <button type="button" data-language="en" aria-pressed="${language === 'en'}" title="English">EN</button>
    `;
    switcher.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', () => setLanguage(button.dataset.language));
    });

    const cta = header.querySelector('.nav-cta, .service-nav, .case-nav, .insight-nav, .quote-back');
    if (cta) header.insertBefore(switcher, cta);
    else header.appendChild(switcher);

    if (!document.querySelector('style[data-zq-lang-style]')) {
      const style = document.createElement('style');
      style.dataset.zqLangStyle = 'true';
      style.textContent = `
        .zq-lang-switcher{display:inline-flex;align-items:center;gap:3px;flex:0 0 auto;padding:3px 5px;border:1px solid rgba(127,127,127,.34);border-radius:999px;background:rgba(10,14,18,.34);backdrop-filter:blur(10px);font-family:'DM Mono',monospace;font-size:11px;line-height:1;letter-spacing:.04em}
        .zq-lang-switcher button{min-width:34px;min-height:30px;padding:0 7px;border:0;border-radius:999px;background:transparent;color:inherit;font:inherit;cursor:pointer;opacity:.58;transition:opacity 160ms ease,background 160ms ease}
        .zq-lang-switcher button[aria-pressed="true"]{opacity:1;background:rgba(255,255,255,.12);font-weight:700}
        .zq-lang-switcher button:hover{opacity:1}.zq-lang-switcher button:focus-visible{outline:2px solid currentColor;outline-offset:2px}.zq-lang-switcher>span{opacity:.35}
        .section-light~* .zq-lang-switcher,.quote-page .zq-lang-switcher{color:inherit}
        @media(max-width:760px){.zq-lang-switcher{margin-left:auto;margin-right:8px}.zq-lang-switcher button{min-width:32px;min-height:32px}.site-header .nav-wrap{gap:8px}}
      `;
      document.head.appendChild(style);
    }
  };

  const register = (entries) => {
    if (entries && typeof entries === 'object') Object.assign(dictionary, entries);
    apply();
  };

  window.ZQ_I18N = {
    getLanguage: () => language,
    setLanguage,
    translateString,
    translateWhatsappText,
    register,
    apply
  };

  const observer = new MutationObserver((mutations) => {
    if (language !== 'en') return;
    mutations.forEach((mutation) => {
      if (mutation.type === 'characterData') translateTextNode(mutation.target);
      if (mutation.type === 'attributes' && mutation.target instanceof Element) translateElementAttributes(mutation.target);
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
        else if (node instanceof Element) translateTree(node);
      });
    });
    translateMetadata();
    translateWhatsappLinks();
  });

  if (document.body) observer.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: translatableAttributes });

  insertSwitcher();
  apply();

  const path = window.location.pathname.replace(/\.html$/, '');
  let moduleName = 'i18n-home.js';
  if (path.includes('/servicos/')) moduleName = 'i18n-services.js';
  else if (path.includes('/portfolio/')) moduleName = 'i18n-portfolio.js';
  else if (path.includes('/insights')) moduleName = 'i18n-insights.js';
  else if (path.includes('/solicitar-orcamento')) moduleName = 'i18n-quote.js';

  const moduleScript = document.createElement('script');
  moduleScript.src = new URL(moduleName, ROOT).href;
  moduleScript.async = false;
  document.body.appendChild(moduleScript);
})();
