
var cardsList= document.getElementById('cards-list');
var accessories =document.getElementById('accessories');

var cartCount=document.getElementById('cart-count');
cartCount.innerHTML=localStorage.getItem('cartCount');
    
      
function creatingCards(obj){

    var cardWrapper = document.createElement('div');
    cardWrapper.className="card-wrapper";

    var cardLink=document.createElement('a');
    cardLink.href= "./details.html?cardId=" + obj.id;
    cardWrapper.appendChild(cardLink);


    var cardImages= document.createElement('img');
    cardImages.className="card-image";
    cardImages.src=obj.preview;
    cardLink.appendChild(cardImages);

    var heading= document.createElement('h3');
    heading.innerHTML= obj.name;
    cardLink.appendChild(heading);

    var para= document.createElement('p');
    para.innerHTML= obj.brand;
    cardLink.appendChild(para);

    var sellingPrice= document.createElement('p');
    sellingPrice.className="selling-price";
    sellingPrice.innerHTML= "Rs" +' ' + obj.price;
    cardLink.appendChild(sellingPrice);

    return cardWrapper;
    
}

var xhttp= new XMLHttpRequest();
var apiEndpoint="http://5d76bf96515d1a0014085cf9.mockapi.io/product";
xhttp.open('GET',apiEndpoint, true );
xhttp.onreadystatechange= function(){
    if(this.readyState===4){
        console.log(JSON.parse(this.responseText));
        var responseArray  =JSON.parse(this.responseText);
        
        for (var i=0; i<responseArray.length; i++){
            if(responseArray[i].isAccessory===false){
            cardsList.appendChild(creatingCards(responseArray[i]));
            // console.log(responseArray[i])
            }else{
                accessories.appendChild(creatingCards(responseArray[i]));
            }
        }

    }
}
xhttp.send();



