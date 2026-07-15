const projects = [
    {
        title: "SMARTCRM",
        description: "A CRM system with integrated AI capabilities for intelligent customer management.",
        tags: ["PHP", "Symfony", "AI"],
        image: "assets/images/dashboard_SmartCRM.png",
        type: "code"
    },
    {
        title: "TechRostrum Landing Page",
        description: "Corporate landing page for a technology company. Designed in Figma.",
        tags: ["Figma", "UI/UX", "Frontend Design"],
        image: "assets/images/Techro Home.png",
        type: "design"
    },
    {
        title: "JOYn",
        description: "Web portal connecting joiners for outdoor activities and adventures.",
        tags: ["React", "Next.js", "Tailwind CSS"],
        image: "assets/images/Dashboard_JOYn.png",
        type: "code"
    },
    {
        title: "PropertyGenius.ai",
        description: "AEO (Answer Engine Optimization) platform for real estate. Built landing page and user/admin dashboards.",
        tags: ["React", "Next.js", "Tailwind CSS", "AI Integration"],
        image: "assets/images/PropertyGenius Landing Page.png",
        type: "code"
    }
];

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = projects.map((project, index) => `
        <div class="project-card" data-type="${project.type}">
            <div class="project-card__image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-card__content">
                <h3 class="project-card__title">${project.title}</h3>
                <p class="project-card__description">${project.description}</p>
                <div class="project-card__tags">
                    ${project.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
                </div>
                <div class="project-card__links">
                    ${project.links && project.links.live ? `<a href="${project.links.live}" class="project-card__link" target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live Demo
                    </a>` : ''}
                    ${project.links && project.links.code ? `<a href="${project.links.code}" class="project-card__link" target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="16 18 22 12 16 6"/>
                            <polyline points="8 6 2 12 8 18"/>
                        </svg>
                        View Code
                    </a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);