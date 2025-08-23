export function renderMenu(container) {
    const menu = document.createElement('h1');
    menu.classList.add('nonsense');
    menu.textContent = 'Our Selections';

    container.append(menu);
}

class Menu {
    
    category(name) {
        const categoryName = document.createElement('h1');
        categoryName.classList.add('cate-name');
        categoryName.textContent = `${name}`;
      
        return categoryName;
    }
}