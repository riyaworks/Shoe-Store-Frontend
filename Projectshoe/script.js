const menuOpenButton =  document.querySelector(".menu-button-open");
const menuCloseButton =  document.querySelector(".menu-button-close");

menuOpenButton.addEventListener("click", ()=>{
    document.body.classList.add("show-mobile-menu")
})

menuCloseButton.addEventListener("click", ()=>{
    document.body.classList.remove("show-mobile-menu")
})
const revealFromLeft = {
    distance: "50px",
    origin: "left",
    duration: 1000
};

ScrollReveal().reveal(".main",
    {
        ...revealFromLeft, interval: 100
    }   

);
ScrollReveal().reveal(".trending",
    {
        ...revealFromLeft, interval: 100
    }   

);

const revealFromRight = {
    distance: "0px",
    origin: "right",
    duration: 1000
};

ScrollReveal().reveal(".cat",
    {
        ...revealFromRight, interval: 100
    }   

);

ScrollReveal().reveal(".newarr",
    {
        ...revealFromRight, interval: 100
    }   

);


