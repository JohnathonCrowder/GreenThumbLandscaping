document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    
    let isTouchDevice = false;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    // Check if it's a touch device
    try {
        document.createEvent("TouchEvent");
        isTouchDevice = true;
    } catch (e) {
        isTouchDevice = false;
    }

    const updatePosition = () => {
        if (!isTouchDevice) {
            // Smooth out the cursor circle movement
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;

            // The dot follows the mouse position directly
            dotX = mouseX;
            dotY = mouseY;

            // Calculate offsets to center the cursor circle around the dot
            const cursorSize = cursor.offsetWidth;
            const dotSize = cursorDot.offsetWidth;
            const cursorOffset = (cursorSize - dotSize) / 2;

            cursor.style.transform = `translate(${cursorX - cursorOffset}px, ${cursorY - cursorOffset}px)`;
            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
        }

        requestAnimationFrame(updatePosition);
    };

    if (!isTouchDevice) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Ensure cursor is visible when entering/leaving the window
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
            cursorDot.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorDot.style.opacity = '0';
        });

        updatePosition();

        // Magnetic effect for elements with 'magnetic' class
        const magneticElements = document.querySelectorAll('.magnetic');
        magneticElements.forEach(elem => {
            elem.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const elemX = rect.left + rect.width / 2;
                const elemY = rect.top + rect.height / 2;
                const deltaX = elemX - e.clientX;
                const deltaY = elemY - e.clientY;
                
                cursor.style.transform = `translate(${e.clientX - cursor.offsetWidth/2 + deltaX * 0.2}px, ${e.clientY - cursor.offsetHeight/2 + deltaY * 0.2}px) scale(1.5)`;
                cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            });

            elem.addEventListener('mouseleave', function() {
                cursor.style.transform = '';
            });
        });

        // Change cursor style for clickable elements
        const clickables = document.querySelectorAll('a, button, input, textarea, .clickable');
        clickables.forEach(elem => {
            elem.addEventListener('mouseenter', () => cursor.classList.add('cursor-clickable'));
            elem.addEventListener('mouseleave', () => cursor.classList.remove('cursor-clickable'));
        });
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.getElementById('main-nav');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('mobile-menu-open');
            this.classList.toggle('active');

            // Toggle the 'active' class on menu toggle spans
            const spans = this.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }
});


// Mobile submenu functionality
if (isTouchDevice) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        dropdownLink.addEventListener('click', function(e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
    });
}