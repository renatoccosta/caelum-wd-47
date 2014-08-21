(function() {
    var inputs = document.querySelectorAll("#carrinho input");

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", function(event) {
            var numeros = /\D/g;
            if (numeros.test(this.value)) {
                this.value = this.value.replace(numeros, "");
            }
        });
    }
})();
