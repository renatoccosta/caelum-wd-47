var cep = $("#input_cep");

$("#consulta_cep").submit(function(e) {
    var url = "http://cep.correiocontrol.com.br/" + cep.val() + ".json";
    $.getJSON(url, function(resultado) {
        $("#resultado_cep").text(resultado.logradouro + ", " +
            resultado.bairro + ", " +
            resultado.localidade + " - " +
            resultado.uf);
    });

    e.preventDefault();
});


