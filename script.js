// addToCartBtn.addEventListener("click", function() {
//   var productId = window.location.search.split("=")[1];
//   var urlLink =
//     "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + productId;

//   function getDataForLocalStorage() {
//     var http = new XMLHttpRequest();
//     http.onreadystatechange = function() {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           var productData = JSON.parse(this.responseText);
//           addDataIntoList(productData);
//         }
//       }
//     };
//     http.open("GET", urlLink, true);
//     http.send();
//   }
//   cartCount();
//   getDataForLocalStorage();
// });
// $.get(
//   "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + searchId,
//   function(data) {
//     var productDetail = data;
//     name = productDetail.name;
//     imageSrc = productDetail.preview;
//     brand = productDetail.brand;
//     price = productDetail.price;
//     description = productDetail.description;
//     photo0 = productDetail.photos[0];
//     photo1 = productDetail.photos[1];
//     photo2 = productDetail.photos[2];
//     photo3 = productDetail.photos[3];
//     photo4 = productDetail.photos[4];
//     photo5 = productDetail.photos[5];

//     createProductPage(
//       imageSrc,
//       name,
//       brand,
//       price,
//       description,
//       photo0,
//       photo1,
//       photo2,
//       photo3,
//       photo4,
//       photo5
//     );
//   }
// );
// }
// getProductDetail();
// function navSlide() {
//   var burger = document.querySelector(".burger");
//   var nav = document.querySelector(".nav-links");

//   burger.addEventListener("click", function() {
//     nav.classList.toggle("nav-active");
//     burger.classList.toggle("toggle");
//   });
// }
// navSlide();
// $(document).ready(function() {
//   $("#banner").slick({
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false
//   });
// });

console.log("stt")
var preview = document.querySelector("#productImg");
var thumb = document.querySelectorAll(".thumb ");

thumb.forEach((item) => 
  item.addEventListener("click" , function(e){
    preview.src = e.target.src
    console.log(e.target.src)
  })
)