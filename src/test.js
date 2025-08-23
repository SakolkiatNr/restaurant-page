// add btn event listener
export function activateNavBtns() {
    const btns = document.querySelector('#nav-btns');
    btns.addEventListener('click', (e) => {
        // get btn ID
        console.log(e.target.id);
    })   
}


