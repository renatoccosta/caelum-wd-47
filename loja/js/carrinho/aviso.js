(function() {
    var textoEsconde = "Esconder";
    var textoMostra = "Aviso";

    //var botao = document.querySelector("#botaoaviso");
    var botao = document.createElement("button");
    botao.id = "botaoaviso";
    botao.textContent = textoEsconde;

    var aviso = document.querySelector(".aviso");

    botao.addEventListener("click", function(event) {
        aviso.classList.toggle("invisivel");
        if (aviso.classList.contains("invisivel")) {
            this.textContent = textoMostra;
        } else {
            this.textContent = textoEsconde;
        }
    });

    aviso.parentNode.insertBefore(botao, aviso);
})();
