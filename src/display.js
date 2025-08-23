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
    #regex = /^(.*?)-btn$/;
    
    activateNavBtns() {
        const btns = document.querySelector('#nav-btns');
        btns.addEventListener('click', (e) => {
            if (!e.target.id) return;
            const page = e.target.id.replace(this.#regex, '$1');
            this.updateDisplay(page);
        })   
    }

    // add Home Button listener
    activeHomeBtn() {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', (e) => {
            this.updateDisplay(e.target.id);
        });
    }


    #containerTarget = document.querySelector('#content-container');

    clearScreen() {
        this.#containerTarget.innerHTML = '';
    }

    updateDisplay(page) {
        this.clearScreen();

        // render page
        if (page && this.pages[page]) {
            this.pages[page](this.#containerTarget);
        }
    }

    render() {
        // set home page as default when landing
        this.activateNavBtns();
        this.updateDisplay('home');
        this.activeHomeBtn();
    }
}
