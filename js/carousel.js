
//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
    constructor(image, text, path){
        this._image = image;
        this.text = text;
        this._path = path;
    }

    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.renderizar(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }
     static renderizar(){
        let img = document.getElementById("carousel");
        let title = document.getElementById("carousel-title");

        let info = carouselArr[Carousel._sequence];
        title.style.color = "white";
        img.innerHTML = `<a href="${info._path}"><img src="img/${info._image}" alt=""></a>`;
        title.innerHTML = `<h2>${info.text}</h2>`;

     }
    static Next(){
        Carousel._sequence++;
        if(Carousel._sequence > Carousel._size - 1){
            Carousel._sequence = 0;
        }

        this.renderizar();
    }
};
