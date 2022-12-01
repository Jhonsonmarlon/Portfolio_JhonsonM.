function clickMenu() {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'flex';
    }
}

function clickForaMenu() {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'none';
    }
}

function clickWork(){
    if (op1.style == ':hover'){
        web_works.style.display = 'flex';
        design_works.style.display = 'flex';
    } else if (op2.style == ':hover'){
        web_works.style.display = 'flex';
        design_works.style.display = 'none';
    } else if (op3.style == ':hover'){
        web_works.style.display = 'none';
        design_works.style.display = 'flex';
    }
}

