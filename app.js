let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// document.addEventListener('DOMContentLoaded', function() {
//     const contactButton = document.querySelector('.btn-box a[href^="mailto:"]');
//     contactButton.addEventListener('click', function(event) {
//         // Remove subject and body to redirect without pre-filled content
//         this.href = 'mailto:kabirschaturvedi@gmail.com';
        
//         // Log or handle the click event as needed
//         console.log("Contact Me button was clicked.");
//     });
// });



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 100
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

ScrollReveal({
    reset: true,
    distance: '15px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.left', {origin: 'left'})
ScrollReveal().reveal('.right', {origin: 'right'})
ScrollReveal().reveal('.top', {origin: 'top'})
ScrollReveal().reveal('.bottom', {origin: 'bottom'})


const typed = new Typed('.multiple-text', {
    strings: ['Data Scientist', 'Data Analyst','AI & ML Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
