function calcularFahrenheit(){
    const celsiusImput = document.getElementById('celsius').value;
    const novoFahrenheit = (celsiusImput * 9/5) + 32;
    document.getElementById('fahrenheit').value = novoFahrenheit;
}

function calcularCelsius(){
    const fahrenheitImput = document.getElementById('fahrenheit').value;
    const novoCelsius = (fahrenheitImput - 32) * (5/9);
    document.getElementById('celsius').value = novoCelsius;
}