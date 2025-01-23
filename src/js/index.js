(() => {
    const btnDark = document.querySelector('div.dark-mode-btn');
    const main = document.querySelector('main');
    let btnToggle = false
    
    btnDark.addEventListener('click', () => {
        main.classList.toggle('dark-theme');
        btnToggle = !btnToggle;

        if (btnToggle) {
            btnDark.classList.add('animation-right');
            btnDark.classList.remove('animation-left');
        } else {
            btnDark.classList.remove('animation-right');
            btnDark.classList.add('animation-left');
            
        }
    })
    
})();