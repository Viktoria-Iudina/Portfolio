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


// CAROUSEL IN CODEV MODAL

// 1. Declare var
number = 0;

// 3. Auto turn over
let interval = true;

if (interval == true) {
    showSlide(number);
    setInterval(function() {
        forwardSlide();
    }, 10000)
} else if (interval == false) {
    showSlide(number);
}

//2. Button forward
function forwardSlide() {
    number = number + 1;
    showSlide(number);
}
// 2. Button back
function backSlide() {
    number = number - 1;
    showSlide(number);
}

// 1. Fix slides length
function showSlide(n) {

    let slides = document.getElementsByClassName("slides");

    if (n > slides.length - 1) {
        number = 0;
    } else if (n < 0) {
        number = slides.length - 1;
    }
    // hide slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
        slides[number].style.display = "block";
}
// call function
showSlide("slides");



// TITLE ANIMATION - TERMINAL TEXT EFFECT

consoleText(['Designer', 'Développeur', 'Intégrateur'], 'text',['#6652a0','#6652a0','#6652a0']);
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}


// DARK LIGHT MODE SWITCH

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    // change a theme
    document.body.classList.toggle('dark');
    // document.getElementById("text").style.color = "#988ed5";
    // document.getElementById("console").style.color = "#988ed5";
    // document.getElementById("web").style.color = "#988ed5";
});