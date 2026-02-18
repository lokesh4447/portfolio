
console.log("Portfolio Loaded");

/* MENU TOGGLE */
const menu = document.getElementById("menu");
const navLinks = document.querySelector(".links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ROLE TEXT CHANGE */
const roleText = document.querySelector("#Home h3 span");
const roles = ["Web Developer","Python Developer","AI Enthusiast","Problem Solver"];
let roleIndex = 0;

setInterval(()=>{
    roleIndex=(roleIndex+1)%roles.length;
    roleText.textContent=roles[roleIndex];
},2500);

/* BUTTON ACTIONS */
const buttons=document.querySelectorAll(".btn-box .btn");
buttons[0].onclick=()=>alert("Thank you for showing interest in hiring Lokesh!");
buttons[1].onclick=()=>document.querySelector("#Contact").scrollIntoView({behavior:"smooth"});

/* FORM VALIDATION */
document.getElementById("contactForm").addEventListener("submit",function(e){
    e.preventDefault();
    const name=nameField.value.trim();
    const email=emailField.value.trim();
    const msg=messageField.value.trim();

    if(!name||!email||!msg) return alert("Please fill all fields");
    if(!email.includes("@")) return alert("Enter valid email");

    alert("Message Sent Successfully ✅");
    this.reset();
});

/* CLICK SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click",e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({behavior:"smooth"});
        navLinks.classList.remove("active");
    });
});

/* WHEEL SECTION SCROLL */
const sections=document.querySelectorAll("section");
let index=0;
let scrolling=false;

window.addEventListener("wheel",(e)=>{
    if(scrolling) return;

    scrolling=true;
    if(e.deltaY>0) index=Math.min(index+1,sections.length-1);
    else index=Math.max(index-1,0);

    sections[index].scrollIntoView({behavior:"smooth"});
    setTimeout(()=>scrolling=false,800);
});


