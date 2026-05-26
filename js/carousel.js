
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
        title.style.color = "#000000";
        img.innerHTML = `
        <button id=prev_b><</button>
        <a href="${info._path}"><img src="img/${info._image}" alt=""></a>
        <button id=next_b>></button>`;
        title.innerHTML = `<h2>${info.text}</h2>`;
        Carousel.buttons();

     }
    static Next(){
        Carousel._sequence++;
        if(Carousel._sequence > Carousel._size - 1){
            Carousel._sequence = 0;
        }

        Carousel.renderizar();
    }

    static Previous(){
        Carousel._sequence--;
        if(Carousel._sequence < 0){
            Carousel._sequence = Carousel._size - 1;
        }

        Carousel.renderizar();
    }

    static buttons(){
        document.getElementById("prev_b").addEventListener("click", () => {
            clearInterval(Carousel._interval);
            this.Previous();
            Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
        });
        document.getElementById("next_b").addEventListener("click", () => {
            clearInterval(Carousel._interval);
            this.Next();
            Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
        });
    }
};
