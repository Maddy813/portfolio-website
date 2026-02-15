// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars when scrolled into view
    const skillBars = document.querySelectorAll('.skill-level');
    
    // Create intersection observer
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                const level = skillLevel.getAttribute('data-level');
                
                // Animate the skill bar
                setTimeout(() => {
                    skillLevel.style.width = level + '%';
                }, 300);
                
                // Stop observing after animation
                observer.unobserve(skillLevel);
            }
        });
    }, observerOptions);
    
    // Observe each skill bar
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add current year to footer if needed
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});