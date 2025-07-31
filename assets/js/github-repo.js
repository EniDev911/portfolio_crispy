document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.github-repo').forEach(async (el) => {
    const owner = el.dataset.owner;
    let repo = el.dataset.repo;
    let branch = null;

    // Si incluye "/tree/", separar repo y branch
    if (repo.includes('/tree/')) {
      const parts = repo.split('/tree/');
      repo = parts[0];
      branch = parts[1];
    }

    try {
      // Primero obtenemos información general del repo
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      if (!response.ok) throw new Error('No se pudo cargar el repositorio');

      const repoData = await response.json();

      // Si se especificó una rama, comprobar si existe
      if (branch) {
        const branchResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches/${branch}`);
        if (!branchResponse.ok) throw new Error(`La rama '${branch}' no existe en el repositorio`);
      }

      const languageIcons = {
        java: 'fa fab fa-java',
        python: 'fa fab fa-python',
        javascript: 'fa-brands fa-js',
        html: 'fa fab fa-html5',
        css: 'fab fa-css3-alt',
        cpp: 'fas fa-code',
        c: 'fas fa-code',
        json: 'fas fa-brackets-curly',
        shell: 'fas fa-terminal',
        bash: 'fas fa-terminal',
        typescript: 'devicon-typescript-plain colored',
      };

      const language = repoData.language?.toLowerCase();
      const iconClass = languageIcons[language] || 'fas fa-code';

      // Usamos la URL con rama si está definida
      const repoUrl = branch ? `${repoData.html_url}/tree/${branch}` : repoData.html_url;

      el.innerHTML = `
        <div class="github-card">
          <a href="${repoUrl}" target="_blank" rel="noopener noreferrer" class="github-link">
            <div class="github-header">
              <i class="fab fa-github github-icon" aria-hidden="true"></i>
              <h4>${repoData.name}</h4>
            </div>
            <p class="github-description">${repoData.description || ''}</p>
            ${
              repoData.language
                ? `<div class="github-language">
                     <i class="${iconClass}" aria-hidden="true"></i>
                     <span>${repoData.language}</span>
                   </div>`
                : ''
            }
          </a>
        </div>
      `;
    } catch (error) {
      el.innerHTML = `<div class="github-card">Error: ${error.message}</div>`;
    }
  });
});
