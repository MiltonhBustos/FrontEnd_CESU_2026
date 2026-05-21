function calcular() {

      let bandeira = document.getElementById("bandeira").value;
      let valor = Number(document.getElementById("valor").value);
      let parcelas = Number(document.getElementById("parcelas").value);

      let taxa = 0;

      switch(bandeira) {
        case "visa":
          taxa = 0.02;
          break;

        case "master":
          taxa = 0.0185;
          break;

        case "elo":
          taxa = 0.03;
          break;
      }

      let valorTaxa = valor * taxa;
      let juros = valor * (0.0035 * parcelas);
      let taxaMensal = 12.50 * parcelas;
      let total = valor + valorTaxa + juros + taxaMensal;
      let valorParcela = total / parcelas;

      document.getElementById("resultado").innerHTML =
        "Valor da Taxa: R$ " + valorTaxa.toFixed(2) + "<br>" +
        "Valor dos Juros: R$ " + juros.toFixed(2) + "<br>" +
        "Taxa Mensal: R$ " + taxaMensal.toFixed(2) + "<br>" +
        "Valor de cada Parcela: R$ " + valorParcela.toFixed(2);
    }