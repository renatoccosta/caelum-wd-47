(function($) {

    $("input[type=button]").click(function(event) {
        var inputSugestao = $("input[type=text]");
        var sugestao = inputSugestao.val();

        var sugestaoExistente = $(".sugestoes li").filter(function() {
            return $(this).find(".sugestao").text() == sugestao;
        });

        if (sugestaoExistente.length > 0) {
            var votos = sugestaoExistente.data("votos") + 1;
            sugestaoExistente.data("votos", votos);
            sugestaoExistente.find(".votos").text(votos + " votos");
        } else {
            var nomeSugestao = $("<span>").addClass("sugestao").text(sugestao);
            var votos = $("<span>").addClass("votos").text("1 voto");
            $("<li>").data("votos", 1)
                .append(nomeSugestao)
                .append(votos)
                .appendTo(".sugestoes");
        }

        inputSugestao.val("").focus();
    });

    $("input[type=text]").keyup(function(event) {
      if ( event.which == 13 ) {
            $("input[type=button]").click();
      }
    })

    $(".sugestoes").on("dblclick", "li", function(event) {
        $(this).remove();
    });

    $("input[type=text]").autocomplete({
        source: function(entrada, devolveResposta) {
            var sugestoesParecidas = [];
            var novaSugestao = new RegExp(entrada.term, "i");
            $(".sugestao").each(function() {
                var sugestaoExistente = $(this).text();
                if (sugestaoExistente.match(novaSugestao)) {
                    sugestaoParecidas.push(sugestaoExistente);
                }
            });
            devolveResposta(sugestoesParecidas);
        }
    });

})(jquery);
