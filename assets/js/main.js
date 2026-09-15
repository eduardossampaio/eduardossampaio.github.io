/**
 * Lógica da página principal (index.html).
 * Renderiza os cards de projetos e interações gerais da página.
 */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  setupYearInFooter();
});

/**
 * Renderiza os cards de projetos a partir de projectsData
 */
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  if (typeof projectsData === 'undefined' || !Array.isArray(projectsData) || projectsData.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Nenhum projeto disponível no momento.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = projectsData.map(project => `
    <article class="project-card" data-id="${project.id}">
      <div class="project-card-image-wrapper">
        <img 
          src="${project.image}" 
          alt="Prévia do projeto ${project.title}" 
          class="project-card-image"
          loading="lazy"
        />
      </div>
      <div class="project-card-content">
        <div class="project-tech-tags">
          ${project.technologies.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          ${project.technologies.length > 3 ? `<span class="tech-tag more">+${project.technologies.length - 3}</span>` : ''}
        </div>
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-description">${project.shortDescription}</p>
        <div class="project-card-actions">
          <a href="project.html?id=${encodeURIComponent(project.id)}" class="btn btn-primary btn-sm">
            Ver Detalhes
            <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Código no GitHub">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

/**
 * Atualiza o ano corrente no rodapé
 */
function setupYearInFooter() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
