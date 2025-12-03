// ==========================================
// ULTRA MODERN 2025 JAVASCRIPT
// ==========================================

// ==========================================
// TRANSLATIONS
// ==========================================
const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            name: 'Thomas Cardin',
            tagline: 'SRE • Platform Engineer • Cloud Native Enthusiast',
            viewProjects: 'View Projects',
            getInTouch: 'Get in touch'
        },
        about: {
            title: 'Thomas Cardin',
            sectionTitle: 'About',
            professionalSummary: 'Professional summary',
            summary1: 'I am a passionate infrastructure engineer with expertise in Kubernetes application deployment and maintenance. My core strengths include strong communication skills and deep technical knowledge in container orchestration, cloud computing, and infrastructure management. I have a genuine passion for system-level diagnostics and performance troubleshooting, with experience spanning from application layers down to kernel-level analysis.',
            summary2: 'I am actively expanding my expertise in cloud-native technologies, systems performance monitoring, and eBPF technologies, with hands-on experience building custom diagnostic tools and performance monitoring solutions. My approach combines solid DevOps practices with low-level systems knowledge, enabling me to diagnose and resolve complex technical issues across multiple infrastructure layers.',
            summary3: 'Currently developing monitoring solutions and continuously learning cutting-edge technologies like cloud computing platforms, systems performance analysis, and extended Berkeley Packet Filter (eBPF) to enhance my diagnostic capabilities. I thrive in collaborative environments and am committed to continuous learning and professional growth in the systems engineering field.',
            technicalInterests: 'Technical interests & learning:',
            interests: [
                'Kubernetes & container orchestration',
                'Cloud computing & infrastructure',
                'Networking & service mesh (Cilium)',
                'Observability tools (Prometheus, Grafana, OpenTelemetry)',
                'Systems performance analysis & optimization',
                'eBPF & Kernel Programming',
                'Distributed systems architecture'
            ],
            collaboration: 'Collaboration & communication:',
            collaborationItems: [
                'Extroverted team player - passionate about collaboration and knowledge sharing',
                'Team-oriented problem solving and collaborative development',
                'Technical discussion and knowledge sharing with peers',
                'Cross-functional communication between dev and ops teams',
                'Mentoring and explaining complex technical concepts',
                'Active listening and building consensus on technical decisions',
                'Brainstorming sessions and creative problem-solving with colleagues',
                'Leading technical workshops and knowledge transfer sessions',
                'Building strong relationships across different engineering teams'
            ],
            languages: 'Languages: Go, Python, C'
        },
        skills: {
            title: 'Technical skills',
            platform: {
                title: 'Platform & Cloud Engineering',
                desc: 'Expert in container orchestration with Kubernetes and Docker, designing robust CI/CD pipelines, and implementing Infrastructure as Code using Terraform and Ansible. Proficient in GitOps workflows, cloud computing platforms (infonuagique), and advanced networking with service mesh technologies like Cilium.'
            },
            programming: {
                title: 'Programming',
                desc: 'Strong programming skills in Go for microservices and gRPC applications, Python for automation and scripting, and C for systems programming. Experienced in shell scripting and Bash for infrastructure automation and tooling development.'
            },
            systems: {
                title: 'Systems & Observability',
                desc: 'Strong understanding of systems performance analysis and debugging complex issues. Actively learning eBPF and kernel tracing technologies. Experienced in building observability solutions with metrics collection, system telemetry, and performance monitoring using Prometheus, Grafana, and OpenTelemetry.'
            },
            security: {
                title: 'Security & DevOps',
                desc: 'Implementing DevSecOps practices to integrate security throughout the development lifecycle. Specialized in container security, system hardening techniques, and comprehensive security monitoring to ensure robust and compliant infrastructure.'
            }
        },
        projects: {
            title: 'Featured projects',
            homelab: {
                title: 'Homelab',
                desc: 'K3S Kubernetes cluster on Turing Pi 2 board with 4 RK1 nodes. Ansible-managed infrastructure with Cilium networking and custom hardware configuration.',
                viewProject: 'View Project',
                documentation: 'Documentation'
            },
            calidum: {
                title: 'Calidum-Rotae',
                desc: 'Go microservice for routing admission requests to different messaging platforms using gRPC architecture. Backend service with distributed messaging capabilities.'
            },
            gobservability: {
                title: 'Gobservability',
                desc: 'Advanced observability framework in Go with unified metrics, traces, and logs. Real-time analysis capabilities powered by eBPF monitoring.'
            }
        },
        contact: {
            title: 'Get in touch',
            contactTitle: 'Contact',
            github: 'Github',
            githubUser: '@ThomasCardin',
            linkedin: 'LinkedIn',
            linkedinUser: 'Thomas Cardin'
        },
        footer: {
            copyright: 'All rights reserved.',
            github: 'Github',
            linkedin: 'Linkedin'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À propos',
            skills: 'Compétences',
            projects: 'Projets',
            contact: 'Contact'
        },
        hero: {
            name: 'Thomas Cardin',
            tagline: 'SRE • Développeur plateforme • Passionné cloud native',
            viewProjects: 'Voir les projets',
            getInTouch: 'Me contacter'
        },
        about: {
            title: 'Thomas Cardin',
            sectionTitle: 'À propos',
            professionalSummary: 'Résumé professionnel',
            summary1: 'Je suis un développeur infrastructure passionné avec une expertise dans le déploiement et la maintenance d\'applications Kubernetes. Mes forces principales incluent de solides compétences en communication et des connaissances techniques approfondies en orchestration de conteneurs, cloud computing et gestion d\'infrastructure. J\'ai une véritable passion pour le diagnostic système et le dépannage de performance, avec une expérience allant des couches applicatives jusqu\'à l\'analyse au niveau du noyau.',
            summary2: 'J\'élargis activement mon expertise dans les technologies cloud-natives, le monitoring de performance système et les technologies eBPF, avec une expérience pratique dans la construction d\'outils de diagnostic personnalisés et de solutions de monitoring de performance. Mon approche combine des pratiques DevOps solides avec des connaissances système de bas niveau, me permettant de diagnostiquer et résoudre des problèmes techniques complexes à travers plusieurs couches d\'infrastructure.',
            summary3: 'Actuellement en train de développer des solutions de monitoring et d\'apprendre continuellement des technologies de pointe comme les plateformes de cloud computing, l\'analyse de performance système et le Berkeley Packet Filter étendu (eBPF) pour améliorer mes capacités de diagnostic. Je m\'épanouis dans des environnements collaboratifs et suis engagé dans l\'apprentissage continu et la croissance professionnelle dans le domaine de l\'ingénierie système.',
            technicalInterests: 'Intérêts techniques et apprentissage :',
            interests: [
                'Kubernetes et orchestration de conteneurs',
                'Cloud computing et infrastructure',
                'Réseautage et service mesh (Cilium)',
                'Outils d\'observabilité (Prometheus, Grafana, OpenTelemetry)',
                'Analyse et optimisation de la performance système',
                'eBPF et programmation Kernel',
                'Architecture de systèmes distribués'
            ],
            collaboration: 'Collaboration et communication :',
            collaborationItems: [
                'Équipier extraverti - passionné par la collaboration et le partage de connaissances',
                'Résolution de problèmes orientée équipe et développement collaboratif',
                'Discussion technique et partage de connaissances avec les pairs',
                'Communication transversale entre les équipes dev et ops',
                'Mentorat et explication de concepts techniques complexes',
                'Écoute active et établissement de consensus sur les décisions techniques',
                'Sessions de brainstorming et résolution créative de problèmes avec les collègues',
                'Animation d\'ateliers techniques et sessions de transfert de connaissances',
                'Construction de relations solides entre différentes équipes d\'ingénierie'
            ],
            languages: 'Langages : Go, Python, C'
        },
        skills: {
            title: 'Compétences techniques',
            platform: {
                title: 'Ingénierie Platform & Cloud',
                desc: 'Expert en orchestration de conteneurs avec Kubernetes et Docker, conception de pipelines CI/CD robustes et implémentation d\'Infrastructure as Code avec Terraform et Ansible. Compétent dans les workflows GitOps, les plateformes de cloud computing (infonuagique) et le réseautage avancé avec des technologies de service mesh comme Cilium.'
            },
            programming: {
                title: 'Programmation',
                desc: 'Solides compétences en programmation en Go pour les microservices et applications gRPC, Python pour l\'automation et le scripting, et C pour la programmation système. Expérimenté en scripting shell et Bash pour l\'automatisation d\'infrastructure et le développement d\'outils.'
            },
            systems: {
                title: 'Systèmes & Observabilité',
                desc: 'Bonne compréhension de l\'analyse de performance système et du débogage de problèmes complexes. Apprentissage actif des technologies eBPF et de traçage kernel. Expérimenté dans la construction de solutions d\'observabilité avec collecte de métriques, télémétrie système et monitoring de performance avec Prometheus, Grafana et OpenTelemetry.'
            },
            security: {
                title: 'Sécurité & DevOps',
                desc: 'Implémentation de pratiques DevSecOps pour intégrer la sécurité tout au long du cycle de développement. Spécialisé en sécurité des conteneurs, techniques de durcissement système et monitoring de sécurité complet pour assurer une infrastructure robuste et conforme.'
            }
        },
        projects: {
            title: 'Projets en vedette',
            homelab: {
                title: 'Homelab',
                desc: 'Cluster Kubernetes K3S sur carte Turing Pi 2 avec 4 nœuds RK1. Infrastructure gérée par Ansible avec réseautage Cilium et configuration matérielle personnalisée.',
                viewProject: 'Voir le projet',
                documentation: 'Documentation'
            },
            calidum: {
                title: 'Calidum-Rotae',
                desc: 'Microservice Go pour router les requêtes d\'admission vers différentes plateformes de messagerie utilisant une architecture gRPC. Service backend avec capacités de messagerie distribuée.'
            },
            gobservability: {
                title: 'Gobservability',
                desc: 'Framework d\'observabilité avancé en Go avec métriques, traces et logs unifiés. Capacités d\'analyse en temps réel propulsées par le monitoring eBPF.'
            }
        },
        contact: {
            title: 'Me contacter',
            contactTitle: 'Contact',
            github: 'Github',
            githubUser: '@ThomasCardin',
            linkedin: 'LinkedIn',
            linkedinUser: 'Thomas Cardin'
        },
        footer: {
            copyright: 'Tous droits réservés.',
            github: 'Github',
            linkedin: 'Linkedin'
        }
    }
};

let currentLang = 'en';

function applyTranslations(lang) {
    const t = translations[lang];

    // Nav
    document.querySelectorAll('.nav-link')[0].textContent = t.nav.home;
    document.querySelectorAll('.nav-link')[1].textContent = t.nav.about;
    document.querySelectorAll('.nav-link')[2].textContent = t.nav.skills;
    document.querySelectorAll('.nav-link')[3].textContent = t.nav.projects;
    document.querySelectorAll('.nav-link')[4].textContent = t.nav.contact;

    // Hero
    document.querySelector('.hero-tagline').textContent = t.hero.tagline;
    document.querySelectorAll('.cta-button')[0].textContent = t.hero.viewProjects;
    document.querySelectorAll('.cta-button')[1].textContent = t.hero.getInTouch;

    // About
    document.querySelector('.terminal-prompt').textContent = t.about.sectionTitle;
    const aboutTitle = document.querySelector('.section-title');
    aboutTitle.innerHTML = '<span class="section-number">01.</span> ' + t.about.title;

    const brendanStyle = document.querySelector('.brendan-style');
    const paras = brendanStyle.querySelectorAll('p');
    paras[0].innerHTML = '<strong>' + t.about.professionalSummary + '</strong>';
    paras[1].textContent = t.about.summary1;
    paras[2].textContent = t.about.summary2;
    paras[3].textContent = t.about.summary3;
    paras[4].innerHTML = '<strong>' + t.about.technicalInterests + '</strong>';

    const interestLists = brendanStyle.querySelectorAll('.interest-list');
    const interestItems = interestLists[0].querySelectorAll('li');
    t.about.interests.forEach((interest, i) => {
        if (interestItems[i]) interestItems[i].textContent = interest;
    });

    paras[5].innerHTML = '<strong>' + t.about.collaboration + '</strong>';
    const collabItems = interestLists[1].querySelectorAll('li');
    t.about.collaborationItems.forEach((item, i) => {
        if (collabItems[i]) collabItems[i].textContent = item;
    });

    paras[6].innerHTML = '<strong>' + t.about.languages + '</strong>';

    // Skills
    const skillsTitle = document.querySelectorAll('.section-title')[1];
    skillsTitle.innerHTML = '<span class="section-number">02.</span> ' + t.skills.title;

    const skillCards = document.querySelectorAll('.bento-item');
    skillCards[0].querySelector('.skill-header').textContent = t.skills.platform.title;
    skillCards[0].querySelector('.skill-description').textContent = t.skills.platform.desc;

    skillCards[1].querySelector('.skill-header').textContent = t.skills.programming.title;
    skillCards[1].querySelector('.skill-description').textContent = t.skills.programming.desc;

    skillCards[2].querySelector('.skill-header').textContent = t.skills.systems.title;
    skillCards[2].querySelector('.skill-description').textContent = t.skills.systems.desc;

    skillCards[3].querySelector('.skill-header').textContent = t.skills.security.title;
    skillCards[3].querySelector('.skill-description').textContent = t.skills.security.desc;

    // Projects
    const projectsTitle = document.querySelectorAll('.section-title')[2];
    projectsTitle.innerHTML = '<span class="section-number">03.</span> ' + t.projects.title;

    skillCards[4].querySelector('.skill-header').textContent = t.projects.homelab.title;
    skillCards[4].querySelector('.project-description').textContent = t.projects.homelab.desc;
    const homelabLinks = skillCards[4].querySelectorAll('.skill-link');
    homelabLinks[0].textContent = t.projects.homelab.viewProject;
    homelabLinks[1].textContent = t.projects.homelab.documentation;

    skillCards[5].querySelector('.skill-header').textContent = t.projects.calidum.title;
    skillCards[5].querySelector('.project-description').textContent = t.projects.calidum.desc;
    const calidumLinks = skillCards[5].querySelectorAll('.skill-link');
    calidumLinks[0].textContent = t.projects.homelab.viewProject;
    calidumLinks[1].textContent = t.projects.homelab.documentation;

    skillCards[6].querySelector('.skill-header').textContent = t.projects.gobservability.title;
    skillCards[6].querySelector('.project-description').textContent = t.projects.gobservability.desc;
    const gobservabilityLinks = skillCards[6].querySelectorAll('.skill-link');
    gobservabilityLinks[0].textContent = t.projects.homelab.viewProject;
    gobservabilityLinks[1].textContent = t.projects.homelab.documentation;

    // Contact
    const contactTitle = document.querySelectorAll('.section-title')[3];
    contactTitle.innerHTML = '<span class="section-number">04.</span> ' + t.contact.title;

    skillCards[7].querySelector('.skill-header').textContent = t.contact.contactTitle;
    const contactCards = skillCards[7].querySelectorAll('.contact-card');
    contactCards[0].querySelector('.contact-platform').textContent = t.contact.github;
    contactCards[0].querySelector('.contact-username').textContent = t.contact.githubUser;
    contactCards[1].querySelector('.contact-platform').textContent = t.contact.linkedin;
    contactCards[1].querySelector('.contact-username').textContent = t.contact.linkedinUser;

    // Footer
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks[0].textContent = t.footer.github;
    footerLinks[1].textContent = t.footer.linkedin;

    const footerCopyright = document.querySelector('.footer-copyright');
    const year = document.getElementById('current-year').textContent;
    footerCopyright.innerHTML = '© <span id="current-year">' + year + '</span> Thomas Cardin. ' + t.footer.copyright;
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    applyTranslations(currentLang);
    document.querySelector('.lang-text').textContent = currentLang.toUpperCase();
    localStorage.setItem('language', currentLang);
}

// Make toggleLanguage global
window.toggleLanguage = toggleLanguage;

document.addEventListener('DOMContentLoaded', function() {

    // Load saved language
    const savedLang = localStorage.getItem('language');
    if (savedLang && savedLang !== 'en') {
        currentLang = savedLang;
        applyTranslations(currentLang);
        document.querySelector('.lang-text').textContent = currentLang.toUpperCase();
    }

    // ==========================================
    // SITE NAME TYPING ANIMATION - ALL VARIANTS
    // ==========================================
    const siteNameElement = document.querySelector('.site-name-animation');

    async function typeText(text, delay = 80) {
        siteNameElement.textContent = '';
        for (let i = 0; i < text.length; i++) {
            siteNameElement.textContent += text[i];
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    async function eraseText(delay = 40) {
        const currentText = siteNameElement.textContent;
        for (let i = currentText.length; i >= 0; i--) {
            siteNameElement.textContent = currentText.substring(0, i);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    async function animateSiteName() {
        const variants = [
            { text: 'ninebasetwo.net', type: 'default' },
            { text: '0000 1001', type: 'binary' },        // binary
            { text: '0x9', type: 'hexadecimal' },         // hexadecimal
            { text: '011', type: 'octal' },               // octal
            { text: '3²', type: 'square' },               // square
            { text: '√81', type: 'square-root' },         // square root
            { text: '10 - 1', type: 'subtraction' },      // subtraction
            { text: '18 / 2', type: 'division' },         // division
            { text: '4.5 * 2', type: 'multiplication' },  // multiplication
            { text: '2³ + 1', type: 'power' },            // power + addition
            { text: 'IX', type: 'roman' }                 // roman numeral
        ];

        let index = 0;
        while (true) {
            siteNameElement.setAttribute('data-base', variants[index].type);
            await typeText(variants[index].text, 80);
            await new Promise(resolve => setTimeout(resolve, 2000));
            await eraseText(50);
            await new Promise(resolve => setTimeout(resolve, 300));
            index = (index + 1) % variants.length;
        }
    }

    // Start animation
    animateSiteName();

    // ==========================================
    // NAVBAR SCROLL EFFECT
    // ==========================================
    const navbar = document.querySelector('.floating-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // ==========================================
    // SMOOTH SCROLLING FOR NAVIGATION
    // ==========================================
    const navLinks = document.querySelectorAll('.nav-link, .quick-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 100;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ==========================================
    // ACTIVE NAV LINK ON SCROLL
    // ==========================================
    const updateActiveLink = () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.substring(1) === current) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink(); // Initial call

    // ==========================================
    // THEME TOGGLE FUNCTIONALITY
    // ==========================================
    function toggleTheme() {
        document.body.classList.toggle('light-theme');
        const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    // Make toggle function global
    window.toggleTheme = toggleTheme;

    // ==========================================
    // SCROLL PROGRESS BAR
    // ==========================================
    const scrollProgress = document.querySelector('.scroll-progress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        if (scrollProgress) {
            scrollProgress.style.width = scrollPercentage + '%';
        }
    }, { passive: true });

    // ==========================================
    // BACK TO TOP BUTTON
    // ==========================================
    const backToTop = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop?.classList.add('visible');
        } else {
            backToTop?.classList.remove('visible');
        }
    }, { passive: true });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Make scrollToTop function global
    window.scrollToTop = scrollToTop;

    // ==========================================
    // DYNAMIC YEAR IN FOOTER
    // ==========================================
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // ==========================================
    // SIMPLE INTERSECTION OBSERVER
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observe sections with simple fade-in
    const sections = document.querySelectorAll('.section-container, .terminal-window');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.4s ease';
        observer.observe(section);
    });

    // ==========================================
    // CONSOLE MODERN EASTER EGG
    // ==========================================
    console.log('%c✨ Modern Portfolio 2025',
        'color: #00d9ff; font-size: 28px; font-weight: bold; text-shadow: 0 0 20px #00d9ff; padding: 20px;'
    );
    console.log('%c> Ultra-modern design with smooth animations',
        'color: #e0e0e0; font-size: 14px; padding: 5px;'
    );
    console.log('%c> Glassmorphism • Micro-interactions • Magnetic effects',
        'color: #a0a0a0; font-size: 12px; padding: 5px;'
    );

    // Secret hack function
    window.hack = function() {
        console.log('%c[ACTIVATING CYBERPUNK MODE...]',
            'color: #00d9ff; font-size: 18px; font-weight: bold;'
        );

        // Add glow to all elements
        const elements = document.querySelectorAll('.terminal-window, .info-box, .projects-preview, .contact-preview, .skill-category');
        elements.forEach(el => {
            el.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            el.style.boxShadow = '0 0 50px rgba(0, 217, 255, 0.8), 0 0 100px rgba(0, 217, 255, 0.4)';
            el.style.borderColor = '#00d9ff';
        });

        setTimeout(() => {
            elements.forEach(el => {
                el.style.boxShadow = '';
                el.style.borderColor = '';
            });
            console.log('%c[COMPLETE] ✨ Welcome to the future',
                'color: #00d9ff; font-size: 18px; font-weight: bold;'
            );
        }, 3000);

        return '🚀 Cyberpunk mode activated! Type hack() again to see the magic ✨';
    };

    // ==========================================
    // PERFORMANCE MONITORING
    // ==========================================
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log('%c⚡ Page loaded in ' + pageLoadTime + 'ms',
                    'color: #00d9ff; font-size: 12px; font-weight: bold;'
                );
            }, 0);
        });
    }

    // ==========================================
    // LAZY LOADING FOR IMAGES (IF ANY)
    // ==========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ==========================================
    // REDUCE MOTION FOR ACCESSIBILITY
    // ==========================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        document.querySelectorAll('*').forEach(el => {
            el.style.animation = 'none';
            el.style.transition = 'none';
        });
    }

});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
