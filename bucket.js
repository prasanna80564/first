let b = (basket,prices)=>{
    let totalCost = 0;
    for(let i in basket){
        if(prices[i] != undefined){
            totalCost += basket[i] * prices[i];
        }
    }
    return totalCost;
}
basket = {apple:1,orange:1,grapes:5};
price = {apple:20,orange:12,grapes:22,tea:5,milk:10};
alert(b(basket,price));