console.log("script-loaded!!");

var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [console.log("script-loaded!!");

var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }


  var articleOne = document.getElementById("preview-product");
  var articleTwo = document.getElementById("description-product");
  var contentsDiv = document.getElementById("contents-div");
   // <!-- <div class="preview-div"> 
  // <img class="product-image" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="item-pic">
  // </div> -->

  var divOne = document.createElement("div");
  divOne.className = "preview-div";
  var imagePreview = document.createElement("img");
  imagePreview.className = "product-image";
  imagePreview.src = productData.preview;
  imagePreview.alt = productData.description;
  divOne.appendChild(imagePreview);
  
  articleOne.appendChild(divOne);


  // <!-- <div id="product-info">
  // <h1>Men Navy Blue Solid Sweatshirt</h1>
  // <h4>United Colors of Benetton</h4> 
  // <h3>Price: Rs <span class="price-bold">2599</span> </h3>
var divTwo = document.createElement("div");
divTwo.id = "product-info";
var headingOne = document.createElement("h1");
var headingTwo = document.createElement("h4");
var headingThree = document.createElement("h3");
headingOne.innerHTML = productData.name;
headingTwo.innerHTML = productData.brand;
var spanOne = document.createElement("span");
spanOne.className = "price-bold";
spanOne.innerHTML = productData.price;
headingThree.innerHTML = "Price: Rs ";
headingThree.appendChild(spanOne);
divTwo.appendChild(headingOne);
divTwo.appendChild(headingTwo);
divTwo.appendChild(headingThree);

contentsDiv.appendChild(divTwo);
// articleTwo.appendChild(contentsDiv);

  // </div>
  // <div id="product-descp">
  // <h3>Description</h3>
  // <p>Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem</p>
  // </div>
var divThree = document.createElement("div");
var headingFour = document.createElement("h3");
var paraOne = document.createElement("p");
headingFour.innerHTML = "Description";
paraOne.innerHTML = productData.description;
divThree.className = "product-descp";
divThree.appendChild(headingFour);
divThree.appendChild(paraOne);
contentsDiv.appendChild(divThree);

  // <div id="product-pics">
  //     <h3>Product Preview</h3>
  //     <div id="photos">
  //     <img class="product-image img-active" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="item-pic">
  //     <img class="product-image" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="item-pic">
  //     <img class="product-image" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="item-pic">
  //     <img class="product-image" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="item-pic">
  //     <img class="product-image" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="item-pic">
  //     <img class="product-image" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="item-pic">
  //     </div>

  // </div> -->

  var divFour = document.createElement("div");
  var headingFive = document.createElement("h3");
  var divFive = document.createElement("div");
  headingFive.innerHTML = "Product Preview";
  divFour.id = "product-pics";
  divFive.id = "photos";
  productData.photos.forEach(function(element){
    var productImage = document.createElement("img");
    productImage.className = "product-image";
    productImage.src = element;
    divFive.appendChild(productImage);
  });
  
  var productImage = document.createElement("img");
  divFive.appendChild(productImage);
  divFour.appendChild(headingFive);
  divFour.appendChild(divFive);
  contentsDiv.appendChild(divFour);

  var productPhotos = document.querySelectorAll("#photos img");
  // console.log(productPhotos);
  productPhotos[0].className = "img-active";
  function removeClass(){
  productPhotos.forEach(function(element){
    // console.log(element.classList);
    element.classList.remove("img-active");
  });
}

  productPhotos[0].addEventListener("click", function(){
    removeClass();
    productPhotos[0].className = "img-active";
    imagePreview.src = productPhotos[0].currentSrc;
    // imagePreview.alt = productData.description;
    divOne.appendChild(imagePreview);
    
    articleOne.appendChild(divOne);    

}, false);


  productPhotos[1].addEventListener("click", function(){
    removeClass();
    productPhotos[1].className = "img-active";
    imagePreview.src = productPhotos[1].currentSrc;
    // imagePreview.alt = productData.description;
    divOne.appendChild(imagePreview);
    
    articleOne.appendChild(divOne); 
    
  }, false);


  productPhotos[2].addEventListener("click", function(){
    removeClass();
    productPhotos[2].className = "img-active";
    imagePreview.src = productPhotos[2].currentSrc;
    // imagePreview.alt = productData.description;
    divOne.appendChild(imagePreview);
    
    articleOne.appendChild(divOne);  
  }, false);


  productPhotos[3].addEventListener("click", function(){
    removeClass();
    productPhotos[3].className = "img-active";
    imagePreview.src = productPhotos[3].currentSrc;
    // imagePreview.alt = productData.description;
    divOne.appendChild(imagePreview);
    
    articleOne.appendChild(divOne); 
   }, false);


  productPhotos[4].addEventListener("click", function(){
    removeClass();
    productPhotos[4].className = "img-active";
    imagePreview.src = productPhotos[4].currentSrc;
    // imagePreview.alt = productData.description;
    divOne.appendChild(imagePreview);
    
    articleOne.appendChild(divOne); 
   }, false);



  

      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }
