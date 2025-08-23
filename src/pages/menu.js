export function renderMenu(container) {
    const heading = document.createElement('h1');
    heading.classList.add('nonsense');
    heading.textContent = 'Our Selections';
    container.append(heading);



}

class Menu {
    
    category(name, items = []) {
        const category = document.createElement('section');
        category.classList.add('cate-container');
        
        // category name
        const categoryName = document.createElement('h2');
        categoryName.classList.add('cate-name');
        categoryName.textContent = `${name}`;
        category.appendChild(categoryName);



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
        menuContainer.append(menuName, menuDesc, priceContainer);

        return menuContainer;
    }
}

const menuData = [
    {
        category: 'Cate1',
        items: [
            {},
            {}
        ]
    },
    {
        category: 'Cat2',
        items: [
            {},
            {}
        ]
    }
];

