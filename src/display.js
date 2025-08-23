// import modules


// add btn event listener

export default class ScreenDisplay {
    
    activateNavBtns() {
        const btns = document.querySelector('#nav-btns');
        btns.addEventListener('click', (e) => {
            console.log(e.target.id);
        })   
    }

    clearScreen() {
        const containerTarget = document.querySelector('#content-container')
        containerTarget.innerHTML = '';
    }
}










/*
Checklist 
- delete DOM node (faster?)??
- Class
- Modules
- Import, export
- 

if button is being click
    updateDisplay();
        clear pagecontent
            delete DOM node? or innerHTML = ''
        call {page()}



page()
    create element
    add attribute
    append
*/