(function(fm) {
    "use strict";

    function recomendacoes() {
        $.getJSON("http://mirrorfashion.caelum.com.br/produtos?callback=?", function(retorno) {
            $(document).trigger("novasRecomendacoes", retorno);
        });
    }

    recomendacoes();

    setInterval(recomendacoes, 5000);

    $(document).on("novasRecomentacoes", function(evento, retorno) {
        var painel = $("#recomendacoes");
        var ul = $("<ul>");

        $.each(retorno.produtos, function() {
            var li = $("<li>");
            var img = $("<img>").attr("src", this.imagem);
            var pNome = $("<p>").text(this.nome);
            var pPreco = $("<p>").text(fm.numberParaReal(this.preco));

            li.append(img).append(pNome).append(pPreco).appendTo(ul);
        });

        $("ul", painel).remove();
        ul.appendTo(painel);
    });

    $(document).one("novasRecomendacoes", function(event, retorno) {
        $("<a>").text("Novas Recomendações")
            .addClass("aviso-recomendacao")
            .attr("href", "#recomendacoes")
            .insertAfter(".aviso");
    });

})(formatadorMoeda);
