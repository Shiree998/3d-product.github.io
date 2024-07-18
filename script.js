const card=document.querySelector(".card");
const container=document.querySelector(".container");

container.addEventListener("mousemove", (e) => {
    let x=(window.innerWidth / 2 - e.pageX) / 25;
    let y=(window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform=`rotateX(${y}deg) rotateY(${x}deg)`;
});                                                                                                                                             3

container.addEventListener('mousecenter',()=>{
    card.style.transition=`none`;
})

container.addEventListener('mouseleave',()=>{
    card.style.transition=`all 0.5s ease`;
    card.style.transform=`rotateX(0deg) (rotateY(0deg)`;
});
