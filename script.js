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
const body = document.querySelector("body");
const anchor = nav_drawer.querySelectorAll(".nav-list > a");

// console.log(anchor[3].attributes);

// Hide the nav at start
nav_drawer.style.display = "none";
nav_hider.style.display = "none";
var isOpen = false;

//If the shadow is clicked, hide the nav
nav_hider.addEventListener("click", () =>{
  nav_drawer.style.display = "none";
  nav_hider.style.display = "none";
  isOpen = false;
});




//DIsplay the drawer of click
main_menu.addEventListener("click", function(){
  nav_drawer.style.display = "flex";
  nav_hider.style.display = "block";
  isOpen = true;
  //stopScroll();
});


console.log(isOpen);
// When user click on any anchor tag, close the drawer
for (const a in anchor) {
  //console.log("equal");
  anchor[0].addEventListener("click", () =>{
    nav_drawer.style.display = "none";
    nav_hider.style.display = "none";
  });
  anchor[1].addEventListener("click", () =>{
    nav_drawer.style.display = "none";
    nav_hider.style.display = "none";
  });
  anchor[2].addEventListener("click", () =>{
    nav_drawer.style.display = "none";
    nav_hider.style.display = "none";
  });
  anchor[3].addEventListener("click", () =>{
    nav_drawer.style.display = "none";
    nav_hider.style.display = "none";
  });
  anchor[4].addEventListener("click", () =>{
    nav_drawer.style.display = "none";
    nav_hider.style.display = "none";
  });
 
}



const  stopScroll = function (){
  body.style.overflow = "hidden";
  body.style.height = "100%";
  body.style.margin = "0";
}


// html,
//     body {
//         margin: 0;
//         height: 100%;
//         overflow: hidden
//     }
