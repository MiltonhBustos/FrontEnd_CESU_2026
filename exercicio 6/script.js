function calcular(){

    let pacote = Number(document.getElementById("pacote").value);

    let pessoas = Number(document.getElementById("pessoas").value);

    let bruto = pacote * pessoas;

    let taxa = bruto * 0.10;

    let total = bruto + taxa;

    let desconto = 0;

    if(pessoas > 100){

        desconto = total * 0.05;

        total = total - desconto;
    }

    document.getElementById("resultado").innerHTML =

    "Custo Bruto: R$ " + bruto.toFixed(2) + "<br><br>" +

    "Taxa de Serviço: R$ " + taxa.toFixed(2) + "<br><br>" +

    "Desconto: R$ " + desconto.toFixed(2) + "<br><br>" +

    "Total Final: R$ " + total.toFixed(2);
}