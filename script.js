
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: "smooth"
});

});

});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if(pageYOffset >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") == "#" + current){
link.classList.add("active");
}

});

});

//dark and light mode

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark");
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme", "light");
    }
});