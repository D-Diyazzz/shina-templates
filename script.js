//Filter menu
let dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    let select = dropdown.querySelector('.select')
    let caret = dropdown.querySelector('.caret')
    let menu = dropdown.querySelector('.menu')
    let options = dropdown.querySelectorAll('.menu li')
    let selected = dropdown.querySelector('.selected')

    select.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove('active');
            });

            option.classList.add('active');
        });
    });
});