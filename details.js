
var cardID= window.location.search;
var cardID=cardID.split('=')[1];
console.log(cardID);
//-------------------------------------------------------
var mainDiv= document.getElementById('main-div');
var cartCount=document.getElementById('cart-count');
cartCount.innerHTML=localStorage.getItem('cartCount');
//--------------------------------------------------------function-----

function generateCardDetails(obj){

        var generateCard=document.createElement('div');    
        generateCard.className="card-grid-view";
        var subDiv = document.createElement('div');
        subDiv.className="sub-div";
        var previewImage= document.createElement('img');
        previewImage.className="preview-image";
        previewImage.src= obj.preview;
        subDiv.appendChild(previewImage);
        generateCard.appendChild(subDiv);
//----

var textSection=document.createElement('div');
var cardName = document.createElement('h1');
cardName.innerHTML=obj.name;
textSection.appendChild(cardName);

var cardBrand = document.createElement('p');
cardBrand.className="sub-heading";
cardBrand.innerHTML=obj.brand;
textSection.appendChild(cardBrand);

var cardPrice=document.createElement('p');
cardPrice.className="sub-heading";
cardPrice.innerHTML=obj.price;
textSection.appendChild(cardPrice);

var cardDescription=document.createElement('p');
cardDescription.className="sub-heading";
cardDescription.innerHTML="Description";
textSection.appendChild(cardDescription);

var cardDescriptionText=document.createElement('p');
cardDescriptionText.innerHTML=obj.description;
textSection.appendChild(cardDescriptionText);

var productPreview= document.createElement('p');
productPreview.className="sub-heading";
productPreview.innerHTML="Product Preview"
textSection.appendChild(productPreview);

//  ------------------------------button section------
                var photosSection= document.createElement('div');
                photosSection.style.display='flex';
                var photos
                var photosDiv
                for(i=0; i<obj.photos.length;i++){
                photosDiv=document.createElement('div')
                photos=document.createElement('img');
                photos.className="Preview-image-btn";
                photos.src=obj.photos[i];
                photosDiv.appendChild(photos);
                photosSection.appendChild(photosDiv);

                photos.onclick=function(e){
                    previewImage.src= e.target.src;
                   console.log( e.target.src);

                }

                }
                
                console.log(photos.src);
                console.log(photosSection);
                


textSection.appendChild(photosSection)
generateCard.appendChild(textSection);

var checkoutLink=document.createElement('a');

var submitBtn=document.createElement('input');
submitBtn.id="sub-btn";
submitBtn.className="buy-btu";
submitBtn.type="submit";
submitBtn.value="Add to Cart"

checkoutLink.appendChild(submitBtn);
generateCard.appendChild(checkoutLink);
var mObj={
    Brand: cardBrand.innerHTML,
    price: cardPrice.innerHTML,
    src: previewImage.src

}
submitBtn.onclick=function(){

    var arry= JSON.parse(localStorage.getItem('mArry')) || [];
    if(arry===null){
        i=0;
        arry[i]= mObj;

    }else{
        i=arry.length;
        arry[i]= mObj;
    }
   
    console.log(arry)
     localStorage.setItem( 'mArry',JSON.stringify(arry) );
    //------------cart count-----------
    if(cartCount.innerHTML!==""){
    cartCount.innerHTML=parseInt(cartCount.innerHTML)+1;
    }else{
        cartCount.innerHTML=1; 
    }
    localStorage.setItem('cartCount',cartCount.innerHTML);
}



 return generateCard;
 
}


var xhttp= new XMLHttpRequest();
var apiEndpoint="http://5d76bf96515d1a0014085cf9.mockapi.io/product";
xhttp.open('GET',apiEndpoint, true );
xhttp.onreadystatechange= function(){
    if(this.readyState===4){
        var responseArray  =JSON.parse(this.responseText);
        
            console.log(responseArray[cardID-1]);
            var i= responseArray[cardID-1];
            mainDiv.appendChild(generateCardDetails(i));
    }
}
xhttp.send();


