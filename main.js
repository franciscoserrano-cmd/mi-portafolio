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

function copiarTexto() {
    const texto = document.getElementById("textoCopiado").innerText;
    navigator.clipboard.writeText(texto).then(() => {
      alert("Texto copiado: " + texto);
    });
  }

    const toggleBtn = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });