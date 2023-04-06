export default function displayContactPage() {
    const contactPage = document.createElement('div');
    contactPage.setAttribute('id', 'content');
    contactPage.classList.add('contact-page');

    contactPage.textContent = 'CONTACT PAGE TEST';
    console.log(contactPage);

    return contactPage;
}