import "./style.css";

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

    const about = document.createElement('div');
    about.textContent = "Sushi 101 has been serving the best sushi in Las Vegas since 2004! We fly our fish in fresh everyday to ensure only the highest quality items are served in our restaurant. Browse our menu to see nigiri and sashimi options, along with sushi rolls and more to satitate your appetite!";
    homePage.appendChild(about);

    return homePage;
}

document.body.appendChild(displayHeader());
document.body.appendChild(displayHomePage());

