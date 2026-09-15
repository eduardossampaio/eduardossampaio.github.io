/**
 * Lógica da página de detalhes do projeto (project.html).
 * Lê o parâmetro ?id= da URL e renderiza os detalhes a partir de projectsData.
 */
document.addEventListener('DOMContentLoaded', () => {
  loadProjectDetail();
  setupYearInFooter();
});

function loadProjectDetail() {
  const container = document.getElementById('project-detail-content');
  if (!container) return;

  // Obter o parâmetro 'id' da URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

  if (!projectId || typeof projectsData === 'undefined') {
    renderNotFound(container);
    return;
  }

  // Buscar projeto correspondente
  const project = projectsData.find(item => item.id === projectId);

  if (!project) {
    renderNotFound(container);
    return;
  }

  // Atualizar título da aba do navegador
  document.title = `${project.title} - Portfólio Eduardo Sampaio`;

  // Renderizar conteúdo do projeto
  container.innerHTML = `
    <article class="project-detail-card">
      <header class="project-detail-header">
        <div class="project-tech-tags">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <h1 class="project-detail-title">${project.title}</h1>
        <p class="project-detail-subtitle">${project.shortDescription}</p>
      </header>

      <div class="project-detail-cover">
        <img src="${project.image}" alt="Capa do projeto ${project.title}" />
      </div>

      <div class="project-detail-body">
        <section class="detail-section">
          <h2>Sobre o Projeto</h2>
          <p>${project.fullDescription}</p>
        </section>

        ${project.highlights && project.highlights.length > 0 ? `
          <section class="detail-section">
            <h2>Destaques e Funcionalidades</h2>
            <ul class="highlights-list">
              ${project.highlights.map(item => `
                <li>
                  <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </section>
        ` : ''}

        <section class="detail-section">
          <h2>Tecnologias Utilizadas</h2>
          <div class="tech-stack-pills">
            ${project.technologies.map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
          </div>
        </section>

        <section class="detail-actions">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Ver no GitHub
          </a>
          ${project.liveUrl ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Acessar Demonstração
            </a>
          ` : ''}
        </section>
      </div>
    </article>
  `;
}

function renderNotFound(container) {
  container.innerHTML = `
    <div class="not-found-card">
      <div class="not-found-icon">🔍</div>
      <h2>Projeto não encontrado</h2>
      <p>O projeto selecionado não foi encontrado ou foi movido.</p>
      <a href="index.html#projetos" class="btn btn-primary">
        ← Voltar para a lista de projetos
      </a>
    </div>
  `;
}

function setupYearInFooter() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
