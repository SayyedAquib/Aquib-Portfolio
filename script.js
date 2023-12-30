/* The function toggles the visibility of a menu and changes the state of a hamburger icon. */

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/* The code is creating a new instance of the Typed.js library and initializing it with the specified options. */

let typed = new Typed('#element', {
    strings: ['Software Engineer.', 'Web Developer.', 'React Developer.', 'Frontend Developer.', 'Software Developer.', 'Android Developer.'],
    typeSpeed: 50,
    loop: true
});