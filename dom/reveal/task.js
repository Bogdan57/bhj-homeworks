const reveals = document.querySelectorAll('.reveal');
reveals.forEach(element =>{
    document.addEventListener('scroll',()=>{
        const viewPortHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if ( elementTop < viewPortHeight) {
            element.classList.add('reveal_active')
        }
    })
})