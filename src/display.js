// import pages
import { home } from "./pages/home";
import { menu } from "./pages/menu";
import { contact } from "./pages/contact";

export default class ScreenDisplay {

    pages = {
        home,
        menu,
        contact,
    }

    // remove -btns
    regex = /^(.*?)-btn$/;
    
    activateNavBtns() {
        const btns = document.querySelector('#nav-btns');
        btns.addEventListener('click', (e) => {
            this.updateDisplay();
            
            // replace button-btn to button
            const page = e.target.id.replace(this.regex, '$1');
            // console.log(page);
            this.updateDisplay(page);
        })   
    }

    clearScreen() {
        const containerTarget = document.querySelector('#content-container')
        containerTarget.innerHTML = '';
    }

    updateDisplay(page) {
        this.clearScreen();

        if (page && this.pages[page]) {
            console.log(this.pages[page]);
        }
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