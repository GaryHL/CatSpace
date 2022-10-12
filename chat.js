const input = document.getElementById("input_chat");
const addBtn = document.getElementById("btn_send");
const ul = document.getElementById("list_messages");
// const empty



btn_send.addEventListener('click', (e)=>{

    
    e.preventDefault();
    
    const text = input.value;
    const mensaje = document.createElement('li');
    mensaje.classList.add('li2')
    const p = document.createElement('p');
    p.textContent = text;
    
    mensaje.appendChild(p);
    ul.appendChild(mensaje);

    console.log(mensaje.textContent)
    if(mensaje.textContent === "react o vue"){
        const mensaje2 = document.createElement('li');
        mensaje2.classList.add('li1')
        const p2 = document.createElement('p');
        p2.textContent=("react toda la vida");
        mensaje2.appendChild(p2);
        ul.appendChild(mensaje2)
    }
    else if(mensaje.textContent === "cual es tu nombre"){
        const mensaje2 = document.createElement('li');
        mensaje2.classList.add('li1')
        const p2 = document.createElement('p');
        p2.textContent=("soy andres");
        mensaje2.appendChild(p2);
        ul.appendChild(mensaje2)
    }
    else{
        const mensaje2 = document.createElement('li');
        mensaje2.classList.add('li1')
        const p2 = document.createElement('p');
        p2.textContent=("lo veremos en el fullstack");
        mensaje2.appendChild(p2);
        ul.appendChild(mensaje2)
    }
    input.value = '';
})