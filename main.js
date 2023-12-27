let DOM_header = document.getElementById('header');

// Maneja el efecto de transparencia del header
document.addEventListener('scroll', () => {
    
    let scrollValue = window.scrollY;

    // Si el scroll supera los 100px se agrega otra clase que maneja los estilos
    if (scrollValue > 70){
        DOM_header.classList.add('scrolled');
    }
    // Al bajar de los 100px la clase se quita
    else {
        DOM_header.classList.remove('scrolled');
    };
});


let titleBars = document.querySelectorAll(".whyCar-raTitlebar");

titleBars.forEach(titleBar => {
    titleBar.addEventListener("click", () => {
        let textCont = titleBar.parentElement;

        document.querySelectorAll(".whyCar-ra").forEach(element => {
            if (element === textCont) {
                element.classList.toggle("expanded");
            } else {
                element.classList.remove("expanded");
            }
        });
    });
});