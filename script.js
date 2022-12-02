const npt_calculo1 = document.querySelector('#npt_calculo1');
const npt_calculo2 = document.querySelector('#npt_calculo2');
const btn_calcular = document.getElementById("btn_calcular");
const p_resultado = document.querySelector(".p_resultado");

function sumar() {
    let resultado = Number(npt_calculo1.value) + Number(npt_calculo2.value);
    p_resultado.innerHTML +=`${npt_calculo1.value} + ${npt_calculo2.value} = <b>${resultado}</b></br>`;
    console.log(`${p_resultado.innerText}`);
};

btn_calcular.addEventListener('click', sumar);
/*
    Agrega el evento a la etiqueta. Dos parametros
    -- El evento, en este caso, click
    -- La funcion a ejecutar
        * Cabe destacar que como la funcion es llamada a ejecutra, no hace falta ponerla con parentesis. Los parentesis significan su inmediata ejecucion, pero eso ya esta implicito en el medoto.
*/