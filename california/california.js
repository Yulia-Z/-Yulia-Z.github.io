// find element
const prevBtn = document.getElementById("show-prev-btn");
const nextBtn = document.getElementById("show-next-btn");
const slideImage = document.getElementById("slide-img");
let bearNames = document.getElementsByName("bear"); // HTMLCollection: we couldn’t treat our HTMLCollection like an array!!!
bearNames = Array.from(bearNames); //convert to array
const submitBtn = document.getElementById("submit");

// subscribe to events
prevBtn.addEventListener("click", onPrevBtnClick);
nextBtn.addEventListener("click", onNextBtnClick);
submitBtn.addEventListener("click", onSubmit);

// create image array
const imageSrcs = [];
imageSrcs.push("./images/los-angeles.jpg");
imageSrcs.push("./images/san-diego.jpg");
imageSrcs.push("./images/san-jose.jpg");
imageSrcs.push("./images/san-francisco.jpg");
imageSrcs.push("./images/fresno.jpg");

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

function submitBtnActivation() {
    if (submitBtn.disabled) {
        submitBtn.disabled = false;
    }
}

function onSubmit() {
    console.log(bearNames[0]);
    const answer = bearNames.filter((name) => name.checked)[0];
    console.log(answer);
    if (answer.value === "Monarch") {
        alert("Correct! You are so smart!");
    } else {
        alert("Are you seriously? It is too cute name for fierce Grizzly! Try once more!")
    }
}

function myMove() {
    const sun = document.getElementById("animation");
    let pos = -125;
    const move = setInterval(frame, 20);

    function frame() {
        if (pos === 0) {
            clearInterval(move);
        } else {
            pos ++;
            sun.style.bottom = pos + 'px';
        }
    }
}
