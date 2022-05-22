window.onload = function() {
    Particles.init({
      selector: ".particles",
      color: ['#b1dcf5','#f5b1c2'],
      connectParticles: true,
      maxParticles: 50,
      sizeVariations: 30,
      speed: 0.7,
    });
};


// const main_menu = document.querySelector("#top-menu-bars");


// const showmenu = () => {
//   change_nav_color = document.querySelector("nav");
//   console.log(change_nav_color.style.backgroundColor = "pink");
// }

// main_menu.addEventListener("click", showmenu);

const main_menu = document.querySelector("#top-menu-bars");
const nav_drawer = document.querySelector(".nav-drawer");
const nav_hider = document.querySelector(".shade");

// Hide the nav at start
nav_drawer.style.display = "none";
nav_hider.style.display = "none";

//If the shadow is clicked, hide the nav
nav_hider.addEventListener("click", () =>{
  nav_drawer.style.display = "none";
  nav_hider.style.display = "none";
});

main_menu.addEventListener("click", function(){
  nav_drawer.style.display = "block";
  nav_hider.style.display = "block";
});

