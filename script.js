document.addEventListener('DOMContentLoaded', function() {
    
    // Site name typing animation (ninebasetwo.net -> erase -> 0000 1001)
    const siteNameElement = document.querySelector('.site-name-animation');
    
    async function typeText(text, delay = 100) {
        siteNameElement.textContent = '';
        for (let i = 0; i < text.length; i++) {
            siteNameElement.textContent += text[i];
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    
    async function eraseText(delay = 50) {
        const currentText = siteNameElement.textContent;
        for (let i = currentText.length; i >= 0; i--) {
            siteNameElement.textContent = currentText.substring(0, i);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    
    async function animateSiteName() {
        const equivalents = [
            '0000 1001',     // binary
            '0x9',           // hexadecimal  
            '011',           // octal
            '3²',            // square
            '√81',           // square root
            '10 - 1',        // subtraction
            '18 / 2',        // division
            '4.5 * 2',       // multiplication
            '2³ + 1',        // power + addition
            'IX'             // roman numeral
        ];
        
        while (true) {
            // Type ninebasetwo.net
            await typeText('ninebasetwo.net', 80);
            
            // Wait a bit
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Erase
            await eraseText(60);
            
            // Wait a bit
            await new Promise(resolve => setTimeout(resolve, 300));
            
            // Cycle through all equivalents
            for (let equivalent of equivalents) {
                await typeText(equivalent, 100);
                
                // Wait a bit
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Erase
                await eraseText(60);
                
                // Wait before next
                await new Promise(resolve => setTimeout(resolve, 300));
            }
        }
    }
    
    // Start animation
    animateSiteName();
    
    // Smooth scrolling for navigation links and project preview links
    const navLinks = document.querySelectorAll('.nav-link, .quick-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to nav links on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Glitch effect removed
    
    // Cursor blink removed
    
    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Random flicker removed
    
    // Matrix rain effect removed for cleaner look
    
    // Console Easter egg
    console.log('%c[SYSTEM] Terminal Portfolio Initialized', 'color: #00ff00; font-size: 20px; text-shadow: 0 0 10px #00ff00;');
    console.log('%c> Welcome to the Matrix', 'color: #00ffff; font-size: 14px;');
    console.log('%c> Type "hack()" to unlock secret mode', 'color: #ffb000; font-size: 12px;');
    
    window.hack = function() {
        document.body.style.animation = 'glitch 0.5s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
            console.log('%c[ACCESS GRANTED]', 'color: #00ff00; font-size: 16px;');
        }, 3000);
        return 'Initiating hack sequence...';
    };
    
    // Theme toggle functionality
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    // Make toggle function global
    window.toggleTheme = toggleTheme;
    
    // Terminal controls functionality
    document.querySelector('.control.minimize')?.addEventListener('click', function() {
        console.log('Window minimized');
    });
    
    document.querySelector('.control.maximize')?.addEventListener('click', function() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    });
    
    document.querySelector('.control.close')?.addEventListener('click', function() {
        // Try to close the window immediately without asking
        window.close();
        // Fallback: redirect to about:blank if window.close() doesn't work
        setTimeout(() => {
            window.location.href = 'about:blank';
        }, 100);
    });
});