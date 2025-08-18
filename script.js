document.addEventListener('DOMContentLoaded', function() {
    
    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.innerHTML;
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < originalText.length) {
            heroTitle.style.opacity = '1';
            charIndex++;
        }
    }
    
    setTimeout(typeWriter, 100);
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
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
    
    // Random glitch effect
    function glitchEffect() {
        const glitchElements = document.querySelectorAll('.glitch');
        glitchElements.forEach(element => {
            if (Math.random() > 0.95) {
                element.style.animation = 'glitch 0.3s infinite';
                setTimeout(() => {
                    element.style.animation = '';
                }, 300);
            }
        });
    }
    
    setInterval(glitchEffect, 3000);
    
    // Terminal cursor blink effect
    const cursor = document.querySelector('.blink-cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }, 500);
    }
    
    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Add random flicker to elements
    function randomFlicker() {
        const elements = document.querySelectorAll('.terminal-title, .section-title');
        elements.forEach(element => {
            if (Math.random() > 0.98) {
                element.style.opacity = '0.3';
                setTimeout(() => {
                    element.style.opacity = '1';
                }, 50);
            }
        });
    }
    
    setInterval(randomFlicker, 100);
    
    // Matrix rain effect for background (subtle)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.02';
    canvas.style.zIndex = '0';
    document.body.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for(let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = fontSize + 'px monospace';
        
        for(let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 35);
    
    // Window resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
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
    
    // Add retro boot sequence on first load
    if (!sessionStorage.getItem('booted')) {
        const bootScreen = document.createElement('div');
        bootScreen.className = 'boot-screen';
        bootScreen.innerHTML = `
            <div class="boot-text">
                <p>[BIOS] Initializing system...</p>
                <p>[OK] Memory test passed</p>
                <p>[OK] CPU detected</p>
                <p>[OK] Loading portfolio.exe</p>
                <p>[OK] System ready</p>
            </div>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .boot-screen {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #000;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: fadeOut 1s ease-out 2s forwards;
            }
            .boot-text {
                color: #00ff00;
                font-family: 'VT323', monospace;
                font-size: 20px;
            }
            .boot-text p {
                margin: 10px 0;
                opacity: 0;
                animation: fadeIn 0.5s forwards;
            }
            .boot-text p:nth-child(1) { animation-delay: 0.1s; }
            .boot-text p:nth-child(2) { animation-delay: 0.3s; }
            .boot-text p:nth-child(3) { animation-delay: 0.5s; }
            .boot-text p:nth-child(4) { animation-delay: 0.7s; }
            .boot-text p:nth-child(5) { animation-delay: 0.9s; }
            
            @keyframes fadeOut {
                to {
                    opacity: 0;
                    visibility: hidden;
                }
            }
            @keyframes fadeIn {
                to {
                    opacity: 1;
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(bootScreen);
        
        setTimeout(() => {
            bootScreen.remove();
            style.remove();
        }, 3000);
        
        sessionStorage.setItem('booted', 'true');
    }
    
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
        if (confirm('Exit terminal?')) {
            window.close();
        }
    });
});