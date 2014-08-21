(function($) {
    "use strict";
    $.fn.inputNumerico = function(seletor) {
        return this.on("input", seletor, function(event) {
            var numeros = /\D/g;
            if (numeros.test(this.value)) {
                this.value = this.value.replace(numeros, "");
                $(this).trigger("input");
            }
        });
    };

})(jQuery);
