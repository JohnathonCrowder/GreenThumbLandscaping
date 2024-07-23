document.querySelectorAll('.service-icon').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2) rotate(10deg)';
    });
    icon.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});