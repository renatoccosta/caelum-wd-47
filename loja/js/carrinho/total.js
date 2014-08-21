(function(fm) {
    "use strict";

    var inputs = document.querySelectorAll("#carrinho input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", function(event) {
            var input = this;
            var li = input.parentNode.parentNode.parentNode;
            var spans = li.querySelectorAll("span");
            var spanValorUnitario = spans[0];
            console.log(spanValorUnitario.textContent);
            var spanValorTotal = spans[1];
            var quantidade = input.value;
            var valorUnitario = fm.realParaNumber(spanValorUnitario.textContent);
            console.log(valorUnitario);
            var novoTotal = quantidade * valorUnitario;
            spanValorTotal.textContent = fm.numberParaReal(novoTotal);
        });
    }
})(formatadorMoeda);
