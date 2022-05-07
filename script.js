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


const main_menu = document.querySelector("#top-menu-bars");


const showmenu = () => {
  change_nav_color = document.querySelector("nav");
  change_nav_color.style.backgroundColor = "pink";
  
}

main_menu.addEventListener("click", showmenu);
