// Landing page elements
export function renderHome(container) {

    const text1 = document.createElement('h1');
    text1.classList.add('test', 'test2');
    text1.textContent = 'The finest eating establishment ever established for eating';
    
    const text2 = document.createElement('h2');
    text2.classList.add('test3', 'test4');
    text2.textContent = 'Home of the Krabby Patty — secret formula definitely not written on this website.';

    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'Feed Me Krabby Patties';

    container.append(text1, text2, btn);
}