// Smooth scrolling for navigation links
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

// Timeline animation on scroll
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            item.classList.add('animate');
        }
    });
}

// Project navigation
function openProject(projectId) {
    const projectUrls = {
        'supply-chain': './supply_chain_dashboard.html',
        'calculator': './calculator.html',
        'inventory': './home_inventory.html'
    };
    
    if (projectUrls[projectId]) {
        window.open(projectUrls[projectId], '_blank');
    }
}

// Navbar background on scroll
function updateNavbar() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
}

// Event listeners
window.addEventListener('scroll', () => {
    animateTimeline();
    updateNavbar();
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    animateTimeline();
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
