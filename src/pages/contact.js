export function ntact(container) {

    container.append(createContactCard());
}

function createContactCard() {

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('contact-container');

    // contact info container
    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.classList.add('contact-info-container');

    // contact info top
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info-header');

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

    contactInfo.append(conHeader, email, address, phone);

    // contact info ps section
    const psSection = document.createElement('p');
    psSection.classList.add('contact-ps');
    psSection.textContent = 'We will not reveal the secret formula, no matter how nicely you ask.';

    contactInfoContainer.append(contactInfo, psSection);
    
    cardContainer.append(contactInfoContainer);
    return cardContainer;
}