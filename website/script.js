document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky Navbar transparency effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(13, 13, 16, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(13, 13, 16, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Inject Floating Buttons
    const floatingButtonsHTML = `
        <div class="floating-buttons">
            <a href="https://wa.me/919034795106?text=Hi,+I+got+the+number+from+website" class="float-btn float-whatsapp" target="_blank" aria-label="WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="tel:+919034795106" class="float-btn float-call" aria-label="Call Us">
                <i class="fa-solid fa-phone"></i>
            </a>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', floatingButtonsHTML);

    // Portfolio Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
                    item.classList.remove('hidden');
                    // Add animation here if desired
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Lightbox Functionality
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const src = img.getAttribute('src');
            lightbox.innerHTML = `
                <i class="fa-solid fa-xmark lightbox-close"></i>
                <img src="${src}" alt="Portfolio Image">
            `;
            lightbox.classList.add('active');

            // Close logic
            lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
                lightbox.classList.remove('active');
            });
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
});

// Reels Scroller Buttons
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');
const reelsScroller = document.getElementById('reelsScroller');

if (scrollLeftBtn && scrollRightBtn && reelsScroller) {
    scrollLeftBtn.addEventListener('click', () => {
        reelsScroller.scrollBy({ left: -300, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
        reelsScroller.scrollBy({ left: 300, behavior: 'smooth' });
    });
}

