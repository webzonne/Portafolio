window.addEventListener('load', ()=>{
    
    const body = document.getElementById("body");
    body.style.opacity = 0;
    body.style.visibility = "hidden";
    
/* INTERCEPTION */
const miPortafolioDesk = document.getElementById('portafolio-desk');    
const sobreMiDesk = document.getElementById('sobre-mi-desk');    
const miContacto = document.getElementById('mi-contacto');    
const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');
const imagen5 = document.getElementById('imagen5');
const imagen6 = document.getElementById('imagen6');
const imagen7 = document.getElementById('imagen7');
const imagen8 = document.getElementById('imagen8');
const imagen10 = document.getElementById('imagen10');
const imagen11 = document.getElementById('imagen11');
const imagen12 = document.getElementById('imagen12');
const imagen13 = document.getElementById('imagen13');
const imagen14 = document.getElementById('imagen14');



const cargarImagen = (entrada, observador) => {
    
 
    entrada.forEach((entrada) =>{
       
        if(entrada.isIntersecting){
           entrada.target.classList.add('visible');
           entrada.target.classList.add('showTextActive');
           
        }
        
    });
       
  
}

const observador = new IntersectionObserver(cargarImagen, {
    
   root: null,
    rootMargin: '0px 0px 0px 0px',
   threshold:0
    
});


observador.observe(miPortafolioDesk);
observador.observe(sobreMiDesk);
observador.observe(miContacto);
observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(imagen5);
observador.observe(imagen6);
observador.observe(imagen7);
observador.observe(imagen8);
observador.observe(imagen10);
observador.observe(imagen11);
observador.observe(imagen12);
observador.observe(imagen13);    
observador.observe(imagen14);    
    
    
    
    
    
})