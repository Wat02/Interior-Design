const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


const nav = document.getElementById("nav");

for(const link of nav.getElementsByTagName("a")) {  
  link.onmousemove = e => {
    const rect = link.getBoundingClientRect(),    
          img = link.querySelector("img");
    
    img.style.left = `${e.clientX - rect.left}px`;
    img.style.top = `${e.clientY - rect.top}px`;
  }
}

window.onmousemove = e => {
  const percent = e.clientY / window.innerHeight;
  
  nav.animate({
    transform: `translateY(${percent * nav.offsetHeight * -1}px)`
  }, {
    fill: "forwards",
    duration: 4000
  })
}

var rellax = new Rellax('.rellax');
AOS.init();

