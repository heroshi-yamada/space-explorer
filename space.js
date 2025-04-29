// Create stars
function createStars() {
    const container = document.getElementById('stars-container');
    
    // Create small stars
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(star);
    }
    
    // Create shooting stars
    for (let i = 0; i < 5; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = `${Math.random() * 20}%`;
        shootingStar.style.top = `${Math.random() * 20}%`;
        shootingStar.style.animationDelay = `${Math.random() * 10 + 5}s`;
        container.appendChild(shootingStar);
    }
}

// Show planet info modal
function showPlanetInfo(name, info, colorClass) {
    const modal = document.getElementById('info-modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
    
    title.textContent = name;
    content.textContent = info;
    title.className = `text-2xl font-bold mb-2 ${colorClass}`;
    
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
}

// Show star info modal
function showStarInfo(name, info, colorClass) {
    const modal = document.getElementById('info-modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
    
    title.textContent = name;
    content.textContent = info;
    title.className = `text-2xl font-bold mb-2 ${colorClass}`;
    
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
}

// Show nebula info modal
function showNebulaInfo(name, info, imageUrl) {
    const modal = document.getElementById('info-modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
    
    title.textContent = name;
    content.textContent = info;
    title.className = 'text-2xl font-bold mb-2 text-purple-400';
    
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
}

// Show galaxy info modal
function showGalaxyInfo(name, info, imageUrl) {
    const modal = document.getElementById('info-modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
    
    title.textContent = name;
    content.textContent = info;
    title.className = 'text-2xl font-bold mb-2 text-blue-400';
    
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('info-modal');
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
}

// Scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Initialize
window.onload = function() {
    createStars();
};
