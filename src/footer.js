import GitHub from './images/gh.png';

export default function displayFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.textContent = 'Created by caylinvu'

    const ghIcon = new Image();
    ghIcon.src = GitHub;
    ghIcon.classList.add('logo');

    const a = document.createElement('a');
    a.appendChild(ghIcon);
    a.href = "https://github.com/caylinvu";
    footer.appendChild(a);

    return footer;
}