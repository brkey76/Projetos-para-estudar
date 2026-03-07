let ValueCurrency = document.getElementById("amount").value;
let fromCurrency = document.getElementById("fromCurrency").value;
let toCurrency = document.getElementById("toCurrency").value;

async function Converter() {
    ValueCurrency = document.getElementById("amount").value;
    fromCurrency = document.getElementById("fromCurrency").value;
    toCurrency = document.getElementById("toCurrency").value;
    let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        let rate = data.rates[toCurrency];
        let convertedValue = (ValueCurrency * rate).toFixed(2);
        document.getElementById("imagem-moeda-convertida").src = `./Assets/${toCurrency}.png`;
        document.getElementById("image-moeda-coverter").src = `./Assets/${fromCurrency}.png`;
        document.getElementById("Valor-converter").innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: fromCurrency }).format(ValueCurrency);
        document.getElementById("valor-convertido").innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: toCurrency }).format(convertedValue);

        document.getElementById("Moeda-convertida").innerText = new Intl.DisplayNames(['pt-BR'], { type: 'currency' },{currencyDisplay: 'name'}).of(toCurrency);
        document.getElementById("Moeda-Converter").innerText = new Intl.DisplayNames(['pt-BR'], { type: 'currency' },{currencyDisplay: 'name'}).of(fromCurrency);
        document.getElementById
    } catch (error) {
        console.error("Erro ao converter moedas:", error);
    }
}