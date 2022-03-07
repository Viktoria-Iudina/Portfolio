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

// MODAL Weather App
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) 
    return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) 
    return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// MODAL CODEV
const openModalCodevButtons = document.querySelectorAll('[data-modal-target]');
const closeModalCodevButtons = document.querySelectorAll('[data-close-button]');
const overlayCodev = document.getElementById('overlay');

openModalCodevButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalcodev = document.querySelector(button.dataset.modalcodevTarget)
        openModal(modalcodev)
    })
})

overlay.addEventListener('click', () => {
  const modalscodev = document.querySelectorAll('.modalcodev.active')
  modalscodev.forEach(modalcodev => {
    closeModal(modalcodev)
  })
})

closeModalCodevButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalcodev = button.closest('.modalcodev')
        closeModal(modalcodev)
    })
})

function openModalCodev(modalcodev) {
    if (modalcodev == null) 
    return
    modalcodev.classList.add('active')
    overlay.classList.add('active')
}

function closeModalCodev(modalcodev) {
    if (modalcodev == null) 
    return
    modalcodev.classList.remove('active')
    overlay.classList.remove('active')
}