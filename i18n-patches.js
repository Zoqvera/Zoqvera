window.ZQ_I18N?.register({
  'Do problema à produção': 'From problem to production',
  'Escopo, arquitetura, interface, integrações e publicação tratados como partes do mesmo produto — não como entregas desconectadas.': 'Scope, architecture, interface, integrations, and launch treated as parts of the same product — not as disconnected deliverables.',
  'Design com função': 'Purpose-driven design',
  'Hierarquia visual, conteúdo e interação são desenhados para orientar o usuário, transmitir confiança e reduzir atrito.': 'Visual hierarchy, content, and interaction are designed to guide users, communicate trust, and reduce friction.',
  'Engenharia conectada à operação': 'Engineering connected to operations',
  'Autenticação, banco de dados, pagamentos, automações e fluxos administrativos entram quando resolvem uma necessidade real do negócio.': 'Authentication, databases, payments, automation, and administrative workflows are added when they solve a real business need.',
  'IA e dados com critério': 'AI and data with rigor',
  'clareza': 'clarity',
  'escala': 'scale',
  'impacto': 'impact',
  'real': 'real',
  'Conhecer a solução para Landing Page Profissional': 'Explore the Professional Landing Page solution',
  'Conhecer a solução para Site para Profissionais Liberais': 'Explore the Website for Independent Professionals solution',
  'Conhecer a solução para Página de Vendas': 'Explore the Sales Page solution',
  'Conhecer a solução para Loja Virtual': 'Explore the Online Store solution',
  'Conhecer a solução para Sistema Web Personalizado': 'Explore the Custom Web System solution',
  'Conhecer a solução para Aplicativo Web': 'Explore the Web Application solution',
  'Conhecer a solução para Integração com Inteligência Artificial': 'Explore the Artificial Intelligence Integration solution',
  'Conhecer a solução para Automação de Atendimento': 'Explore the Customer Service Automation solution',
  'Conhecer a solução para Integração de Pagamentos': 'Explore the Payment Integration solution',
  'Conhecer a solução para Área do Cliente': 'Explore the Client Portal solution',
  'Conhecer a solução para Sistema de Agendamento': 'Explore the Scheduling System solution',
  'Conhecer a solução para Reformulação de Site': 'Explore the Website Redesign solution',
  'Conhecer a solução para Manutenção de Site': 'Explore the Website Maintenance solution',
  'Conhecer a solução para SEO': 'Explore the SEO solution',
  'Conhecer a solução para Configuração de Domínio e HTTPS': 'Explore the Domain and HTTPS Setup solution',
  'Conhecer a solução para Configuração Google Search Console': 'Explore the Google Search Console Setup solution',
  'Conhecer a solução para Google Analytics': 'Explore the Google Analytics solution',
  'Comércio digital com linguagem de marca, não de template.': 'Digital commerce with brand language, not template language.',
  'As decisões de interface priorizam hierarquia, ritmo e consistência para que elementos comerciais permaneçam funcionais sem apagar a personalidade visual do projeto.': 'Interface decisions prioritize hierarchy, rhythm, and consistency so commercial elements remain functional without erasing the project’s visual personality.',
  'O produto aparece cedo na jornada, com preço e caminhos de ação visíveis.': 'The product appears early in the journey, with price and action paths visible.',
  'O manifesto reforça diferenciação e valor percebido sem bloquear a navegação comercial.': 'The manifesto reinforces differentiation and perceived value without blocking commercial navigation.',
  'Busca, seleção de tamanho e carrinho permanecem acessíveis sem deslocar o usuário para uma experiência visual desconectada.': 'Search, size selection, and cart remain accessible without moving the user into a visually disconnected experience.',
  'Responsividade é tratada como parte da jornada de compra, não como simples redução do layout desktop.': 'Responsiveness is treated as part of the shopping journey, not as a simple reduction of the desktop layout.',
  '05 / ENTREGA': '05 / DELIVERY',
  'Uma presença comercial capaz de vender e posicionar ao mesmo tempo.': 'A commercial presence capable of selling and positioning the brand at the same time.',
  'Sem atribuir métricas não verificadas, o valor do projeto pode ser demonstrado pela integração das principais camadas de um e-commerce: identidade, descoberta de produtos, seleção, carrinho e relacionamento.': 'Without attributing unverified metrics, the project’s value can be demonstrated by integrating the main layers of e-commerce: identity, product discovery, selection, cart, and relationship.',
  'Marca + compra': 'Brand + purchase',
  'O visitante pode conhecer o posicionamento, explorar a coleção, localizar produtos e avançar para o carrinho dentro da mesma experiência.': 'Visitors can understand the positioning, explore the collection, find products, and move to the cart within the same experience.',
  'Editorial + e-commerce': 'Editorial + e-commerce',
  'A linguagem visual mantém personalidade própria enquanto os elementos essenciais de comércio continuam claros e acessíveis.': 'The visual language maintains its own personality while essential commerce elements remain clear and accessible.',
  'Precisa transformar uma marca em uma experiência de venda?': 'Need to turn a brand into a sales experience?',
  'A Zoqvera desenvolve sites de vendas, lojas virtuais, landing pages e integrações de pagamento com foco em experiência, conversão e operação.': 'Zoqvera develops sales websites, online stores, landing pages, and payment integrations focused on experience, conversion, and operations.',
  'Ver outros cases': 'View other case studies',
  'Case Site de Vendas.': 'Sales Website Case Study.',
  'Agendar consulta gratuita': 'Book a Free Consultation',
  'Agende uma conversa gratuita de 30 minutos para discutir seu projeto, objetivos e próximos passos.': 'Book a free 30-minute consultation to discuss your project, goals, and next steps.',
  'Consulta gratuita de 30 minutos': 'Free 30-minute consultation',
  'Prefere enviar um briefing?': 'Prefer to send a brief?',
  'Solicitar orçamento': 'Request a Quote'
});

(() => {
  if (window.__zoqveraCalIntegration) return;
  if (window.ZQ_I18N?.getLanguage?.() !== 'en') return;
  if (!document.querySelector('.contact-section')) return;
  window.__zoqveraCalIntegration = true;

  const CAL_LINK = 'zoqvera/free-consultation';
  const CAL_URL = `https://cal.com/${CAL_LINK}`;
  const CAL_NAMESPACE = 'free-consultation';

  const addCalAttributes = (element, placement) => {
    if (!element) return;
    element.classList.add('zq-cal-trigger');
    element.setAttribute('href', CAL_URL);
    element.setAttribute('data-cal-link', CAL_LINK);
    element.setAttribute('data-cal-namespace', CAL_NAMESPACE);
    element.setAttribute('data-cal-config', JSON.stringify({
      layout: 'month_view',
      utm_source: 'zoqvera.com',
      utm_medium: 'website',
      utm_campaign: 'free_consultation',
      utm_content: placement
    }));
    element.removeAttribute('target');
    element.removeAttribute('rel');
  };

  const navCta = document.querySelector('.nav-cta');
  if (navCta) {
    navCta.textContent = 'Book a Free Consultation';
    navCta.setAttribute('aria-label', 'Book a Free Consultation');
    addCalAttributes(navCta, 'header');
  }

  const heroActions = document.querySelector('.hero-actions');
  if (heroActions) {
    const primary = heroActions.querySelector('.button-primary');
    const secondary = heroActions.querySelector('.text-link');

    if (primary) {
      primary.innerHTML = 'Book a Free Consultation <span>↗</span>';
      primary.setAttribute('aria-label', 'Book a Free Consultation');
      addCalAttributes(primary, 'hero');
    }

    if (secondary) {
      secondary.innerHTML = 'View portfolio <span>↓</span>';
      secondary.setAttribute('href', '#portfolio');
      secondary.removeAttribute('data-cal-link');
      secondary.removeAttribute('data-cal-namespace');
      secondary.removeAttribute('data-cal-config');
      secondary.classList.remove('zq-cal-trigger');
    }
  }

  const contactWrap = document.querySelector('.contact-wrap');
  const contactCopy = contactWrap?.querySelector('.contact-copy');
  const contactForm = document.querySelector('#contact-form');

  if (contactCopy) {
    const title = contactCopy.querySelector('h2');
    const description = contactCopy.querySelector('p');
    if (title) title.innerHTML = 'Have a project in mind?<br/><span class="accent-text">Let\'s talk.</span>';
    if (description) description.textContent = 'Book a free 30-minute consultation to discuss your project, goals, and next steps.';
  }

  if (contactForm && contactWrap) {
    contactForm.hidden = true;
    contactForm.setAttribute('aria-hidden', 'true');

    const bookingPanel = document.createElement('div');
    bookingPanel.className = 'zq-consultation-panel';
    bookingPanel.innerHTML = `
      <span class="zq-consultation-kicker">FREE · 30 MINUTES · GOOGLE MEET</span>
      <h3>Free 30-minute consultation</h3>
      <p>Choose a time that works for you. Cal.com automatically displays availability in your local time zone.</p>
      <a class="button button-primary zq-consultation-button" href="${CAL_URL}" aria-label="Book a Free Consultation">Book a Free Consultation <span>↗</span></a>
      <a class="zq-quote-link" href="solicitar-orcamento?lang=en">Prefer to send a brief? <strong>Request a Quote →</strong></a>
    `;
    contactWrap.appendChild(bookingPanel);
    addCalAttributes(bookingPanel.querySelector('.zq-consultation-button'), 'contact');
  }

  const whatsappFloat = document.querySelector('.whatsapp-float');
  if (whatsappFloat) whatsappFloat.hidden = true;

  if (!document.querySelector('style[data-zq-cal-style]')) {
    const style = document.createElement('style');
    style.dataset.zqCalStyle = 'true';
    style.textContent = `
      .zq-consultation-panel{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;min-height:100%;padding:clamp(28px,4vw,52px);border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.045);border-radius:4px}
      .zq-consultation-kicker{display:block;margin-bottom:18px;font:500 11px 'DM Mono',monospace;letter-spacing:.14em;color:#9da9a1}
      .zq-consultation-panel h3{margin:0 0 14px;font-size:clamp(24px,3vw,38px);line-height:1.04;letter-spacing:-.035em}
      .zq-consultation-panel p{max-width:560px;margin:0 0 26px;color:#aeb7b1;line-height:1.7}
      .zq-consultation-button{margin-bottom:18px}
      .zq-quote-link{font-size:13px;color:inherit;text-decoration:none;opacity:.76}
      .zq-quote-link:hover{opacity:1}.zq-quote-link strong{font-weight:700}
      @media(max-width:760px){.zq-consultation-panel{padding:28px 22px}.zq-consultation-button{width:100%;justify-content:center;text-align:center}}
    `;
    document.head.appendChild(style);
  }

  // Official Cal.com embed bootstrap. Anchors retain their normal href as a
  // fallback if the embed script is unavailable.
  ((C, A, L) => {
    const push = (api, args) => api.q.push(args);
    const d = C.document;
    C.Cal = C.Cal || function CalEmbed() {
      const cal = C.Cal;
      const args = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement('script')).src = A;
        cal.loaded = true;
      }
      if (args[0] === L) {
        const api = function namespacedCal() { push(api, arguments); };
        const namespace = args[1];
        api.q = api.q || [];
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api;
          push(cal.ns[namespace], args);
          push(cal, ['initNamespace', namespace]);
        } else {
          push(cal, args);
        }
        return;
      }
      push(cal, args);
    };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');

  window.Cal('init', CAL_NAMESPACE, { origin: 'https://cal.com' });
  window.Cal.ns[CAL_NAMESPACE]('ui', {
    hideEventTypeDetails: false,
    layout: 'month_view',
    cssVarsPerTheme: {
      light: { 'cal-brand': '#111814' },
      dark: { 'cal-brand': '#d8ff64' }
    }
  });
  window.Cal.ns[CAL_NAMESPACE]('preload', { calLink: CAL_LINK });
  window.Cal.ns[CAL_NAMESPACE]('on', {
    action: 'bookingSuccessfulV2',
    callback: (event) => {
      const data = event?.detail?.data || {};
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'consultation_booked', {
          event_type_id: data.eventTypeId || undefined,
          booking_uid: data.uid || undefined,
          page_path: window.location.pathname
        });
      }
    }
  });

  document.addEventListener('click', (event) => {
    const trigger = event.target instanceof Element ? event.target.closest('.zq-cal-trigger') : null;
    if (!trigger || typeof window.gtag !== 'function') return;
    const placement = trigger.closest('.site-header') ? 'header'
      : trigger.closest('.hero-actions') ? 'hero'
      : trigger.closest('.contact-section') ? 'contact'
      : 'page';
    window.gtag('event', 'consultation_start', {
      placement,
      page_path: window.location.pathname
    });
  }, { capture: true });
})();