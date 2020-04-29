function myMove() {
    const boat = document.getElementById("animation");
    let pos = -125;
    const move = setInterval(frame, 20);

    function frame() {
        if (pos === 0) {
            clearInterval(move);
        } else {
            pos ++;
            boat.style.marginLeft = pos + 'px';
        }
    }
}

// find element
const prevBtn = document.getElementById("show-prev-btn");
const nextBtn = document.getElementById("show-next-btn");
const slideImage = document.getElementById("slide-img");

// subscribe to events
prevBtn.addEventListener("click", onPrevBtnClick);
nextBtn.addEventListener("click", onNextBtnClick);

// create image array
const imageSrcs = [];
imageSrcs.push("./images/jacksonville.jpg");
imageSrcs.push("./images/miami.jpeg");
imageSrcs.push("./images/tampa.jpg");
imageSrcs.push("./images/orlando.jpg");
imageSrcs.push("./images/st-pete.jpeg");

let currentImageIndex = 0;
slideImage.src = imageSrcs[currentImageIndex];
prevBtn.disabled = true;

// function definitions
function onPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imageSrcs[currentImageIndex];
    nextBtn.disabled = false;
    if (currentImageIndex === 0) {
        prevBtn.disabled = true;
    } 
}

function onNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imageSrcs[currentImageIndex];
    prevBtn.disabled = false;
    if (currentImageIndex === imageSrcs.length - 1) {
        nextBtn.disabled = true;
    } 
}