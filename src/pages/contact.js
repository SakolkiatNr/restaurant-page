export function renderContact(container) {
    const contact = document.createElement('h1');
    contact.classList.add('lmao');
    contact.textContent = 'Contact';

    container.append(contact);
}

function lmao() {

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('contact-container');

    // contact info container
    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.classList.add('contact-info-container');

    // contact info top
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    // contact krabby
    const conHeader = document.createElement('h1');
    conHeader.classList.add('contact-header');
    conHeader.textContent = "Contact Krabby";

    const email = document.createElement('p');
    email.classList.add('contact-email');
    email.textContent = "notthesecretformula@krustykrab.com";

    const address = document.createElement('p');
    address.classList.add('contact-address');
    address.textContent = `1313 Bikini Bottom Ave,\nnext to Barg'n-Mart, under the sea.`;

    const phone = document.createElement('p');
    phone.classList.add('contact-phone');
    phone.textContent = `1-800-KRABBY \n(Squidward might pick up.`;

    contactInfo.append(email, address, phone);

    // ps section

    // funny map location

    ˇ
}