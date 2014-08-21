function ProdutoController($scope) {
    "use strict";

  var produtos = [];

  var produto1 = {
    id : 1, 
    codigo: "#00AMT01", 
    nome : "FURLAN MISTERY CARDIGAN", 
    imagem: "img/produto-1.jpg", 
    preco: 120.50, 
    quantidade: 1
  };

  var produto2 = {
    id : 2, 
    codigo: "#00AMT02", 
    nome : "ASOS MARITAL COLLAR CARDIGAN", 
    imagem : "img/produto-2.jpg", 
    preco : 74.38, 
    quantidade: 1
  };

  var produto3 = {
    id : 3, 
    codigo: "#00AMT03", 
    nome : "AOS MERINO SHAWL COLLAR CARDIGAN", 
    imagem : "img/produto-3.jpg", 
    preco : 109.12, 
    quantidade: 1
  };

  produtos.push(produto1);
  produtos.push(produto2);
  produtos.push(produto3);

    $scope.produtos = produtos;
    $scope.formatador = formatadorMoeda;
}
