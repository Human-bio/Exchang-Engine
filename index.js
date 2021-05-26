const express = require("express")
const app = express()


Match_Order = (sell_order,buy_order) => {

}

app.listen(8080)
app.post('/order/sell',(req,res) => {
    if(req)
})
app.post('/order/sell',(req,res)=>{
    
})
Buy_Orders = {"orders":[{price:1,quantity:1}]}
Sell_Orders = {"orders":[{price:2,quantity:2},{price:1,quantity:1},{price:1,quantity:1},{price:1,quantity:1},{price:1,quantity:1},{price:1,quantity:1},{price:1,quantity:1},{price:1,quantity:2}]}
Order_Table = [Buy_Orders,Sell_Orders]

function display_order() {
    console.log("Price Quantity || Price Quantity \n ==============================");
    for(i = 0; i < Sell_Orders.orders.length;i++){
        
        var buy = (Order_Table[1].orders[i])
        var sell = (Order_Table[0].orders[i])
        
        if (typeof(sell) != 'undefined') {
            process.stdout.write(sell.price + " " + sell.quantity + " " + "|| ")
        }
        if (typeof(buy) != 'undefined') {
            console.log(buy.price + " " + buy.quantity + " ")
        }
        else {process.stdout.write('\n')}
    }
}
