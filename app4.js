var income = prompt('cuanto es el ingreso?');

var costs = prompt('cuanto es el costo?');

var taxPercent = prompt('cuanto es el porcentaje de impuestos?');

var grossProfit = income-costs;

var tax = grossProfit*taxPercent/100;

var netIncome = grossProfit-tax;

document.write('Tu ganancia neta es $' +netIncome);
