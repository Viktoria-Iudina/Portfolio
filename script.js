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

// changing hamburger menu icon on click
document.getElementById("hamburger2").addEventListener("click", function() {

    this.classList.toggle("fa-times");
    document.getElementById("navigation-menu").classList.toggle("visible");
});