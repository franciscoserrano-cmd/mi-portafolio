function revealOnScroll(){
    const elements = document.querySelectorAll('.reveal'); 

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 50;

        if(isVisible) {
            el.classList.add('active');
        }
    })
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);