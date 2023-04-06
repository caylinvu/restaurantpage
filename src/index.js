import './style.css';
import displayHeader from './header.js';
import displayHomePage from './home.js';
import displayFooter from './footer.js';

document.body.appendChild(displayHeader());
document.body.appendChild(displayHomePage());
document.body.appendChild(displayFooter());