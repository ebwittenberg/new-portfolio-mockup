const navBar = document.querySelector('[data-nav]');


window.addEventListener('scroll', function() {
    // if at top of the page
    if (window.pageYOffset === 0) {
        navBar.classList.remove('fixed');
    } else {
        navBar.classList.add('fixed')
    }
})
