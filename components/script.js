let isPhone1Visible = false;
let isPhone2Visible = false;

function togglePhone1() {
    const phone1 = document.getElementById('phone1');
    const btn1 = document.querySelector('.phone-btn1');
    
    if (isPhone1Visible) {
        phone1.innerHTML = 'demaroad.drd@gmail.com'; 
        btn1.innerHTML = 'Téléphone'; 
    } else {
        phone1.innerHTML = '06.64.49.48.54'; 
        btn1.innerHTML = 'E-mail'; 
    }
    isPhone1Visible = !isPhone1Visible; 
}

function togglePhone2() {
    const phone2 = document.getElementById('phone2');
    const btn2 = document.querySelector('.phone-btn2');
    
    if (isPhone2Visible) {
        phone2.innerHTML = 'demaroad.drd@gmail.com'; 
        btn2.innerHTML = 'Téléphone'; 
    } else {
        phone2.innerHTML = '06.80.76.60.43';
        btn2.innerHTML = 'E-mail';
    }
    isPhone2Visible = !isPhone2Visible;
}
