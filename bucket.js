let f1 = (basket,prices)=>{
    let totalCost = 0;
    for(let item in basket){
        if(prices[item] != undefined){
            totalCost += basket[item] * prices[item];
        }
    }
    return totalCost;
}
basket = {apple:1,orange:1,grapes:5};
price = {apple:20,orange:12,grapes:22,tea:5,milk:10};
alert(f1(basket,price));