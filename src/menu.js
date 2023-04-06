export default function displayMenuPage() {
    const menuPage = document.createElement('div');
    menuPage.setAttribute('id', 'content');
    menuPage.classList.add('menu-page');

    const nigiri = document.createElement('div');
    menuPage.appendChild(nigiri);

    const nigiriHeader = document.createElement('div');
    nigiriHeader.classList.add('content-header');
    nigiriHeader.textContent = 'Nigiri';
    nigiri.appendChild(nigiriHeader);

    const nigiriContainer = document.createElement('div');
    nigiriContainer.classList.add('content-text')
    nigiriContainer.textContent = 'Tuna (Maguro) $5.95\nSalmon (Sake) $5.95\nAlbacore (Shiro Maguro) $5.95\nYellowtail (Hamachi) $5.95\nSmoked Salmon $5.95\nRed Snapper (Tai) $5.95\nTilapia (Izumidai) $5.95\nPickled Mackerel (Saba) $5.95';
    nigiri.appendChild(nigiriContainer);

    const sashimi = document.createElement('div');
    menuPage.appendChild(sashimi);

    const sashimiHeader = document.createElement('div');
    sashimiHeader.classList.add('content-header');
    sashimiHeader.textContent = 'Sashimi';
    sashimi.appendChild(sashimiHeader);

    const sashimiContainer = document.createElement('div');
    sashimiContainer.classList.add('content-text')
    sashimiContainer.textContent = 'Tuna (Maguro) $14.95\nSalmon (Sake) $14.95\nAlbacore (Shiro Maguro) $14.95\nYellowtail (Hamachi) $14.95\nSmoked Salmon $14.95\nRed Snapper (Tai) $14.95\nTilapia (Izumidai) $14.95\nPickled Mackerel (Saba) $14.95';
    sashimi.appendChild(sashimiContainer);

    const basicRolls = document.createElement('div');
    menuPage.appendChild(basicRolls);

    const basicRollsHeader = document.createElement('div');
    basicRollsHeader.classList.add('content-header');
    basicRollsHeader.textContent = 'Basic Sushi Rolls';
    basicRolls.appendChild(basicRollsHeader);

    const basicRollsContainer = document.createElement('div');
    basicRollsContainer.classList.add('content-text');
    basicRollsContainer.textContent = 'California $7.95 - Crab mix, cucumber, and avocado\nSpicy Crab $8.95 - Spicy crab mix and cucumber\nSpicy California $8.95 - Spicy crab mix, cucumber, and avocado\nAlaska $8.95 - Salmon, crab stick, and avocado\nTunacado $8.95 - Tuna, crab stick, and avocado\nPhilly $8.95 - Smoked salmon, cream cheese, and avocado\nEel $8.95 - Fresh water eel and avocado\nYellowtail $8.95 - Yellowtail, crab stick, avocado, and scallions';
    basicRolls.appendChild(basicRollsContainer);

    const specialtyRolls = document.createElement('div');
    menuPage.appendChild(specialtyRolls);

    const specialtyRollsHeader = document.createElement('div');
    specialtyRollsHeader.classList.add('content-header');
    specialtyRollsHeader.textContent = 'Specialty Sushi Rolls';
    specialtyRolls.appendChild(specialtyRollsHeader);

    const specialtyRollsContainer = document.createElement('div');
    specialtyRollsContainer.classList.add('content-text');
    specialtyRollsContainer.textContent = 'Drunken Fish $15.95 - Spicy tuna and avocado, topped with tuna, salmon, yellowtail, eel, spicy mayo, and eel sauce\n\nFuji $14.95 - Tempura Shrimp, cream cheese, and crab stick, topped with tuna, masago, scallions, tempura flakes, spicy mayo, and eel sauce\n\n911 $14.95 - Spicy crab roll topped with spicy tuna, avocado slices, fresh jalapeno, spicy mayo, and sriracha\n\nTiger $14.95 - Tempura shrimp, crab mix, and cucumber, topped with spicy tuna, avocado slices, and eel sauce';
    specialtyRolls.appendChild(specialtyRollsContainer);


    return menuPage;
}