function socials(selector, data) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR');
        return false;
    }

    let HTML = '';

    for (const social of data) {
        const {href, icon}  = social; //destrukturizacija
        HTML += `<a href="${social.href}" target="_blank" class="fa fa-${social.icon} icon"></a>`
    }

    DOM.innerHTML = HTML;
}

export { socials }