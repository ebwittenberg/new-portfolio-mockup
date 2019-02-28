let projects = document.querySelectorAll('.project')

// handle click, toggle class big onto project
function projectClick() {
    console.log(this);
    this.classList.toggle('big');
}

// listen for a click on specific project
function attachClickHandler(oneProject) {
    oneProject.addEventListener('click', projectClick)
}

projects.forEach(attachClickHandler)
