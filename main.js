function revealOnScroll(){
    let elements = document.querySelectorAll('.reveal'); 

    elements.forEach(el => {
        let rect = el.getBoundingClientRect();
        let isVisible = rect.top < window.innerHeight - 50;

        if(isVisible) {
            el.classList.add('active');
        }
    })
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function copiarTexto() {
    let texto = document.getElementById("textoCopiado").innerText;
    navigator.clipboard.writeText(texto).then(() => {
      alert("Texto copiado: " + texto);
    });
  }

let toggleBtn = document.querySelector('.menu-toggle');
let sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
sidebar.classList.toggle('active');
});