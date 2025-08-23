export function renderMenu(container) {
    const menu = document.createElement('h1');
    menu.classList.add('nonsense');
    menu.textContent = 'Our Selections';

    container.append(menu);
}