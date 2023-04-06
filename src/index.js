import './style.css';
import Chef from './images/homeimg.jpg';
import GitHub from './images/gh.png';

function displayHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Sushi 101';
    header.appendChild(title);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    header.appendChild(btnContainer);

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    btnContainer.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    btnContainer.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    btnContainer.appendChild(contactBtn);

    return header;
}

function displayHomePage() {
    const homePage = document.createElement('div');
    homePage.setAttribute('id', 'content');

    const homeImg = new Image();
    homeImg.src = Chef;
    homeImg.classList.add('home-img');
    homePage.appendChild(homeImg);

    const about = document.createElement('div');
    homePage.appendChild(about);

    const aboutHeader = document.createElement('div');
    aboutHeader.classList.add('content-header');
    aboutHeader.textContent = 'About Us';
    about.appendChild(aboutHeader);

    const aboutText = document.createElement('div');
    aboutText.classList.add('content-text');
    aboutText.textContent = 'Sushi 101 has been serving the best sushi in Las Vegas since 2004! We fly our fish in fresh everyday to ensure only the highest quality items are served in our restaurant. Browse our menu to see nigiri and sashimi options, along with sushi rolls and more to satitate your appetite!';
    about.appendChild(aboutText);

    const hours = document.createElement('div');
    homePage.appendChild(hours);

    const hoursHeader = document.createElement('div');
    hoursHeader.classList.add('content-header');
    hoursHeader.textContent = 'Hours';
    hours.appendChild(hoursHeader);

    const hoursText = document.createElement('div');
    hoursText.classList.add('content-text');
    hoursText.textContent = 'Sunday - Thursday: 11am - 10pm\nFriday - Saturday: 11am - 12pm';
    hours.appendChild(hoursText);

    const location = document.createElement('div');
    homePage.appendChild(location);

    const locationHeader = document.createElement('div');
    locationHeader.classList.add('content-header');
    locationHeader.textContent = 'Location';
    location.appendChild(locationHeader);

    const locationText = document.createElement('div');
    locationText.classList.add('content-text');
    locationText.textContent = '333 W Sushi St,\nLas Vegas, NV 33333';
    location.appendChild(locationText);

    return homePage;
}

function displayFooter() {
    // <footer class="footer">Made by caylinvu <a href="https://github.com/caylinvu"><img src="images/gh.png" alt="github logo" class="logo"></a></footer>

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

document.body.appendChild(displayHeader());
document.body.appendChild(displayHomePage());
document.body.appendChild(displayFooter());