const navBar = document.querySelector('[data-nav]');
const projects = document.querySelectorAll('[data-project]')


window.addEventListener('scroll', function() {
    // if at top of the page
    if (window.pageYOffset === 0) {
        navBar.classList.remove('fixed');
    } else {
        navBar.classList.add('fixed')
    }
})

// projects.forEach(project => {
//     project.addEventListener('mouseover', (e) => {
//         project.classList.add('hover');

//         const button = document.createElement('button');
//         button.textContent = 'Button';

//         project.append(button);
//         console.log('hovering');
//     })
// })
// projects.forEach(project => {
//     project.addEventListener('mouseout', (e) => {
//         project.classList.remove('hover');
//         console.log('hovering');
//     })
// })
