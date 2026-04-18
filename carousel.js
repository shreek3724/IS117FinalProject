
// <!-- DEVELOPER: Shreejitha Kanduri, IS117-002, Spring 2026 -->
// code to make the carousel images on the homepage move with the buttons
// javascript code was learnt and made by using W3schools, and online videos and resources

let slideIndex = 0;
showSlides(slideIndex);

// for the clicks
function changeSlide(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    let slides = document.getElementsByClassName("carousel-slide");

    if (n >= slides.length){slideIndex = 0; }
    if (n < 0){slideIndex = slides.length-1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // hides all the slides

    slides[slideIndex].style.display = "block";
    // to show the current slide

}