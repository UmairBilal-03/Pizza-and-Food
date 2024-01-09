window.addEventListener('scroll',function(){
    const header=document.querySelector('header');
    header.classList.toggle("stricky",window.scrollY>0);
});