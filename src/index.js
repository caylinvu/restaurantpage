import "./style.css";

function header() {
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

function initialPage() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');

/*     const icon = new Image();
    icon.src = Sushi;

    element.appendChild(icon); */

    return element;
}

document.body.appendChild(header());
document.body.appendChild(initialPage());

