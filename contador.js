let contador = 0; //Let se comporta como una variable que es mas estricta y solo funciona si se le asigna un valor.

const BotonOscuro=document.getElementById('Modo-Oscuro');

CargarModo();

function ActivarModo()
{
    const body=document.body;

    body.classList.toggle('modo-oscuro');

    if(body.classList.contains('modo-oscuro'))
    {
        localStorage.setItem('modo', 'oscuro');
        BotonOscuro.value = 'Modo Claro';
    }
    else
    {
        localStorage.setItem('modo', 'claro');
        BotonOscuro.value='Modo Oscuro';
    }
}

function CargarModo()
{
    const modo = localStorage.getItem('modo');
    if(modo === 'oscuro')
    {
        document.body.classList.add('modo-oscuro');
        BotonOscuro.value='Modo Claro';
    }

}

BotonOscuro.addEventListener('click', ActivarModo);



document.getElementById("boton").addEventListener("click", function()
{
    contador++;
    document.getElementById("contador").textContent = contador;

    //Mostrar la imagen de suma y ocultar la de resta
    document.getElementById("Sumando").style.display = "block";
    document.getElementById("Restando").style.display = "none";
    document.getElementById("reinicio").style.display = "none";

});

document.getElementById("restar").addEventListener("click", function()
{
    contador--;
    document.getElementById("contador").textContent = contador;

    //Mostrar la imagen de resta y ocultar la de suma
    document.getElementById("Restando").style.display = "block";
    document.getElementById("Sumando").style.display = "none";
    document.getElementById("reinicio").style.display = "none";
});

document.getElementById("Ocultar").addEventListener("click", function()
{   
    document.getElementById("Sumando").style.display = "none";
    document.getElementById("Restando").style.display = "none";
    document.getElementById("reinicio").style.display = "block";
    contador = 0;
    document.getElementById("contador").textContent = contador;

})

