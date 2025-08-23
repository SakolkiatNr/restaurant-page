export function renderMenu(container) {
    const menu = document.createElement('h1');
    menu.classList.add('nonsense');
    menu.textContent = 'Our Selections';

    container.append(menu);
}

class Menu {
    
    category(name) {
        // change it to section
        const category = document.createElement('h2');
        category.classList.add('cate-name');
        category.textContent = `${name}`;
      
        return category;
    }

    menu(name, desc, price) {
        // menu card
        const menuContainer = document.createElement('dl');
        menuContainer.classList.add('item-container');

        // name
        const menuName = document.createElement('dt');
        menuName.classList.add('menu-name');
        menuName.textContent = `${name}`;

        // item description
        const menuDesc = document.createElement('dd');
        menuDesc.classList.add('menu-desc');
        menuDesc.textContent = `${desc}`;
        
        const priceContainer = document.createElement('dd');
        priceContainer.classList.add('price');

        // price value
        const priceData = document.createElement('data');
        priceData.setAttribute('value', price);
        priceData.classList.add('price-value');
        priceData.textContent = `$${price}`;
        
        priceContainer.appendChild(priceData);
        menuContainer.appendChild(menuName, menuDesc, priceContainer);

    }
}



