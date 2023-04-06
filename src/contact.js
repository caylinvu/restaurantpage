export default function displayContactPage() {
    const contactPage = document.createElement('div');
    contactPage.setAttribute('id', 'content');
    contactPage.classList.add('contact-page');

    const restaurant = document.createElement('div');
    contactPage.appendChild(restaurant);

    const restaurantHeader = document.createElement('div');
    restaurantHeader.classList.add('content-header');
    restaurantHeader.textContent = 'Restaurant';
    restaurant.appendChild(restaurantHeader);

    const restaurantContent = document.createElement('div');
    restaurantContent.classList.add('content-text');
    restaurantContent.textContent = 'Sushi 101\nPhone: 123-456-7890\nEmail: sushi101@email.com';
    restaurant.appendChild(restaurantContent);

    const owner = document.createElement('div');
    contactPage.appendChild(owner);

    const ownerHeader = document.createElement('div');
    ownerHeader.classList.add('content-header');
    ownerHeader.textContent = 'Owner';
    owner.appendChild(ownerHeader);

    const ownerContent = document.createElement('div');
    ownerContent.classList.add('content-text');
    ownerContent.textContent = 'Bob Ross\nPhone: 234-567-8901\nEmail: bobross@email.com';
    owner.appendChild(ownerContent);

    const manager = document.createElement('div');
    contactPage.appendChild(manager);

    const managerHeader = document.createElement('div');
    managerHeader.classList.add('content-header');
    managerHeader.textContent = 'Manager';
    manager.appendChild(managerHeader);

    const managerContent = document.createElement('div');
    managerContent.classList.add('content-text');
    managerContent.textContent = 'Rick Ross\nPhone: 345-678-9012\nEmail: rickross@email.com';
    manager.appendChild(managerContent);

    const chef = document.createElement('div');
    contactPage.appendChild(chef);

    const chefHeader = document.createElement('div');
    chefHeader.classList.add('content-header');
    chefHeader.textContent = 'Head Chef';
    chef.appendChild(chefHeader);

    const chefContent = document.createElement('div');
    chefContent.classList.add('content-text');
    chefContent.textContent = 'Ross Matthews\nPhone: 456-789-0123\nEmail: theross@email.com';
    chef.appendChild(chefContent);

    return contactPage;
}