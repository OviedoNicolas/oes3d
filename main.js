let DOM_header = document.getElementById('header');
let titleBars = document.querySelectorAll(".whyCar-raTitlebar");
let DOM_navbar = document.querySelector('.navbar');
let DOM_switch = document.querySelector('#switch');
let navLinks = document.querySelectorAll('a[href^="#"]');


const openMenu = () => {
    DOM_navbar.classList.add('active');
    document.body.style.overflowY = 'hidden';
};

const closeMenu = () => {
    DOM_navbar.classList.remove('active');
    document.body.style.overflowY = '';
};

const handleSwitch = () => {
    DOM_switch.addEventListener('click', () => {
        if (DOM_switch.checked) {
            openMenu();
        } else {
            closeMenu();
        };
    });
};

const headerScroll = () => {
    document.addEventListener('scroll', () => {
        
        let scrollValue = window.scrollY;

        if (scrollValue > 70){
            DOM_header.classList.add('scrolled');
        }
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

const sectionChange = (seccionId) => {
    let seccion = document.getElementById(seccionId);
    if (seccion) {
        seccion.scrollIntoView({ behavior: "smooth" });
        history.replaceState({ seccionId: seccionId }, "", "#" + seccionId);
    };
};

const handleClickSection = (event) => {
    event.preventDefault();
    let seccionId = event.target.getAttribute("href").substring(1);
    if (DOM_navbar.classList.contains('active')){
        DOM_switch.checked = !DOM_switch.checked;
        closeMenu();
    };
    sectionChange(seccionId);
};

const linksPrep = () =>{
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", handleClickSection);
    };
};

window.addEventListener("popstate", function (event) {
    if (event.state && event.state.seccionId) {
        let actualSection = document.getElementById(event.state.seccionId);
        if (actualSection) {
            if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            sectionChange(event.state.seccionId);
        }
    }
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
});

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
};

window.addEventListener("beforeunload", function (event) {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const init = () => {
    headerScroll();
    handleTitBar();
    handleSwitch();
    linksPrep();
};

init();