// ============================================
// Smooth Scroll Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


// ============================================
// Active Navigation Link on Scroll
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});


// ============================================
// Contact Form Handling
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Option 1: Use Formspree (recommended - free and easy)
        // Sign up at https://formspree.io/ and replace YOUR_FORM_ID
        // Uncomment the code below and add your Formspree form ID
        
        /*
        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Message sent successfully! I\'ll get back to you soon.');
                contactForm.reset();
            } else {
                alert('Oops! Something went wrong. Please try again or email me directly.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Oops! Something went wrong. Please try again or email me directly.');
        }
        */

        // Option 2: EmailJS (alternative)
        // Sign up at https://www.emailjs.com/
        
        // Temporary alert until you set up a form service
        alert('Form submission is not set up yet. Please configure Formspree or EmailJS in js/script.js\n\nFor now, you can email me directly at: aparajitashrivastava04@gmail.com');
        console.log('Form data:', formData);
    });
}


// ============================================
// Smooth Scrolling for Navigation Links
// ============================================

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


// ============================================
// Add Animation Delays to Project Cards
// ============================================

document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});


// ============================================
// Dynamic Year in Footer
// ============================================

const updateFooterYear = () => {
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} Aparajita Shrivastava. Crafted with care.`;
    }
};

updateFooterYear();


// ============================================
// Mobile Menu Toggle (if needed in future)
// ============================================

// Uncomment if you want to add a hamburger menu for mobile
/*
const menuToggle = document.createElement('button');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '☰';
menuToggle.setAttribute('aria-label', 'Toggle menu');

const nav = document.querySelector('nav .container');
const navUl = document.querySelector('nav ul');

if (window.innerWidth <= 768) {
    nav.insertBefore(menuToggle, navUl);
    navUl.classList.add('mobile-hidden');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('mobile-hidden');
    });
}
*/


// ============================================
// Add Loading Animation (Optional)
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
