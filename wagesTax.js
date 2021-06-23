const home = document.getElementById('home-section');
const result = document.getElementById('result-section');
const form = document.getElementById('wageTaxForm');
const sal = document.getElementById('salAmount');
form.addEventListener('submit', calculateSalaryTax);
function calculateSalaryTax(e) {
    e.preventDefault();
    let salType = '';
    let salary = sal.value;
    let tax = 0;
    home.style.display = "none";
    if (document.getElementById('paymentType1').checked) {
        salType = 'ماهوار';
        tax = taxCalc(salary, 5000, 12500, 100000, 150, 8900);
    }
    if (document.getElementById('paymentType2').checked) {
        salType = 'ماه دوبار';
        tax = taxCalc(salary, 2500, 6250, 50000, 75, 4450);
    }
    if (document.getElementById('paymentType3').checked) {
        salType = 'دو هفته ای';
        tax = taxCalc(salary, 2308, 5769, 46154, 69, 4108);
    }
    if (document.getElementById('paymentType4').checked) {
        salType = 'هفته وار';
        tax = taxCalc(salary, 1154, 2885, 23077, 35, 2054);
    }
    if (document.getElementById('paymentType5').checked) {
        salType = 'روزمره';
        tax = taxCalc(salary, 164, 411, 3288, 5, 293);
    }
    result.hidden = false;
    document.getElementById('salAmt').innerText = salary;
    document.getElementById('salType').innerText = salType;
    document.getElementById('taxAmt').innerText = parseInt(tax);
    document.getElementById('salPayable').innerText = salary - tax;
}

function taxCalc(sal, amt2, amt10, amt20, tax2, tax10) {
    let tax = 0;
    if (sal > amt2 && sal <= amt10) {
        tax = (sal - amt2) * (2 / 100);
    } else if (sal > amt10 && sal <= amt20) {
        tax = tax2 + (sal - amt10) * (10 / 100);
    } else if (sal > amt20) {
        tax = tax10 + (sal - amt20) * (20 / 100);
    }
    return tax;
}

function showHome() {
    result.hidden = true;
    home.style.display = 'block';
}