// selecting elements 
const bgImg = document.querySelector('.bg-img');
// add event listener
window.addEventListener('scroll',() =>{
    upadteImg();

})

// function
const upadteImg = () =>{
    bgImg.style.opacity = 1 - window.pageYOffset / 800;
    bgImg.style.backgroundSize = 160 - window.pageYOffset / 12 + "%"
    console.log(160 - window.pageYOffset / 12 + "%");
}


