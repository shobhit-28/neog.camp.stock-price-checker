let initPrice = document.querySelector('.initPrice');
let quantity = document.querySelector('.numberOfStocks');
let currPrice = document.querySelector('.currPrice');
let btn = document.querySelector('.button');
let declaration = document.querySelector('.declaration');

function calculateProfitAndLoss() {
    let number = quantity.value
    let costPrice = (initPrice.value) * number;
    let sellingPrice = (currPrice.value) * number;
    if (number == '' || costPrice == '' || sellingPrice == '') {
        declaration.innerText = 'Fill the required fields'
        declaration.style.color = 'white';
    } 
    else {
        if (costPrice < sellingPrice) {
            let profit = sellingPrice - costPrice;
            let profitPercentage = (profit / costPrice) * 100;
            declaration.innerText = 'Yay!! Your Profit is ' + profit + ' and profit Percentage is ' + profitPercentage + '%';
            declaration.style.color = 'Green';
        } else if (costPrice === sellingPrice) {
            declaration.innerText = 'No pain No gain, and no gain no pain :)';
            declaration.style.color = 'white';
        } else if (sellingPrice < costPrice) {
            let loss = costPrice - sellingPrice;
            let lossPercentage = (loss / costPrice) * 100;
            declaration.innerText = 'Whoops!! Your loss is ' + loss + ' and loss Percentage is ' + lossPercentage + '% :(';
            declaration.style.color = 'red';
        }
    }
}

btn.addEventListener('click', function () {
    calculateProfitAndLoss();
})

let bodyHeight = document.querySelector('body').offsetHeight;
let centerHeight = document.querySelector('.center').offsetHeight;
let height1 =  (bodyHeight - centerHeight)/2;

let declaredHeight = declaration.offsetHeight;
let height2 =  (bodyHeight - declaredHeight)/2;

document.querySelector('.center').style.marginTop = height1 + 'px';
document.querySelector('.center').style.marginBottom = height1 + 'px';
declaration.style.marginTop = height2 + 'px';