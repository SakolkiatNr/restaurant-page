// import pages
import { renderHome } from "./pages/home";
import { renderMenu } from "./pages/menu";
import { renderContact } from "./pages/contact";

export default class ScreenDisplay {

    pages = {
        home: renderHome,
        menu: renderMenu,
        contact: renderContact,
    }

    // remove -btns
    regex = /^(.*?)-btn$/;
    
    activateNavBtns() {
        const btns = document.querySelector('#nav-btns');
        btns.addEventListener('click', (e) => {
            
            // replace button-btn to button
            const page = e.target.id.replace(this.regex, '$1');
            this.updateDisplay(page);
        })   
    }

    containerTarget = document.querySelector('#content-container');

    clearScreen() {
        this.containerTarget.innerHTML = '';
    }

    updateDisplay(page) {
        this.clearScreen();

        // render page
        if (page && this.pages[page]) {
            this.pages[page](this.containerTarget);
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