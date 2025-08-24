// Landing page elements
export function renderHome(container) {

    const textContainer = document.createElement('div');
    textContainer.classList.add('home-container');

    const text1 = document.createElement('h1');
    text1.classList.add('main-text');
    text1.textContent = 'The finest eating establishment ever established for eating';
    
    const text2 = document.createElement('h2');
    text2.classList.add('sub-head');
    text2.textContent = 'Home of the Krabby Patty — secret formula definitely not written on this website.';

    const btn = document.createElement('button');
    btn.classList.add('jump-to-menu', 'menu');
    btn.setAttribute('id', 'menu');
    btn.textContent = 'Feed Me Krabby Patties';

    textContainer.append(text1, text2, btn);
    container.append(textContainer);
}

