const images = document.querySelectorAll("#slider img");

let initialeIndex = 0;

images[initialeIndex].classList.add("active");

function droiteSlider() {
    images[initialeIndex].classList.remove("active");
    initialeIndex = (initialeIndex + 1) % images.length;
    images[initialeIndex].classList.add("active");
}

function gaucheSlider() {
    images[initialeIndex].classList.remove("active");
    initialeIndex = (initialeIndex - 1 + images.length) % images.length;
    images[initialeIndex].classList.add("active");
}

