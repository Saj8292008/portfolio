// Portfolio site interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add subtle parallax effect to bento boxes on mouse move
    const bentoBoxes = document.querySelectorAll('.bento-box');

    bentoBoxes.forEach(box => {
        box.addEventListener('mousemove', (e) => {
            const rect = box.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
});
