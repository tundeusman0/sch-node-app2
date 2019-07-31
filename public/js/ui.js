window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const myDropdown = document.querySelectorAll("#dropdown")
const nav = document.getElementById("nav")
const shows = document.querySelectorAll('.show');
const nav3 = document.querySelectorAll('.nav3');
const nav2 = document.getElementById("nav2")
const nav3Div = document.getElementById("nav3")


myDropdown.forEach((dropdown, ind) => {
    dropdown.addEventListener('click', () => {
        if (shows[ind].style.display === "none") {
            shows.forEach(show => show.style.display = "none");
            nav3.forEach(nav => nav.style.background = "", nav.style.color = "");
            shows[ind].style.display = "block";
            nav3[ind].style.background = "#eefffcf8";
            nav3[ind].style.color = "#0d886d";
        } else if (shows[ind].style.display === "block") {
            shows.forEach(show => show.style.display = "none");
            nav3.forEach(nav => nav.style.background = "", nav.style.color = "");
            shows[ind].style.display = "none";
            nav3[ind].style.background = "";
            nav3[ind].style.color = "";

        }
    });
});


document.addEventListener("click", function (e) {
    let clickInside = false;
    for (var node = event.target; node != document.body; node = node.parentNode) {
        if (node.id === "dropdown"){
            clickInside = true
            break;
        }
    }
    if (!clickInside) {
        shows.forEach(show => {
            show.style.display = "none"
        });
        nav3.forEach(nav => nav.style.background = "", nav.style.color = "");
    }
}); 
/* cited https://stackoverflow.com/questions/14188654/detect-click-outside-element-vanilla-javascript */
const toggle = document.getElementById("toggle");
toggle.addEventListener("click",()=>{
    if (nav2.style.display === ""){
        nav2.style.display = "block"
        nav3Div.style.display = "flex"
        
    } else if (nav2.style.display === "none"){
        nav2.style.display = "block"
        nav3Div.style.display = "flex"
        
    } else{
        nav2.style.display = "none"
        nav3Div.style.display = "none"
        nav.style.height = ""
    }
    
})

