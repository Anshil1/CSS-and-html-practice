let bagItem;
onScreenDisplayShow()
function onScreenDisplayShow(){
  let bagItemsStr = localStorage.getItem('bagItem');
  bagItem=bagItemsStr ? JSON.parse(bagItemsStr):[];
  displayItemOnScreen();
  displayBagitems();
  
}

function addBotton(itemid){
  bagItem.push(itemid);
  localStorage.setItem('bagItem',JSON.stringify(bagItem));
  displayBagitems();
}
function displayBagitems(){
  let displayItemElement=document.querySelector('.bag-item-count');
  if(bagItem.length>0){
    displayItemElement.style.visibility='visible';
    displayItemElement.innerText=bagItem.length;
  }
  else{
    displayItemElement.style.visibility='hidden';
  }
  
}

function displayItemOnScreen(){
  let itemContainerElement=document.querySelector('.items-container');

let  innerHTML=``;
items.forEach(items=> {
  innerHTML+=`
  <div class="item-container">
    <img class="item-img"src="${items.image}" alt="item-img">
          
    <div class="rating">
      ${items.rating.stars}⭐|${items.rating.count}
    </div>
    <div class="company-name">
      ${items.company}
    </div>
    <div class="item-name">
      ${items.item_name}
    </div>
    <div class="price">
     <span class="current-price">Rs ${items.current_price}</span>
     <span class="original-price">Rs ${items.original_price}</span>
     <span class="discount">(${items.discount_percentage}% OFF)</span>
  
   </div>
    <button class="btn-add-bag " onclick="addBotton(${items.id})">
     Add To Bag
    </button>
  </div>`
});
itemContainerElement.innerHTML=innerHTML;




}
