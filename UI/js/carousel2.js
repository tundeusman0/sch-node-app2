const carousel = document.getElementById("carousel")
const carouselImages = document.querySelectorAll("#carouselImage")
const carouselDescs = document.querySelectorAll(".carouselDesc")
let images = [];
let imges;
let descs;
let desc = [];
console.log(carouselDescs)

for (let i = 0; i <= carouselImages.length - 1; i++) {
    imges = carouselImages[i].getElementsByTagName('img')[0].src.slice(21)
    descs = carouselDescs[i].getElementsByClassName("title")
    desc.push(carouselDescs[i])
    images.push("url(" + imges + ")")
}
let currentPos = 0;


carousel.style.backgroundImage = images[0]
desc[0].style.display = "block"

function ImageChanges() {
    if (++currentPos >= images.length)
        currentPos = 0;

    carousel.style.backgroundImage = images[currentPos]
    desc.forEach(des => des.style.display = "none");
    desc[currentPos].style.display = "block"

}


setInterval(ImageChanges, 3000);

// const carouselImages = document.querySelectorAll("#image")
// let imges ;
// let images = [];
// console.log(carouselImages)
// for (let i = 0; i <= carouselImages.length - 1; i++) {
//     imges = carouselImages[i].src.slice(21)
//     images.push(imges)
// }
// console.log(images)
// let currentPos = 0;


// carouselImages[0].style.display = "block"

// function ImageChanges() {
//     if (++currentPos >= images.length)
//         currentPos = 0;

//     carouselImages.forEach(image => image.style.display = "none");
//     carouselImages[currentPos].style.display = "block"


// }


// setInterval(ImageChanges, 3000);