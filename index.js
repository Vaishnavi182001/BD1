const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));



//Endpoint1
app.get('/cart-total', (req,res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  let totalCartPrice = newItemPrice + cartTotal;
  res.send(totalCartPrice.toString())

})

//Endpoint2
app.get('/membership-discount', (req,res) => {
let cartTotal = parseFloat(req.query.cartTotal);
let isMember = req.query.isMember;
let totalCart;
 if(isMember === 'true')
 { 
     totalCart = cartTotal - (cartTotal*10)/100;
 }else{
   totalCart = cartTotal
}
res.send(totalCart.toString())
})

//EndPoint3
app.get('/calculate-tax', (req,res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  const tax = 0.05
  let totalCart = cartTotal*tax
  res.send(totalCart.toString())
})


//EndPoint4
app.get('/estimate-delivery', (req,res) =>{
  let shippingMethod = req.query.shippingMethod;
  let distance  = parseFloat(req.query.distance);
  let day;
  if(shippingMethod == 'express'){
    day = distance/100;
  }else{
    day= distance/50;
  }
  res.send(day.toString())

})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//Endpoint 5
app.get('/shipping-cost',(req,res) =>{
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let price= weight*distance*0.1;
  res.send(price.toString())
})

//Endpoint 6 
app.get('/loyalty-points',(req,res) =>{
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let loyalty = purchaseAmount*2;
  res.send(loyalty.toString()) 

})
