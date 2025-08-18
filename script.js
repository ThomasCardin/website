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
    
    // Add retro loading bar on first load
    if (!sessionStorage.getItem('booted')) {
        const loadingScreen = document.createElement('div');
        loadingScreen.className = 'loading-screen';
        loadingScreen.innerHTML = `
            <div class="loading-container">
                <h2 class="loading-title">THOMAS CARDIN PORTFOLIO</h2>
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress-fill"></div>
                    </div>
                    <div class="progress-text">0%</div>
                </div>
                <div class="loading-messages">
                    <div class="loading-message">
                        Loading... <span class="loading-hourglass">⏳</span>
                    </div>
                </div>
                <div class="big-spinner-overlay" style="display: none;">
                </div>
            </div>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .loading-screen {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #c3c3c3;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'MS Sans Serif', sans-serif;
            }
            .loading-container {
                background: #c3c3c3;
                border: 2px outset #c3c3c3;
                padding: 30px;
                min-width: 400px;
                text-align: center;
                box-shadow: 2px 2px 0px rgba(0,0,0,0.5);
            }
            .loading-title {
                color: #000;
                font-size: 16px;
                font-weight: bold;
                margin: 0 0 10px 0;
            }
            .loading-subtitle {
                color: #000;
                font-size: 12px;
                margin-bottom: 20px;
            }
            .progress-container {
                margin: 20px 0;
            }
            .progress-bar {
                width: 100%;
                height: 20px;
                background: #fff;
                border: 1px inset #c3c3c3;
                position: relative;
                overflow: hidden;
            }
            .progress-fill {
                height: 100%;
                background: linear-gradient(90deg, #000080 0%, #0000ff 100%);
                width: 0%;
                transition: width 0.1s ease;
            }
            .progress-text {
                color: #000;
                font-size: 12px;
                margin-top: 5px;
            }
            .loading-message {
                color: #000;
                font-size: 11px;
                margin-top: 15px;
                min-height: 15px;
            }
            .loading-hourglass {
                display: inline-block;
            }
            .big-spinner-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(195, 195, 195, 0.7);
                backdrop-filter: blur(3px);
                image-rendering: pixelated;
                transform: scale(1.05);
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(loadingScreen);
        
        // Loading animation
        const progressFill = loadingScreen.querySelector('.progress-fill');
        const progressText = loadingScreen.querySelector('.progress-text');
        const messageEl = loadingScreen.querySelector('.loading-message');
        const bigSpinnerOverlay = loadingScreen.querySelector('.big-spinner-overlay');
        
        let progress = 0;
        let isLagging = false;
        
        const loadingInterval = setInterval(() => {
            // Normal loading until 85%
            if (progress < 85) {
                progress += Math.random() * 8 + 3;
            }
            // Slow down and lag around 90%
            else if (progress < 90) {
                progress += Math.random() * 2 + 0.5;
            }
            // Big lag at 90% - stays there for a while
            else if (progress < 95) {
                // Show big blur during lag
                if (!isLagging) {
                    isLagging = true;
                    bigSpinnerOverlay.style.display = 'flex';
                }
                
                if (Math.random() > 0.88) {
                    progress += Math.random() * 2;
                }
            }
            // Finally finish loading
            else {
                // Hide big spinner
                if (isLagging) {
                    bigSpinnerOverlay.style.display = 'none';
                    isLagging = false;
                }
                progress += Math.random() * 8 + 2;
            }
            
            if (progress > 100) progress = 100;
            
            progressFill.style.width = progress + '%';
            progressText.textContent = Math.floor(progress) + '%';
            
            if (progress >= 100) {
                clearInterval(loadingInterval);
                bigSpinnerOverlay.style.display = 'none';
                messageEl.textContent = 'Complete!';
                setTimeout(() => {
                    loadingScreen.remove();
                    style.remove();
                }, 800);
            }
        }, 120);
        
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
        // Try to close the window immediately without asking
        window.close();
        // Fallback: redirect to about:blank if window.close() doesn't work
        setTimeout(() => {
            window.location.href = 'about:blank';
        }, 100);
    });
});