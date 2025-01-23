(() => {
    const btnDark = document.querySelector('div.dark-mode-btn');
    const main = document.querySelector('main')
    
    btnDark.addEventListener('click', () => {
        main.classList.toggle('dark-theme')
    })
    
})();