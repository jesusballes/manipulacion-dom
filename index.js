const h1 = document.querySelector("h1");
/* const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid"); */
const input = document.getElementById("calculo1");
const input2 = document.getElementById("calculo2");
const form = document.getElementById("form");
const result = document.getElementById("result");
const btn = document.getElementById("btnCalcular");

btn.addEventListener('click', onClick);

function onClick(event) {
    console.log("[event]", event);
    // event.preventDefault();
    let suma = 0;
    suma = Number(input.value) + Number(input2.value);
    result.innerText =  'Resultado es: ' + suma;
}


/* console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})
h1.innerHTML= 'Patito <br> hulero';
const img =document.createElement('img')
img.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png');
pid.appendChild(img);
setTimeout(() => {
    pid.removeChild(img);    
}, 2000);
 */