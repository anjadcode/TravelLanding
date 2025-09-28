document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // --- Hero Carousel ---
    const heroCarousel = document.querySelector('.hero-carousel');
    const carouselDotsContainer = document.querySelector('.carousel-dots');
    const slidesData = [
        {
            image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
            title: 'Discover Your Next Adventure',
            subtitle: 'Breathtaking destinations at your fingertips.'
        },
        {
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
            title: 'Travel with Confidence',
            subtitle: 'Expertly curated packages for every traveler.'
        },
        {
            image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
            title: 'Create Lasting Memories',
            subtitle: 'Unforgettable experiences await.'
        }
    ];

    let currentSlideIndex = 0;

    function createSlides() {
        slidesData.forEach((slide, index) => {
            // Create slide element
            const slideEl = document.createElement('div');
            slideEl.classList.add('carousel-slide');
            if (index === 0) slideEl.classList.add('active');
            slideEl.style.backgroundImage = `url('${slide.image}')`;
            slideEl.innerHTML = `
                <div class="hero-content">
                    <h1>${slide.title}</h1>
                    <p>${slide.subtitle}</p>
                    <a href="#packages" class="btn">Book Now</a>
                </div>
            `;
            heroCarousel.prepend(slideEl);

            // Create dot element
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            carouselDotsContainer.appendChild(dot);
        });
    }

    function goToSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.dot');

        slides[currentSlideIndex].classList.remove('active');
        dots[currentSlideIndex].classList.remove('active');

        currentSlideIndex = index;

        slides[currentSlideIndex].classList.add('active');
        dots[currentSlideIndex].classList.add('active');
    }

    function nextCarouselSlide() {
        let nextIndex = (currentSlideIndex + 1) % slidesData.length;
        goToSlide(nextIndex);
    }

    createSlides();
    setInterval(nextCarouselSlide, 7000); // Auto-play every 7 seconds


    // --- Data for dynamic content ---
    const destinations = [
        { name: 'Paris, France', image: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', description: 'The city of love and lights.' },
        { name: 'Kyoto, Japan', image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', description: 'Ancient temples and serene gardens.' },
        { name: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', description: 'Tropical paradise with vibrant culture.' },
        { name: 'Rome, Italy', image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', description: 'Eternal city of history and art.' }
    ];

    const packages = [
        { name: 'Basic', price: '$999', features: ['3 Star Hotel', '5 Days, 4 Nights', 'Airport Transfer'] },
        { name: 'Standard', price: '$1499', features: ['4 Star Hotel', '7 Days, 6 Nights', 'Guided Tours'] },
        { name: 'Premium', price: '$2499', features: ['5 Star Hotel', '10 Days, 9 Nights', 'All Inclusive'] }
    ];

    const features = [
        { icon: 'fas fa-dollar-sign', text: 'Affordable Prices' },
        { icon: 'fas fa-user-shield', text: 'Trusted Guides' },
        { icon: 'fas fa-headset', text: '24/7 Support' }
    ];

    const testimonials = [
        { name: "Jane Doe", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80", rating: 5, text: "An unforgettable experience! Everything was perfectly organized." },
        { name: "John Smith", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80", rating: 5, text: "The best travel agency I've ever worked with. Highly recommended!" },
        { name: "Emily White", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80", rating: 5, text: "Our family trip was a huge success thanks to their team." }
    ];

    const socialLinks = [
        { class: 'fab fa-facebook-f', url: '#' },
        { class: 'fab fa-twitter', url: '#' },
        { class: 'fab fa-instagram', url: '#' }
    ];

    // --- Populate dynamic content ---
    function populateContent() {
        const destinationGrid = document.querySelector('.destination-grid');
        destinations.forEach(d => {
            destinationGrid.innerHTML += `
                <article class="destination-card fade-in">
                    <img src="${d.image}" alt="${d.name}">
                    <h3>${d.name}</h3>
                    <p>${d.description}</p>
                </article>
            `;
        });

        const packagesGrid = document.querySelector('.packages-grid');
        packages.forEach(p => {
            packagesGrid.innerHTML += `
                <article class="package-card fade-in">
                    <h3>${p.name}</h3>
                    <p class="price">${p.price}</p>
                    <ul>
                        ${p.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                    <a href="#" class="btn">Choose</a>
                </article>
            `;
        });

        const featuresGrid = document.querySelector('.features-grid');
        features.forEach(f => {
            featuresGrid.innerHTML += `
                <div class="feature-item fade-in">
                    <i class="${f.icon}"></i>
                    <h3>${f.text}</h3>
                </div>
            `;
        });

        const testimonialGrid = document.querySelector('.testimonial-grid');
        testimonials.forEach(t => {
            let stars = '';
            for (let i = 0; i < t.rating; i++) {
                stars += '<i class="fas fa-star"></i>';
            }

            testimonialGrid.innerHTML += `
                <div class="testimonial-card fade-in">
                    <img src="${t.image}" alt="${t.name}">
                    <div class="rating">${stars}</div>
                    <p>"${t.text}"</p>
                    <span class="author">- ${t.name}</span>
                </div>
            `;
        });

        const socialMedia = document.querySelector('.social-media');
        socialLinks.forEach(s => {
            socialMedia.innerHTML += `<a href="${s.url}" class="${s.class}"></a>`;
        });
    }

    populateContent();
    // Add Font Awesome for icons
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
    document.head.appendChild(fontAwesome);


    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Reset errors
        clearError(nameInput);
        clearError(emailInput);
        clearError(messageInput);

        // Validate Name
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required.');
            isValid = false;
        }

        // Validate Email
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required.');
            isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email.');
            isValid = false;
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required.');
            isValid = false;
        }

        if (isValid) {
            alert('Message sent successfully!');
            contactForm.reset();
        }
    });

    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.innerText = message;
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove('error');
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // --- Fade-in on Scroll Animation ---
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});
