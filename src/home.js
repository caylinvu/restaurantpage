import Chef from './images/homeimg.jpg';

export default function displayHomePage() {
    const homePage = document.createElement('div');
    homePage.setAttribute('id', 'content');
    homePage.classList.add('home-page');

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