var input = $(".filtro input");

input.keyup(function(event) {
    var procurado = $(this).val().trim();
    var lis = $("#carrinho li");

    if (procurado.length) {
        lis.hide().find("h2, span")
            .filter(function() {
                var conteudo = $(this).text();
                var exp = new RegExp(procurado, "i");
                return exp.test(conteudo);
            }).closest("li").show();
    } else {
        lis.show();
    }
});

