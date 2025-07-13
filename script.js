
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.header-nav').classList.toggle('active');
        });


// carousel section 
        (function(){
            const track = document.getElementById('carouselTrack');
            const dots = document.querySelectorAll('.carousel-dot');
            const totalSlides = dots.length;
            let currentIndex = 0;
            let slideWidthPercent = 20; // Each slide 20% width on desktop view
            // Adjust slide width % on smaller view - must match CSS breakpoints
            function getSlideWidthPercent() {
                if (window.innerWidth <= 400) return 100;
                if (window.innerWidth <= 768) return 50;
                return 20;
            }
            // Update slide position by transform
            function goToSlide(index) {
                const widthPercent = getSlideWidthPercent();
                track.style.transform = `translateX(-${index * widthPercent}%)`;
                dots.forEach(dot => dot.classList.remove('active'));
                dots[index].classList.add('active');
                dots[index].setAttribute('aria-current', 'true');
                dots.forEach((dot, idx) => {
                if(idx !== index) dot.removeAttribute('aria-current');
                });
                currentIndex = index;
            }
            // Dot click event
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                goToSlide(parseInt(dot.dataset.slide));
                });
            });

            // Optional: Auto-play functionality
            let autoPlayInterval = null;
            function startAutoPlay() {
                autoPlayInterval = setInterval(() => {
                let nextIndex = (currentIndex + 1) % totalSlides;
                goToSlide(nextIndex);
                }, 4000);
            }
            function stopAutoPlay() {
                clearInterval(autoPlayInterval);
            }
            // Pause auto-play on mouse enter, resume on mouse leave
            track.addEventListener('mouseenter', stopAutoPlay);
            track.addEventListener('mouseleave', startAutoPlay);
            // Initialize
            goToSlide(0);
            startAutoPlay();
            // Update slide on window resize
            window.addEventListener('resize', () => {
                goToSlide(currentIndex);
            });
            })();
            const carouselDots = document.querySelector('.carousel-dots');    

// Services section
            // Simple animation when scrolling to services
        document.addEventListener('DOMContentLoaded', function() {
            const serviceCards = document.querySelectorAll('.service-card');
            
            function checkScroll() {
                serviceCards.forEach(card => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if(cardPosition < screenPosition) {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }
                });
            }
            
            // Initial state
            serviceCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transitionDelay = `${index * 0.1}s`;
            });
            
            window.addEventListener('scroll', checkScroll);
            checkScroll(); // Trigger on load if already in view
        });
            
        // Popup Script 

        document.addEventListener('DOMContentLoaded', function() {
            const popup = document.getElementById('ageVerificationPopup');
            const exitBtn = document.getElementById('exitBtn');
            const enterBtn = document.getElementById('enterBtn');
            const closeBtn = document.getElementById('closeBtn');
            const mainContent = document.getElementById('mainContent');
            
            // Store the verification status in localStorage
            const isVerified = localStorage.getItem('ageVerified') === 'true';
            
            if (isVerified) {
                popup.style.display = 'none';
                mainContent.style.display = 'block';
            } else {
                popup.style.display = 'flex';
            }

            // Exit button redirects to a safe site
            exitBtn.addEventListener('click', function() {
                window.location.href = 'https://www.google.com';
            });
            
            // Enter button hides the popup and shows content
            enterBtn.addEventListener('click', function() {
                popup.style.display = 'none';
                mainContent.style.display = 'block';
                localStorage.setItem('ageVerified', 'true');
            });
            
            // Close button works only to acknowledge (can't dismiss without choice)
            closeBtn.addEventListener('click', function() {
                // We could animate the close or add sound here
            });
            
            // Prevent closing with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    e.preventDefault();
                    // Optional: Add a warning that this popup must be answered
                }
            });
        });