// Navigation et fonctionnalités JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Éléments DOM
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinksContainer = document.getElementById('navLinks');
    const navbar = document.querySelector('.navbar');
    
    // ===== GESTION DU MENU MOBILE =====
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
    
    // Fermer le menu mobile quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinksContainer) {
                navLinksContainer.classList.remove('active');
                if (mobileMenuBtn) {
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                }
            }
        });
    });
    
    // ===== EFFET DE DÉFILEMENT SUR LA NAVBAR =====
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ===== SIMULATION DE PRIX DES CRYPTOMONNAIES =====
    function updateCryptoPrices() {
        // Prix initiaux
        const prices = {
            btc: 42850.75,
            eth: 2950.30,
            bmc: 18.65,
            ada: 0.48,
            sol: 95.20,
            usdt: 0.99
        };
        
        // Générer des changements aléatoires
        Object.keys(prices).forEach(crypto => {
            const change = (Math.random() - 0.5) * 0.04; // -2% à +2%
            prices[crypto] = prices[crypto] * (1 + change);
            
            // Mettre à jour l'affichage
            const priceElement = document.getElementById(`${crypto}-price`);
            const changeElement = document.getElementById(`${crypto}-change`);
            
            if (priceElement && changeElement) {
                // Formater le prix
                const formattedPrice = new Intl.NumberFormat('fr-FR', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }).format(prices[crypto]);
                
                priceElement.textContent = formattedPrice;
                
                // Formater le changement
                const changePercent = (change * 100).toFixed(2);
                const changeSign = change >= 0 ? '+' : '';
                changeElement.textContent = `${changeSign}${changePercent}%`;
                
                // Mettre à jour la classe pour la couleur
                changeElement.classList.remove('up', 'down');
                changeElement.classList.add(change >= 0 ? 'up' : 'down');
            }
        });
    }
    
    // Mettre à jour les prix toutes les 3 secondes
    setInterval(updateCryptoPrices, 3000);
    
    // ===== ANIMATION DES BLOCS BLOCKCHAIN =====
    function createBlock() {
        const animationContainer = document.querySelector('.blockchain-animation');
        if (!animationContainer) return;
        
        const block = document.createElement('div');
        block.classList.add('block');
        
        // Position aléatoire
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        block.style.left = `${posX}%`;
        block.style.top = `${posY}%`;
        
        // Taille aléatoire
        const size = Math.random() * 20 + 5;
        block.style.width = `${size}px`;
        block.style.height = `${size}px`;
        
        // Couleur aléatoire
        const colors = ['#0066ff', '#00ffaa', '#ff00cc', '#00ff88'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        block.style.backgroundColor = color;
        
        // Animation delay aléatoire
        const delay = Math.random() * 20;
        block.style.animationDelay = `-${delay}s`;
        
        animationContainer.appendChild(block);
        
        // Supprimer après un certain temps
        setTimeout(() => {
            if (block.parentNode) {
                block.parentNode.removeChild(block);
            }
        }, 30000);
    }
    
    // Créer des blocks régulièrement
    setInterval(createBlock, 800);
    
    // Créer quelques blocks au démarrage
    for (let i = 0; i < 8; i++) {
        setTimeout(createBlock, i * 300);
    }
    
    // ===== GESTION DU FORMULAIRE DE CONTACT =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simulation d'envoi
            alert(`Merci ${name} ! Votre message a été envoyé. Nous vous répondrons à ${email} dans les plus brefs délais.`);
            
            // Réinitialiser le formulaire
            contactForm.reset();
        });
    }
    
    // ===== ANIMATION AU DÉFILEMENT =====
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .crypto-card, .mining-stat, .platform-card, .nft-item, .exchange-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialiser les animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Exécuter une fois au chargement
    
    // ===== NEWSLETTER =====
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const newsletterBtn = newsletterForm.querySelector('.newsletter-btn');
        const newsletterInput = newsletterForm.querySelector('.newsletter-input');
        
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (newsletterInput.value && newsletterInput.value.includes('@')) {
                alert(`Merci de vous être abonné avec l'adresse : ${newsletterInput.value}`);
                newsletterInput.value = '';
            } else {
                alert('Veuillez entrer une adresse email valide.');
            }
        });
    }
    
    // ===== EFFET DE TAPOTEMENT SUR LES CARTES =====
    const cards = document.querySelectorAll('.feature-card, .crypto-card, .mining-stat, .platform-card, .nft-item, .exchange-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) scale(1)';
            this.style.boxShadow = 'var(--shadow)';
        });
    });
    
    // ===== MISE EN SURBRILLANCE DU LIEN ACTIF =====
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (linkHref === 'index.html' && currentPage === '')) {
                link.classList.add('active');
            }
        });
    }
    
    setActiveNavLink();
    
    // ===== FONCTIONNALITÉS DE LA PAGE ÉCHANGES =====
    function initExchangesPage() {
        // Animation spécifique pour les cartes d'échange
        const exchangeCards = document.querySelectorAll('.exchange-card');
        
        exchangeCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-10px) scale(1)';
                this.style.boxShadow = 'var(--shadow)';
            });
        });
        
        // Fonctionnalité de tri des plateformes
        const sortExchanges = (criteria) => {
            const container = document.querySelector('.exchanges-grid');
            if (!container) return;
            
            const cards = Array.from(container.querySelectorAll('.exchange-card'));
            
            cards.sort((a, b) => {
                let aValue, bValue;
                
                switch(criteria) {
                    case 'name':
                        aValue = a.querySelector('h3').textContent;
                        bValue = b.querySelector('h3').textContent;
                        return aValue.localeCompare(bValue);
                        
                    case 'rating':
                        aValue = parseFloat(a.querySelector('.stars span').textContent);
                        bValue = parseFloat(b.querySelector('.stars span').textContent);
                        return bValue - aValue; // Descendant
                        
                    case 'fees':
                        aValue = parseFloat(a.querySelector('.exchange-info p:nth-child(2)').textContent.replace('Frais de trading:', '').replace('%', '').trim());
                        bValue = parseFloat(b.querySelector('.exchange-info p:nth-child(2)').textContent.replace('Frais de trading:', '').replace('%', '').trim());
                        return aValue - bValue; // Ascendant (frais bas d'abord)
                }
                
                return 0;
            });
            
            // Réorganiser les cartes dans le conteneur
            cards.forEach(card => container.appendChild(card));
        };
        
        // Ajouter des boutons de tri si nécessaire
        const sortContainer = document.querySelector('.sort-options');
        if (!sortContainer && document.querySelector('.exchanges-grid')) {
            // Créer un conteneur pour les options de tri
            const newSortContainer = document.createElement('div');
            newSortContainer.className = 'sort-options';
            newSortContainer.style.margin = '30px 0';
            newSortContainer.style.textAlign = 'center';
            newSortContainer.innerHTML = `
                <h3 style="margin-bottom: 15px; color: var(--light);">Trier par:</h3>
                <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                    <button class="sort-btn" data-sort="name">Nom (A-Z)</button>
                    <button class="sort-btn" data-sort="rating">Meilleure note</button>
                    <button class="sort-btn" data-sort="fees">Frais bas</button>
                </div>
            `;
            
            // Insérer avant la grille d'échanges
            const exchangesGrid = document.querySelector('.exchanges-grid');
            if (exchangesGrid) {
                exchangesGrid.parentNode.insertBefore(newSortContainer, exchangesGrid);
                
                // Ajouter les événements aux boutons
                document.querySelectorAll('.sort-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const sortCriteria = this.getAttribute('data-sort');
                        sortExchanges(sortCriteria);
                        
                        // Mettre en surbrillance le bouton actif
                        document.querySelectorAll('.sort-btn').forEach(b => {
                            b.style.background = 'rgba(255,255,255,0.05)';
                            b.style.color = 'var(--light)';
                        });
                        this.style.background = 'var(--primary)';
                        this.style.color = 'var(--darker)';
                    });
                });
                
                // Style des boutons de tri
                const style = document.createElement('style');
                style.textContent = `
                    .sort-btn {
                        padding: 12px 24px;
                        background: rgba(255,255,255,0.05);
                        border: 1px solid rgba(255,255,255,0.1);
                        color: var(--light);
                        border-radius: 50px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        font-weight: 500;
                    }
                    .sort-btn:hover {
                        background: rgba(0,102,255,0.2);
                        border-color: var(--primary);
                    }
                    .sort-btn.active {
                        background: var(--primary);
                        color: var(--darker);
                    }
                `;
                document.head.appendChild(style);
            }
        }
        
        // Fonctionnalité de filtrage par fonctionnalité
        const filterByFeature = (feature) => {
            const cards = document.querySelectorAll('.exchange-card');
            
            cards.forEach(card => {
                const features = Array.from(card.querySelectorAll('.feature-tag'))
                    .map(tag => tag.textContent.toLowerCase());
                
                if (feature === 'all' || features.includes(feature.toLowerCase())) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        };
    }
    
    // Initialiser les fonctionnalités de la page des échanges
    if (window.location.pathname.includes('exchanges.html') || 
        document.querySelector('.exchanges-grid')) {
        initExchangesPage();
    }
    
    // ===== SIMULATION DE DONNÉES EN TEMPS RÉEL POUR LE TABLEAU COMPARATIF =====
    function updateComparisonTable() {
        const table = document.querySelector('.comparison-table table');
        if (!table) return;
        
        // Mettre à jour les notes aléatoirement
        const ratingCells = table.querySelectorAll('.rating-badge');
        ratingCells.forEach(cell => {
            const currentRating = parseFloat(cell.textContent);
            const change = (Math.random() - 0.5) * 0.1; // -5% à +5%
            const newRating = Math.min(5, Math.max(4, currentRating + change));
            cell.textContent = newRating.toFixed(1) + '/5';
        });
    }
    
    // Mettre à jour le tableau toutes les 10 secondes
    setInterval(updateComparisonTable, 10000);
    
    // ===== ANIMATION DES LOGOS DE PLATEFORMES =====
    function animatePlatformLogos() {
        const logoCircles = document.querySelectorAll('.logo-circle');
        
        logoCircles.forEach(circle => {
            circle.addEventListener('mouseenter', function() {
                this.style.transform = 'rotate(360deg) scale(1.1)';
                this.style.transition = 'transform 0.5s ease';
            });
            
            circle.addEventListener('mouseleave', function() {
                this.style.transform = 'rotate(0deg) scale(1)';
            });
        });
    }
    
    // Initialiser l'animation des logos
    animatePlatformLogos();
    
    // ===== COMPTEUR DE VISITES (SIMULATION) =====
    function updateVisitCounter() {
        const counterElement = document.getElementById('visit-counter');
        if (!counterElement) return;
        
        // Récupérer le compteur actuel ou initialiser
        let currentCount = parseInt(localStorage.getItem('siteVisits')) || 1000;
        
        // Augmenter le compteur
        currentCount += Math.floor(Math.random() * 10);
        localStorage.setItem('siteVisits', currentCount);
        
        // Afficher avec animation
        counterElement.textContent = currentCount.toLocaleString('fr-FR') + '+';
    }
    
    // Ajouter un compteur de visites si l'élément existe
    const visitCounterElement = document.getElementById('visit-counter');
    if (visitCounterElement) {
        updateVisitCounter();
        setInterval(updateVisitCounter, 5000);
    }
    
    // ===== BOUTONS "INVESTIR" INTERACTIFS =====
    const investButtons = document.querySelectorAll('.btn[href="#"], .btn:not([href])');
    investButtons.forEach(button => {
        if (button.textContent.includes('Investir') || button.textContent.includes('Commencer')) {
            button.addEventListener('click', function(e) {
                if (this.getAttribute('href') === '#' || !this.getAttribute('href')) {
                    e.preventDefault();
                    
                    // Animation de confirmation
                    const originalText = this.textContent;
                    this.textContent = 'Redirection...';
                    this.style.background = 'var(--success)';
                    
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.background = '';
                        
                        // Rediriger vers la page des échanges
                        if (!window.location.pathname.includes('exchanges.html')) {
                            window.location.href = 'exchanges.html';
                        } else {
                            // Simuler un investissement
                            const platform = this.closest('.exchange-card')?.querySelector('h3')?.textContent || 'cette plateforme';
                            alert(`Vous allez être redirigé vers ${platform} pour compléter votre investissement.`);
                        }
                    }, 1000);
                }
            });
        }
    });
    
    // ===== DARK/LIGHT MODE TOGGLE =====
    const themeToggle = document.createElement('button');
    themeToggle.id = 'themeToggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.style.position = 'fixed';
    themeToggle.style.bottom = '20px';
    themeToggle.style.right = '20px';
    themeToggle.style.width = '50px';
    themeToggle.style.height = '50px';
    themeToggle.style.borderRadius = '50%';
    themeToggle.style.background = 'var(--primary)';
    themeToggle.style.color = 'white';
    themeToggle.style.border = 'none';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.zIndex = '999';
    themeToggle.style.boxShadow = 'var(--shadow)';
    themeToggle.style.display = 'flex';
    themeToggle.style.alignItems = 'center';
    themeToggle.style.justifyContent = 'center';
    themeToggle.style.fontSize = '1.2rem';
    
    // Ajouter le toggle au body
    document.body.appendChild(themeToggle);
    
    // Gestion du thème
    themeToggle.addEventListener('click', function() {
        const isDark = document.body.classList.toggle('light-mode');
        this.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        
        // Sauvegarder la préférence
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
    
    // Restaurer le thème sauvegardé
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Ajouter les styles pour le mode clair
    const lightModeStyles = document.createElement('style');
    lightModeStyles.textContent = `
        .light-mode {
            --dark: #f0f2f5;
            --darker: #e4e6eb;
            --light: #1a1a1a;
            --gray: #666;
            background-color: var(--darker);
            color: var(--light);
        }
        
        .light-mode .navbar {
            background-color: rgba(240, 242, 245, 0.95);
        }
        
        .light-mode .feature-card,
        .light-mode .crypto-card,
        .light-mode .exchange-card {
            background-color: rgba(255, 255, 255, 0.9);
            color: var(--light);
        }
        
        .light-mode .form-control {
            background-color: white;
            color: #333;
            border-color: #ddd;
        }
    `;
    document.head.appendChild(lightModeStyles);
    
    // ===== LOADING ANIMATION =====
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loadingScreen';
    loadingScreen.style.position = 'fixed';
    loadingScreen.style.top = '0';
    loadingScreen.style.left = '0';
    loadingScreen.style.width = '100%';
    loadingScreen.style.height = '100%';
    loadingScreen.style.background = 'var(--darker)';
    loadingScreen.style.display = 'flex';
    loadingScreen.style.flexDirection = 'column';
    loadingScreen.style.alignItems = 'center';
    loadingScreen.style.justifyContent = 'center';
    loadingScreen.style.zIndex = '9999';
    loadingScreen.style.transition = 'opacity 0.5s ease';
    
    loadingScreen.innerHTML = `
        <div class="loading-spinner" style="width: 50px; height: 50px; border: 5px solid rgba(0,102,255,0.3); border-top: 5px solid var(--primary); border-radius: 50%; animation: spin 1s linear infinite;"></div>
        <h3 style="margin-top: 20px; color: var(--light);">Chargement de BlockChain Future...</h3>
        <p style="color: var(--gray); margin-top: 10px;">Votre porte vers l'avenir de la finance</p>
    `;
    
    document.body.appendChild(loadingScreen);
    
    // Ajouter l'animation de spin
    const spinAnimation = document.createElement('style');
    spinAnimation.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinAnimation);
    
    // Masquer l'écran de chargement après 1.5 secondes
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
    
    // ===== BACK TO TOP BUTTON =====
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'backToTop';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '80px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.width = '50px';
    backToTopButton.style.height = '50px';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.background = 'var(--primary)';
    backToTopButton.style.color = 'white';
    backToTopButton.style.border = 'none';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.zIndex = '999';
    backToTopButton.style.boxShadow = 'var(--shadow)';
    backToTopButton.style.display = 'none';
    backToTopButton.style.alignItems = 'center';
    backToTopButton.style.justifyContent = 'center';
    backToTopButton.style.fontSize = '1.2rem';
    backToTopButton.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(backToTopButton);
    
    // Afficher/masquer le bouton
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // Retour en haut
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===== NOTIFICATIONS =====
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.padding = '15px 25px';
        notification.style.borderRadius = '10px';
        notification.style.color = 'white';
        notification.style.zIndex = '10000';
        notification.style.boxShadow = 'var(--shadow)';
        notification.style.transform = 'translateX(150%)';
        notification.style.transition = 'transform 0.3s ease';
        notification.style.maxWidth = '300px';
        
        const colors = {
            info: 'var(--primary)',
            success: 'var(--success)',
            warning: 'var(--warning)',
            error: 'var(--danger)'
        };
        
        notification.style.background = colors[type] || colors.info;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Afficher la notification
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Masquer après 5 secondes
        setTimeout(() => {
            notification.style.transform = 'translateX(150%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
        
        // Fermer au clic
        notification.addEventListener('click', () => {
            notification.style.transform = 'translateX(150%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
    }
    
    // Exemple de notification de bienvenue
    setTimeout(() => {
        showNotification('🚀 Bienvenue sur BlockChain Future ! Découvrez nos plateformes d\'échange recommandées.', 'info');
    }, 2000);
    
    // ===== CHART SIMULATION (pour les prix) =====
    function initPriceCharts() {
        const cryptoCards = document.querySelectorAll('.crypto-card');
        
        cryptoCards.forEach(card => {
            const chartContainer = document.createElement('div');
            chartContainer.className = 'mini-chart';
            chartContainer.style.height = '50px';
            chartContainer.style.marginTop = '15px';
            chartContainer.style.position = 'relative';
            chartContainer.style.overflow = 'hidden';
            
            // Créer un graphique SVG simple
            const svgNS = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(svgNS, "svg");
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
            svg.style.borderRadius = '5px';
            svg.style.background = 'rgba(0,0,0,0.1)';
            
            // Générer des points aléatoires
            const points = [];
            const width = 200;
            const height = 50;
            
            for (let i = 0; i < 10; i++) {
                points.push({
                    x: (i * width / 9),
                    y: Math.random() * height
                });
            }
            
            // Créer la ligne du graphique
            let pathData = `M ${points[0].x} ${points[0].y}`;
            for (let i = 1; i < points.length; i++) {
                pathData += ` L ${points[i].x} ${points[i].y}`;
            }
            
            const path = document.createElementNS(svgNS, "path");
            path.setAttribute('d', pathData);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', 'var(--primary)');
            path.setAttribute('stroke-width', '2');
            
            svg.appendChild(path);
            chartContainer.appendChild(svg);
            
            // Ajouter le graphique à la carte
            card.querySelector('.exchange-info')?.after(chartContainer);
        });
    }
    
    // Initialiser les graphiques si sur la page crypto
    if (document.querySelector('.crypto-grid')) {
        initPriceCharts();
    }
});
