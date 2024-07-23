document.addEventListener("DOMContentLoaded", function() {
    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    // Update cursor position smoothly
    function animate() {
        cursorX += (mousePosX - cursorX) * 0.1;
        cursorY += (mousePosY - cursorY) * 0.1;
        dotX += (mousePosX - dotX) * 0.2;
        dotY += (mousePosY - dotY) * 0.2;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';

        requestAnimationFrame(animate);
    }

    let mousePosX = 0;
    let mousePosY = 0;

    document.addEventListener('mousemove', function(e) {
        mousePosX = e.clientX;
        mousePosY = e.clientY;
    });

    // Magnetic hover effect
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = Math.floor((centerX - e.clientX) * -0.5);
            const deltaY = Math.floor((centerY - e.clientY) * -0.5);

            cursor.style.transition = 'transform 0.2s ease-out';
            cursor.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.5)`;
        });

        el.addEventListener('mouseleave', function() {
            cursor.style.transition = 'transform 0.2s ease-out';
            cursor.style.transform = 'translate(0, 0) scale(1)';
        });
    });

    animate();

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Special cursor states
    const cursorElements = {
        '.link': 'link',
        'button': 'pointer',
        'a': 'pointer'
    };

    for (let selector in cursorElements) {
        document.querySelectorAll(selector).forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-' + cursorElements[selector]);
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-' + cursorElements[selector]);
            });
        });
    }
});