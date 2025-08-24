export function renderMenu(container) {
    const heading = document.createElement('h1');
    heading.classList.add('menu-header');
    heading.textContent = 'Our Selections';
    container.append(heading);

    const menuObj = new Menu();

    // append each category element to container
    menuData.forEach(cat => {
        const categoryElement = menuObj.category(cat.category, cat.items);
        container.append(categoryElement);
    });    
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

        // cards container
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('cards-container');
        category.appendChild(cardContainer);

        // add multiple menu to category
        items.forEach(item => cardContainer.append(this.menu(item.name, item.desc, item.price)));
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
        category: 'Burgers & Patties',
        items: [
            {name: 'Krabby Patty (Classic)', desc: 'The iconic patty everyone fights over… and Plankton desperately tries to steal.', price: '4.20'},
            {name: 'Double Krabby Patty', desc: 'Twice the patty, twice the joy, twice the regret for your diet.', price: '8.40 '},
            {name: 'Triple Krabby Patty', desc: 'Because one patty is never enough and two is just teasing.', price: '12.60 '},
            {name: 'Jellyfish Jelly Patty', desc: 'A zesty patty topped with jellyfish jelly… slightly shocking.', price: '6.66 '},
        ]
    }, {
        category: 'Sides That Scream “Seafood',
        items: [
            {name: 'Kelp Fries', desc: 'Golden, crispy, and probably greener than your average vegetable.', price: '2.99 (or one small regret)'},
            {name: 'Seaweed Rings', desc: 'Crispy rings of ocean goodness that may or may not taste like the ocean.', price: '3.50 '},
            {name: 'Bikini Bottom Slaw', desc: 'Shredded veggies tossed in secret sauce, perfect for pretending to be healthy.', price: '1.99 '},
            {name: 'Barnacle Chips', desc: 'Crunchy, salty, and clinging to your teeth like… barnacles.', price: '3.25'},
        ]
    }, {
        category: 'Ocean Beverages',
        items: [
            {name: 'Coral Cola', desc: 'Fizzing, popping, and suspiciously coral-colored.', price: '1.50 '},
            {name: 'Seafoam Shake', desc: 'Like drinking a cloud, if clouds were ocean flavored.', price: '2.75 '},
            {name: 'Diet Water', desc: 'All the hydration, none of the taste.', price: '0.99'},
            {name: 'Oyster Juice', desc: 'Brave souls only. Salty with a hint of regret.', price: '4.44'},
        ]
    }, {
        category: 'Desserts Under the Sea',
        items: [
            {name: 'Chum-Free Sundae', desc: 'Sweet, creamy, and guaranteed chum-free.', price: '3.33 '},
            {name: 'Bubble Gum Ice Cream', desc: 'Ice cream that blows bubbles… literally.', price: '2.22 '},
            {name: 'Goo Lagoon Float', desc: 'A fizzy, frothy drink with a side of questionable lagoon vibes.', price: '3.75 '},
            {name: 'Spongecake', desc: 'Light, fluffy, and suspiciously absorbent. Not included: SpongeBob.', price: '1.99 '},
        ]
    }, {
        category: 'Specials Nobody Asked For',
        items: [
            {name: 'Squidward’s Sad Salad', desc: 'Lettuce only. Guaranteed to lower your mood.', price: '0.01 '},
            {name: 'The Chum Burger', desc: 'A nightmare on a bun. We crossed it off the menu for your safety.', price: '999.99 '},
            {name: 'Mystery Bucket Meal', desc: 'Chef’s choice… but sometimes Plankton sneaks in a surprise.', price: '7.77 '},
        ]
    }
]
