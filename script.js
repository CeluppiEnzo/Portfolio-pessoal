// ============================================
// DADOS DOS PROJETOS
// ============================================

const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "RANDOM IMAGE — here I will place the description and more in-depth details of my future projects.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    link: "#",
    layout: "normal" // normal ou reverse
  },
  {
    id: 2,
    title: "Project Name",
    description: "RANDOM IMAGE — here I will place the description and more in-depth details of my future projects.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    link: "#",
    layout: "reverse"
  },
  {
    id: 3,
    title: "Project Name",
    description: "RANDOM IMAGE — here I will place the description and more in-depth details of my future projects.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    link: "#",
    layout: "normal"
  },
  {
    id: 4,
    title: "Project Name",
    description: "RANDOM IMAGE — here I will place the description and more in-depth details of my future projects.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    link: "#",
    layout: "reverse"
  },
  {
    id: 5,
    title: "Project Name",
    description: "RANDOM IMAGE — here I will place the description and more in-depth details of my future projects.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    link: "#",
    layout: "normal"
  },
  {
    id: 6,
    title: "Project Name",
    description: "RANDOM IMAGE — here I will place the description and more in-depth details of my future projects.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    link: "#",
    layout: "reverse"
  }
];

// ============================================
// VARIÁVEIS GLOBAIS
// ============================================

let visibleProjects = 3;

// ============================================
// FUNÇÕES
// ============================================

/**
 * Renderiza os projetos na página
 */
function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = '';

  // Mostrar apenas os projetos visíveis
  const projectsToShow = projects.slice(0, visibleProjects);

  projectsToShow.forEach((project) => {
    const projectCard = createProjectCard(project);
    container.appendChild(projectCard);
  });

  // Mostrar ou esconder o botão "See more"
  updateSeeMoreButton();
}

/**
 * Cria um card de projeto
 */
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = `project-card ${project.layout === 'reverse' ? 'reverse' : ''}`;

  card.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="project-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <button class="btn btn-primary">
        <a href="${project.link}">View Project</a>
      </button>
    </div>
  `;

  return card;
}

/**
 * Atualiza a visibilidade do botão "See more"
 */
function updateSeeMoreButton() {
  const seeMoreContainer = document.getElementById('see-more-container');
  const seeMoreBtn = document.getElementById('see-more-btn');

  if (visibleProjects >= projects.length) {
    seeMoreBtn.classList.add('hidden');
  } else {
    seeMoreBtn.classList.remove('hidden');
  }
}

/**
 * Carrega mais projetos
 */
function loadMoreProjects() {
  visibleProjects = Math.min(visibleProjects + 3, projects.length);
  renderProjects();
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Renderizar projetos iniciais
  renderProjects();

  // Adicionar evento ao botão "See more"
  const seeMoreBtn = document.getElementById('see-more-btn');
  if (seeMoreBtn) {
    seeMoreBtn.addEventListener('click', loadMoreProjects);
  }

  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

/**
 * Adiciona um novo projeto ao array
 * Uso: addProject({ id: 7, title: "...", ... })
 */
function addProject(project) {
  projects.push(project);
  renderProjects();
}

/**
 * Remove um projeto pelo ID
 * Uso: removeProject(1)
 */
function removeProject(projectId) {
  const index = projects.findIndex(p => p.id === projectId);
  if (index > -1) {
    projects.splice(index, 1);
    renderProjects();
  }
}

/**
 * Atualiza um projeto existente
 * Uso: updateProject(1, { title: "Novo título" })
 */
function updateProject(projectId, updates) {
  const project = projects.find(p => p.id === projectId);
  if (project) {
    Object.assign(project, updates);
    renderProjects();
  }
}

/**
 * Reseta para mostrar apenas 3 projetos
 */
function resetProjects() {
  visibleProjects = 3;
  renderProjects();
}
