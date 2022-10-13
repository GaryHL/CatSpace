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
    if(mensaje.textContent === "¿Por qué no nos enseñaste a manejar git en 300h?"){
        const mensaje2 = document.createElement('li');
        mensaje2.classList.add('li1')
        const p2 = document.createElement('p');
        p2.textContent=("Te dije que lo veríamos en el fullstack");
        mensaje2.appendChild(p2);
        ul.appendChild(mensaje2)
    }
    else if(mensaje.textContent === "¿Cuál es tu nombre?"){
        const mensaje2 = document.createElement('li');
        mensaje2.classList.add('li1')
        const p2 = document.createElement('p');
        p2.textContent=("Soy Andrés");
        mensaje2.appendChild(p2);
        ul.appendChild(mensaje2)
    }
    else if(mensaje.textContent === "¿Brif durante la presentación de un proyecto?"){
        const mensaje2 = document.createElement('li');
        mensaje2.classList.add('li1')
        const p2 = document.createElement('p');
        p2.textContent=("Muy buena idea... chicos porfavor revisen su correo electronico *Aparece mágicamente con una aureola* ");
        mensaje2.appendChild(p2);
        ul.appendChild(mensaje2)
    }
    else if(mensaje.textContent === "¿Tienes un gato favorito?"){
        const mensaje2 = document.createElement('li');
        mensaje2.classList.add('li1')
        const p2 = document.createElement('img');
        p2.src=("https://imgs.search.brave.com/SNqbJtDL9oJjeZ3gZsVB1vWVrII0SixwhcD4rZ4lxK8/rs:fit:453:500:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJlL2Nm/LzEzLzJlY2YxM2M2/ZTY1YjRjMWFjYWEx/YjliNTdkYzZkYTE4/LnBuZw");
        p2.classList.add('imagen_mensaje')
        mensaje2.appendChild(p2);
        ul.appendChild(mensaje2)
    }
    else if(mensaje.textContent === "Muéstrame una obra de arte"){
        const mensaje2 = document.createElement('li');
        mensaje2.classList.add('li1_arte')
        const p2 = document.createElement('img');
        p2.src=("./images/arte.jpg");
        p2.classList.add('imagen_mensaje_arte')
        mensaje2.appendChild(p2);
        ul.appendChild(mensaje2)
    }

    else if(mensaje.textContent === "¿Es en serio?"){
        const mensaje2 = document.createElement('li');
        mensaje2.classList.add('li1')
        const p2 = document.createElement('p');
        p2.textContent=("SI, es el PIZZA-CAT");
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