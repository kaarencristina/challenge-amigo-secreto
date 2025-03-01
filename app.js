let listaDeAmigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nomeDoAmigo = amigoInput.value;

    if (nomeDoAmigo !== "") {
        listaDeAmigos.push(nomeDoAmigo);
        amigoInput.value = ""; // Limpa o input

        // Exibe a lista de amigos
        let listaElement = document.getElementById('listaAmigos');
        listaElement.innerHTML = ""; // Limpa a lista existente

        // Adiciona os amigos na lista HTML
        for (let i = 0; i < listaDeAmigos.length; i++) {
            listaElement.innerHTML += "<li>" + listaDeAmigos[i] + "</li>";
        }
    } else {
        alert("digite um nome válido.");
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Precisa de pelo menos 2 amigos para sortear.");
        return;
    }

    // Sorteia um nome aleatório da lista
    let sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

    // Exibe o nome sorteado
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = "O nome sorteado é: " + sorteado;
}
