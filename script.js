// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    let scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = 'var(--secondary-color)';
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Parallax effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = hero.querySelector('.hero-content');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            parallax.style.opacity = 1 - (scrolled * 0.002);
        }
    });
}

// Add intersection observer for scroll animations on cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe pub cards and stat cards
document.querySelectorAll('.pub-card, .stat-card, .event-category, .contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add stagger effect to cards
document.querySelectorAll('.pubs-grid .pub-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.stats-grid .stat-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Trigger counter animation when stat cards are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target.querySelector('.stat-number');
            const value = parseInt(number.textContent);
            animateCounter(number, value);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});

// Add random rotation to highlight box on hover
const highlightBox = document.querySelector('.highlight-box');
if (highlightBox) {
    highlightBox.addEventListener('mouseenter', () => {
        const randomRotation = (Math.random() - 0.5) * 4;
        highlightBox.style.transform = `rotate(${randomRotation}deg)`;
    });
    
    highlightBox.addEventListener('mouseleave', () => {
        highlightBox.style.transform = 'rotate(-1deg)';
    });
}

// Mobile menu functionality (if needed for smaller screens)
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('.main-nav ul');
        if (nav && !nav.classList.contains('mobile-ready')) {
            nav.classList.add('mobile-ready');
            // Additional mobile menu logic can be added here if needed
        }
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Log page load
console.log('Kjellerpubnettverket nettside lastet! 🍺☕');
