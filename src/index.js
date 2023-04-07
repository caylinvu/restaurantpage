import './style.css';
import displayHeader from './header.js';
import displayHomePage from './home.js';
import displayMenuPage from './menu.js';
import displayContactPage from './contact.js';
import displayFooter from './footer.js';

// Display initial home page
document.body.appendChild(displayHeader());
document.body.appendChild(displayHomePage());
document.body.appendChild(displayFooter());

// Add references to buttons in current file
const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');

// Event listeners for tabs
homeBtn.addEventListener('click', () => {
    menuBtn.classList.remove('selected-btn');
    contactBtn.classList.remove('selected-btn');
    homeBtn.classList.add('selected-btn');

    document.body.removeChild(document.body.childNodes[2]);
    document.body.insertBefore(displayHomePage(), document.body.children[1]);
})

menuBtn.addEventListener('click', () => {
    homeBtn.classList.remove('selected-btn');
    contactBtn.classList.remove('selected-btn');
    menuBtn.classList.add('selected-btn');

    document.body.removeChild(document.body.childNodes[2]);
    document.body.insertBefore(displayMenuPage(), document.body.children[1]);
});

contactBtn.addEventListener('click', () => {
    homeBtn.classList.remove('selected-btn');
    menuBtn.classList.remove('selected-btn');
    contactBtn.classList.add('selected-btn');

    document.body.removeChild(document.body.childNodes[2]);
    document.body.insertBefore(displayContactPage(), document.body.children[1]);
});


// TO DO

// MAYBE ADD TITLES TO PAGES

// ADD LINE UNDERNEATH CURRENT PAGE