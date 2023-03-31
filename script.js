
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>10)
})






let container=document.querySelectorAll('.second-container');
let heading=document.querySelectorAll('.heading h5');
heading.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
  hideAllContainer()
  hideAllHeading()  
  item.classList.add('active')    
  container[idx].classList.add('show')
    })
})
function hideAllContainer(){
    container.forEach(container=>container.classList.remove('show'))

}
function hideAllHeading(){
    heading.forEach(heading=>heading.classList.remove('active'))
}




let faqs=document.querySelectorAll('.faqs')
faqs.forEach(fqas=>{

fqas.addEventListener('click',()=>{
    fqas.classList.toggle('open');
    const icon=fqas.querySelector('.faqs i')

    if(icon.className==='uil uil-angle-up'){
        icon.className='uil uil-angle-down';
    }else{
        icon.className='uil uil-angle-up'
        }
})
})


let navbar =document.querySelectorAll('.list')
let openIcon = document.querySelector('#opan-btn')
let clossIcon = document.querySelector('#closs-btn')
 
openIcon.addEventListener('click',()=>{
    openIcon.style.display='none'
    navbar.forEach(nav=>nav.classList.add('open-menu'))
})
clossIcon.addEventListener('click',()=>{
    navbar.forEach(nav=>nav.classList.remove('open-menu'))
    openIcon.style.display='flex'
})


