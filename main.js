let DOM_header = document.getElementById('header');
let titleBars = document.querySelectorAll(".whyCar-raTitlebar");
let DOM_navbar = document.querySelector('.navbar');
let DOM_switch = document.querySelector('#switch');


const handleSwitch = () => {
    DOM_switch.addEventListener('click', () => {
        if (DOM_switch.checked) {
            DOM_navbar.classList.add('active');
        } else {
            DOM_navbar.classList.remove('active');
        }
        
    })
    
};

const headerScroll = () => {
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
};

const handleTitBar = () => {

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
};

const init = () => {
    headerScroll();
    handleTitBar();
    handleSwitch();
};

init();