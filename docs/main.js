// Configure your repository URL here after creating it on GitHub.
const repositoryUrl = 'https://github.com/USERNAME/REPOSITORY';
const repoLink = document.getElementById('repo-link');
if (repositoryUrl.includes('USERNAME/REPOSITORY')) {
  repoLink.style.display = 'none';
} else {
  repoLink.href = repositoryUrl;
}
const links = [...document.querySelectorAll('.sidebar nav a')];
links.forEach(a => a.addEventListener('click', () => {
  links.forEach(link => link.classList.remove('active'));
  a.classList.add('active');
}));
