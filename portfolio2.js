// toggie icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// asteroid code start




document.addEventListener("DOMContentLoaded", function () {
    const meteorContainer = document.querySelector(".home-content-main");
    let meteorInterval;

    function createMeteor() {
        const meteor = document.createElement("span");
        meteor.classList.add("meteor");

        // Adjust positioning based on screen size
        const topPosition = Math.random() * 100;
        const leftPosition = Math.random() * 100;
        
        meteor.style.top = `${topPosition}%`;
        meteor.style.left = `${leftPosition}%`;
        
        // Adjust animation speed based on device
        const duration = window.innerWidth < 768 ? 
            `${Math.random() * 1.5 + 0.5}s` : 
            `${Math.random() * 2 + 1}s`;
            
        meteor.style.animationDuration = duration;

        meteorContainer.appendChild(meteor);

        setTimeout(() => {
            meteor.remove();
        }, 2000);
    }

    // Adjust meteor frequency based on device
    function startMeteors() {
        const frequency = window.innerWidth < 768 ? 500 : 300;
        
        if (meteorInterval) {
            clearInterval(meteorInterval);
        }
        
        meteorInterval = setInterval(createMeteor, frequency);
    }

    // Start meteors
    startMeteors();
    
    // Adjust on window resize
    window.addEventListener('resize', startMeteors);
});

// asteroid code end

// custom scroll animations code

// // scroll sections avtive link
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll =()=> {
//     sections.forEach(sec=> {
//         let top = window.scrollY;
//         let offset = sec.offsetTop-150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top <offset + height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id +']').classList.add('active');
//             })

//         };
//     });

//     //sticky navbar
//     let header = document.querySelector('header')

//     header.classList.toggle('sticky',window.scrollY>100);

//     // remove toggle icon and navbar when click navbar link (scroll)
//     menuIcon.classList.remove('bx-x')
//     navbar.classList.remove('active')
//  };

// // scroll reveal
// ScrollReveal({
//     // reset: true,
//     distance:'80px',
//     duration:2000,
//     delay:200
//  });

// //  ScrollReveal().reveal('.home-content,.heading', {origi:'top' });
//  ScrollReveal().reveal('.home-img,.service-comtainer,.portfolio-box,.contact form', {origi:'bottom' });
//  ScrollReveal().reveal('.home-content h1,.about-img', {origi:'left' });
//  ScrollReveal().reveal('.home-content p,.about-content', {origi:'right' });

//  typed js
const typed = new Typed(".multiple-text", {
  strings: [
    "Fronted Developer",
    "React Js Developer",
    "Javascript Developer",
    "UI/UX Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
