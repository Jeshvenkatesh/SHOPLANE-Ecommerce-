

var mainDiv=document.getElementById('cards-div');
var entireData=document.getElementById("main-div-checkout");
var message=document.getElementById('message');
message.style.display="none";
message.style.marginBottom="300px";
message.style.marginLeft="100px";


//-----------------cart count---------

var cartCount=document.getElementById('cart-count');
cartCount.innerHTML=localStorage.getItem('cartCount');
var amountDisplayCard=document.getElementById('amount-display-card');

var clearCartBtn=document.getElementById('clear-cart');
clearCartBtn.onclick=function(){
    localStorage.clear();
    cartCount.innerHTML= 0;
    localStorage.setItem('cartCount',parseInt(cartCount.innerHTML));
    mainDiv.innerHTML="";
    entireData.style.display="none";
    // amountDisplayCard.style.display="none";
    message.style.display="block";

}



//-----------------------Getting cards----
function creatingCards(obj,i){
    var cardDiv=document.createElement('div');
    cardDiv.className="card-wrapper-checkout";
    var cardImgPreview=document.createElement('img');
    cardImgPreview.className="check-out-card-img";
    cardImgPreview.src=obj.src;
    cardDiv.appendChild(cardImgPreview);
    //-----
    var cardsubDiv=document.createElement('div');

    var brandName=document.createElement('h3');
 brandName.innerHTML= "Brand : " + obj.Brand;
 cardsubDiv.appendChild(brandName);

 var price=document.createElement('h4');
 price.innerHTML="Price : " + obj.price;
 cardsubDiv.appendChild(price);

//  totalPrice.innerHTML= obj.price++;

 var items=document.createElement('h4');
 items.innerText="Items : "+ 1;
 cardsubDiv.appendChild(items);
 cardDiv.appendChild(cardsubDiv);
//  console.log(cardDiv)

 var removeBtn=document.createElement('input');
 removeBtn.type="button";
 removeBtn.value="X";
 removeBtn.className="remove-Btn"
 removeBtn.style.color='#36688d';
 removeBtn.style.background='white';
 removeBtn.style.border='none';
 removeBtn.style.outline='none';
 removeBtn.style.fontSize="18px"
 removeBtn.style.marginLeft="540px";
 cardDiv.appendChild(removeBtn);

            removeBtn.onclick=function(){
                    var arry= JSON.parse(localStorage.getItem('mArry'));
                                    // console.log(arry);
                    var mnArry = arry.splice(i,1);
                    console.log(parseInt(mnArry[0].price));
                                //----------------------------------------------------------working here------
                    var priceMinus= parseInt(mnArry[0].price); 
                    // console.log('priceMinus => '+ priceMinus );

                    var amountTotal= sum - priceMinus;
                    //   console.log(amountTotal);

                    totalPrice.innerHTML= " Rs : "+ (sum - priceMinus);
                    // amountTotal= sum;
                    sum= amountTotal;

                    // console.log(totalPrice.innerHTML);

                    localStorage.setItem('mArry',JSON.stringify(arry));
                cartCount.innerHTML=parseInt(cartCount.innerHTML)-1;
                localStorage.setItem('cartCount',cartCount.innerHTML);
                //------
                items.innerText="Items : "+ 0;
                //-----
                        if(amountTotal==0){
                            entireData.style.display="none";
                        message.style.display="block";
                        }
            }

 return cardDiv;

}

var mArry=JSON.parse(localStorage.getItem('mArry'));
var totalPrice=document.getElementById('total-price');
// var sum= mArry[0].price
// sum1 = parseInt(mArry[0].price) ;
// sum2 = parseInt(mArry[1].price) ;
// sum3 = parseInt(mArry[2].price) ;
// var total=sum1+sum2+sum3;
// console.log(total);
// console.log(mArry);
// console.log(mArry.length);
var sum =0;

for(i=0; i<mArry.length; i++){
 mainDiv.appendChild(creatingCards(mArry[i],i));
 sum = sum + parseInt(mArry[i].price) ;
 
}
console.log(sum);
totalPrice.innerHTML= " Rs : "+ sum;


var placeOrderBtn=document.getElementById('place-order-btn');
placeOrderBtn.onclick=function()
{
    localStorage.clear();

}
