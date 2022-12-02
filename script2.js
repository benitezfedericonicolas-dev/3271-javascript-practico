const npt_calculo1 = document.querySelector('#npt_calculo1');
const npt_calculo2 = document.querySelector('#npt_calculo2');
const btn_calcular = document.getElementById("btn_calcular");
const p_resultado = document.querySelector(".p_resultado");
const frm_main = document.getElementById("frm_main")

function sumar(parametro_event) {
    console.log({ parametro_event }); //codigo de control
    parametro_event.preventDefault();
    /*Necesario totalmente para que no actualice la pagina inmediatamente sucede el evento del formulario
    preventDefault se llama para que en el Submit Event no se ejecute lo que deberia ejecutarse por default.
    */
    let resultado = Number(npt_calculo1.value) + Number(npt_calculo2.value);
    p_resultado.innerHTML +=`${npt_calculo1.value} + ${npt_calculo2.value} = <b>${resultado}</b></br>`;
    console.log(`${p_resultado.innerText}`);
};

frm_main.addEventListener('submit', sumar);
/*
    Agrega el evento a la etiqueta. Dos parametros
    -- El evento, en este caso, click
    -- La funcion a ejecutar
        * Cabe destacar que como la funcion es llamada a ejecuta, no hace falta ponerla con parentesis. Los parentesis significan su inmediata ejecucion, pero eso ya esta implicito en el medoto.
    En este caso utilizamos submit, ya que nos referimos a un formulario.
*/