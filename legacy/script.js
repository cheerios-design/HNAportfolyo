// ========== 1. SMOOTH SCROLL ==========
// Navbar linklerine tıklandığında yumuşak kaydırma
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== 2. SCROLL SPY (Aktif Menü) ==========
// Sayfa scroll oldukça hangi bölümdeyse o menü aktif olur
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

function setActiveNav() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Eğer scroll pozisyonu bu section'ın içindeyse
        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute('id');
        }
    });

    // Tüm linklerdeki aktif sınıfını kaldır ve smooth transition ekle
    navLinks.forEach(link => {
        link.style.transition = 'color 0.5s ease, transform 0.3s ease';
        link.classList.remove('active');

        // Eğer link bu section'a aitse aktif yap
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Scroll olduğunda ve sayfa yüklendiğinde çalıştır
window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

// ========== 3. SCROLL TO TOP BUTTON ==========
const scrollToTopBtn = document.getElementById('scrollToTop');

// Sayfa 300px aşağı inince butonu göster
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Butona tıklandığında yukarı çık
scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== 4. DARK/LIGHT MODE TOGGLE ==========
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Local storage'dan tema tercihini oku
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Dark/Light mode değiştir
darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('light-mode');

    // Icon'u değiştir
    if (body.classList.contains('light-mode')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// ========== 5. SCROLL REVEAL ANIMATION ==========
// Tüm section'lar scroll ile görünür olsun
const pageSections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            sectionObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
});

pageSections.forEach((section, index) => {
    section.classList.add('section-reveal');
    section.style.transitionDelay = `${index * 0.06}s`;
    sectionObserver.observe(section);
});

// Kartların scroll ile animasyonlu görünmesi
const cards = document.querySelectorAll('.skill-card, .project-card, .experience-card, .comment-card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const cardObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Başlangıçta kartları gizle
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    cardObserver.observe(card);
});

// ========== 6. PROJECT CARD CLICK DETAIL ==========
// Proje kartlarına tıklandığında detay göster
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', function (e) {
        // Eğer link'e tıklanmadıysa
        if (!e.target.closest('.project-link')) {
            // Kartı büyüt ve detay göster efekti
            this.style.transform = this.style.transform === 'scale(1.02)' ? 'scale(1)' : 'scale(1.02)';

            // 300ms sonra eski haline döndür
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        }
    });
});

// ========== 7. NAVBAR BACKGROUND ON SCROLL ==========
// Scroll olunca navbar'a hafif background ekle
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        header.style.boxShadow = 'var(--shadow-md)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// ========== 8. TESTIMONIAL READ MORE ==========
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', function () {
        const description = this.parentElement;
        const hiddenText = description.querySelector('.more-text');

        if (!hiddenText) {
            return;
        }

        const isExpanded = description.classList.contains('expanded');
        description.classList.toggle('expanded', !isExpanded);
        this.textContent = isExpanded ? 'Read more' : 'Read less';
        this.setAttribute('aria-expanded', String(!isExpanded));
    });
});

// ========== Console Mesajı ==========
console.log('🎨 Portfolio Website - Hasibe Nida Akdoğan');
console.log('✨ All JavaScript features loaded successfully!');
console.log('🔧 Features: Smooth Scroll, Scroll Spy, Scroll to Top, Dark Mode, Scroll Reveal, Card Interactions');
