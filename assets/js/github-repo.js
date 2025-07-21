document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.github-repo').forEach(async (el) => {
    const owner = el.dataset.owner;
    const repo = el.dataset.repo;

    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);

      if (!response.ok) {
        throw new Error('No se pudo cargar el repositorio');
      }

      const repoData = await response.json();

      const languageIcons = {
        java: 'fa fab fa-java',
        python: 'fa fab fa-python',
        javascript: 'fa-brands fa-js',
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
      const iconClass = languageIcons[language] || 'fas fa-code'; // fallback si no existe

      el.innerHTML = `
        <div class="github-card">
          <a href="${repoData.html_url}" target="_blank" rel="noopener noreferrer" class="github-link">
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

function getLanguageIcon(language) {
  if (!language) return '';

  const iconsMap = {
    javascript: 'devicon-javascript-plain colored',
    typescript: 'devicon-typescript-plain colored',
    python: 'devicon-python-plain colored',
    java: 'devicon-java-plain colored',
    csharp: 'devicon-csharp-plain colored',
    ruby: 'devicon-ruby-plain colored',
    php: 'devicon-php-plain colored',
    go: 'devicon-go-plain colored',
    rust: 'devicon-rust-plain colored',
  };

  const key = language.toLowerCase();

  return iconsMap[key] || 'fas fa-code';
}
