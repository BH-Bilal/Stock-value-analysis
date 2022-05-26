var initialPrice = document.querySelector("#initial-price");
var stockqty = document.querySelector("#Stock-Qty");
var currentprice = document.querySelector("#Current-Price");
var submitbtn = document.querySelector("#button");
var outputbox = document.querySelector("#Output");
submitbtn.addEventListener("click", submithandler);

function submithandler() {
    var ip = Number(initialPrice.value);
    var quantity = Number(stockqty.value);
    var curr = Number(currentprice.value);

    calculateprofitandloss(ip, quantity, curr);
}



function calculateprofitandloss(initial, qty, current) {

    if (initial > current) {
        var loss = (initial - current) * qty;
        var losspercentage = (loss / initial) * 100;
        showOutput(`hey the loss is ${loss} and the percent is ${losspercentage}%`);


    } else if (current > initial) {

        var profit = (current - initial) * qty;
        var profitpercentage = (profit / initial) * 100;
        showOutput(`hey the loss is ${profit.toFixed(2)} and the percent is ${profitpercentage.toFixed(2)}%`);

    } else {
        showOutput(" no pain no gain and no gain no pain");

    }
}

function showOutput(mesage, status) {
    // switch (status) {
    //     case "profit":
    //         outputbox.innerHTML=message;

    //         break;
    //         case"loss";
    //         outputbox.innerHTML

    //     default:
    //         break;
    // }
    outputbox.innerHTML = mesage;

}
// calculateprofitandloss(100, 10, 10);
// calculateprofitandloss(20, 10, 100);
// calculateprofitandloss(10, 10, 10);