function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-text, .tag');
    revealElements.forEach(el => observer.observe(el));

    const skillObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const skillCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tags = entry.target.querySelectorAll('.skill-tag');
                tags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.classList.add('revealed');
                    }, index * 50);
                });
                observer.unobserve(entry.target);
            }
        });
    };

    const skillObserver = new IntersectionObserver(skillCallback, skillObserverOptions);

    const skillCategories = document.querySelectorAll('.skills__category');
    skillCategories.forEach(category => skillObserver.observe(category));

    const projectObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const projectCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    };

    const projectObserver = new IntersectionObserver(projectCallback, projectObserverOptions);

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => projectObserver.observe(card));

    const socialObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const socialCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const links = entry.target.querySelectorAll('.social-link');
                links.forEach((link, index) => {
                    setTimeout(() => {
                        link.classList.add('revealed');
                    }, index * 50);
                });
                observer.unobserve(entry.target);
            }
        });
    };

    const socialObserver = new IntersectionObserver(socialCallback, socialObserverOptions);

    const socialsContainer = document.querySelector('.contact__socials');
    if (socialsContainer) {
        socialObserver.observe(socialsContainer);
    }

    const certObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const certCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    };

    const certObserver = new IntersectionObserver(certCallback, certObserverOptions);

    const certBadges = document.querySelectorAll('.cert-badge');
    certBadges.forEach(badge => certObserver.observe(badge));

    const dividerObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const dividerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    };

    const dividerObserver = new IntersectionObserver(dividerCallback, dividerObserverOptions);

    const dividers = document.querySelectorAll('.section-divider');
    dividers.forEach(divider => dividerObserver.observe(divider));
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);