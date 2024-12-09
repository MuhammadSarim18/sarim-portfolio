const tl = gsap.timeline();


tl.to("body", {
  overflow: "hidden",

})
  .to(".preloader .text-container", {
    duration: 0,
    opacity: 1,

    ease: "Power3.easeOut"
  })
  .from(".preloader .text-container h1", {
    duration: 1.5,
    delay: 0.2,
    y: 200,
    skewY: 10,
    stagger: 0.4,

    ease: "Power3.easeOut"
  })
  .to(".preloader .text-container h1", {
    duration: 1.2,
    y: 200,
    skewY: -20,
    stagger: 0.2,

    ease: "Power3.easeOut"
  })
  .to(".preloader", {
    duration: 1,


    height: "0vh",
    ease: "Power3.easeOut"
  })
  .to(
    "body",
    {
      overflow: "auto"
    },
    "-=1"
  )
  .to(".preloader", {
    display: "none",
  });



function menuClick(){
  var menu_bar = document.getElementById('menu_bar');
  var nav_links = document.getElementsByClassName('nav-links');
  console.log(nav_links);
}

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');

  menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuIcon.classList.toggle('active');
      console.log(navLinks);
      console.log(menuIcon);
  });
});


