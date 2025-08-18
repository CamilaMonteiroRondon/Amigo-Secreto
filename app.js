let amigos = []; // lista vazia// 

function adicionarAmigo() {
    let nome = document.querySelector('input').value;


if(nome === "") {
    alert("Por favor, insira o seu nome.");
} else {
    amigos.push(nome);
    document.querySelector('input').value = "";
console.log(amigos);
document.getElementById("adicionarAmigo");
    atualizarLista();
    
}
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    let listagem = 0;
    while (listagem < amigos.length) {
      lista.innerHTML += amigos[listagem] + "<br>";
      listagem++;  
        
    }    
}

function sortearAmigoSecreto() {
    let amigoSecreto = parseInt(Math.random()* amigos.length);
    let sorteio = amigos[amigoSecreto];
    

     if (amigos.length === 0) {
        alert("Coloque pelo menos dois amigos antes de sortear")
      
    } 
        let texto = document.getElementById('sortearAmigo');
        texto.innerHTML = "Amigo sorteado: <strong>" + sorteio + "</strong>"
}
        



    
    
