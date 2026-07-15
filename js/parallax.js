function initParallax() {
    const layers = document.querySelectorAll('.parallax-layer');

    let ticking = false;

    function updateParallax() {
        const scrollY = window.pageYOffset;

        layers.forEach((layer, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(scrollY * speed);
            layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    initCustomCursor();
}

function initCustomCursor() {
    if (window.innerWidth <= 768) return;

    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;

        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';

        requestAnimationFrame(animateFollower);
    }

    animateFollower();

    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-tag, .tag, input, textarea');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            follower.classList.add('hover');
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            follower.classList.remove('hover');
        });
    });
}

document.addEventListener('DOMContentLoaded', initParallax);