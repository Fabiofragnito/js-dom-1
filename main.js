function Lamp() {
    const lampOff = document.getElementById('lampOff');
    const lampOn = document.getElementById('lampOn');
    const button = document.querySelector('.btn');

    button.addEventListener('click', function () {
        if (lampOn.style.display == 'none') {
            lampOff.style.display = 'block'; 
            
             
        } else {
            lampOn.style.display = 'block';   
            lampOff.style.display = 'none'; 
            
            
        }
    });
}

// Invoco la funzione
Lamp();

