//Zadanie 1//
//zrobiłem event na "click" zamiast "mouseover" bo wydało mi się to bardziej logiczne
document.addEventListener("DOMContentLoaded", function () {

    var oFirmie = document.querySelector("#oFirmie");
    var dropDown = document.querySelector(".drop-down-list");

    oFirmie.addEventListener("click", function () {
        if (dropDown.style.display != "block") {
            dropDown.style.display = "block";
        } else if (dropDown.style.display == "block") {
            dropDown.style.display = "none";
        }
    })

});
//Zadanie 2//
document.addEventListener("DOMContentLoaded", function () {

    var article = document.querySelector("#ar");
    var arContent = document.querySelector("#ar div");

    article.addEventListener("mouseover", function () {
        arContent.style.display = "none";
    })

    article.addEventListener("mouseout", function () {
        arContent.style.display = "inline-block";
    })

    var article1 = document.querySelector("#ar1");
    var ar1Content = document.querySelector("#ar1 div");

    article1.addEventListener("mouseover", function () {
        ar1Content.style.display = "none";
    })

    article1.addEventListener("mouseout", function () {
        ar1Content.style.display = "inline-block";
    })

});

//Zadanie 3//

var i = 0;
var images = [];

images[0] = "images/black_chair.png";
images[1] = "images/orange_chair.png";
images[2] = "images/red_chair.png";


var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var slide = document.querySelector(".slide");

next.addEventListener("click", function(){
    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    slide.src = images[i];
});

prev.addEventListener("click", function(){
    if(i === 0){
        i = images.length -1;
    } else {
        i--;
    }
    slide.src = images[i];
});
