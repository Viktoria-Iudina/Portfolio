//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});


// responsive hamburger menu
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('navigation-menu');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});