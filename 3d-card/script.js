//Momement animatuion part
const card=document.querySelector('.card')
const container=document.querySelector('.container')
// Items
const title=document.querySelector('.title')
const sneaker=document.querySelector('.sneaker img')
const purchase=document.querySelector('.purchase button')
const description=document.querySelector('.info h3')
const sizes=document.querySelector('.sizes')

//Moving animation 
container.addEventListener('mousemove',(e)=>{
    let xAxis=((window.innerWidth/2-e.pageX)/10)
    let yAxis=((window.innerHeight/2-e.pageY)/10)
    // console.log(yAxis,xAxis)
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})
// animate in
container.addEventListener('mouseenter',e=>{
    card.style.transition='none';
    title.style.transform="translateZ(150px)"
    sneaker.style.transform="translateZ(200px)"
    description.style.transform="translateZ(125px)"
    sizes.style.transform="translateZ(100px)"
    purchase.style.transform="translateZ(75px)"

})
//Animate back
container.addEventListener("mouseleave" ,(e)=>{
    card.style.transition='all 0.5s ease';
    card.style.transform="rotate(0deg) rotateX(0deg)"

    title.style.transform="translateZ(0px)"
    sneaker.style.transform="translateZ(0px)"
    description.style.transform="translateZ(0px)"
    sizes.style.transform="translateZ(0px)"
    purchase.style.transform="translateZ(0px)"
})