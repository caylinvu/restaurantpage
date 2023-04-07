export default function displayHeader() {
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
    homeBtn.classList.add('home-btn');
    homeBtn.classList.add('selected-btn');
    homeBtn.textContent = 'Home';
    btnContainer.appendChild(homeBtn);

    console.log(homeBtn.classList);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-btn');
    menuBtn.textContent = 'Menu';
    btnContainer.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('contact-btn');
    contactBtn.textContent = 'Contact';
    btnContainer.appendChild(contactBtn);

    return header;
}