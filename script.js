// ============================================
// DADOS DOS PROJETOS
// ============================================

const projects = [
  {
    id: 1,
    title: "Sistema de estoque em Java",
    description: "Sistema de gerenciamento de estoque desenvolvido em Java para praticar POO, manipulação de objetos e atualização de quantidade de produtos.",
    image: "https://www.magnific.com/br/fotos-vetores-gratis/sistema-gerenciamento-estoque",
    link: "https://github.com/CeluppiEnzo/estoque-de-produtos-java",
    layout: "normal"
  },
  {
    id: 2,
    title: "Agenda de contatos em Java",
    description: "Aplicação para cadastrar, listar, buscar, editar e remover contatos utilizando Java, ArrayList e programação orientada a objetos.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    link: "https://github.com/CeluppiEnzo/agenda-de-contatos-java",
    layout: "reverse"
  },
  {
    id: 3,
    title: "Lista de tarefas em Java",
    description: "Gerenciador de tarefas com funcionalidades de cadastro, listagem, conclusão e remoção de tarefas, desenvolvido para praticar POO e organização de código.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=400&fit=crop",
    link: "https://github.com/CeluppiEnzo/lista-de-tarefas-java",
    layout: "normal"
  },
  {
    id: 4,
    title: "Sistema de biblioteca em Java",
    description: "Projeto de gerenciamento de biblioteca com cadastro, busca, listagem e remoção de livros, desenvolvido para consolidar conceitos fundamentais de Java.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
    link: "https://github.com/CeluppiEnzo/Biblioteca-java",
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

function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = '';

  const projectsToShow = projects.slice(0, visibleProjects);

  projectsToShow.forEach((project) => {
    const projectCard = createProjectCard(project);
    container.appendChild(projectCard);
  });

  updateSeeMoreButton();
}

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
        <a href="${project.link}" target="_blank">View Project</a>
      </button>
    </div>
  `;

  return card;
}

function updateSeeMoreButton() {
  const seeMoreBtn = document.getElementById('see-more-btn');

  if (visibleProjects >= projects.length) {
    seeMoreBtn.classList.add('hidden');
  } else {
    seeMoreBtn.classList.remove('hidden');
  }
}

function loadMoreProjects() {
  visibleProjects = Math.min(visibleProjects + 3, projects.length);
  renderProjects();
}

document.addEventListener('DOMContentLoaded', function() {
  renderProjects();

  const seeMoreBtn = document.getElementById('see-more-btn');
  if (seeMoreBtn) {
    seeMoreBtn.addEventListener('click', loadMoreProjects);
  }

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
