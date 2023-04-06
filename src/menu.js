export default function displayMenuPage() {
    const menuPage = document.createElement('div');
    menuPage.setAttribute('id', 'content');
    menuPage.textContent = 'MENU PAGE TEST';
    console.log(menuPage);

    return menuPage;
}