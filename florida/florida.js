function myMove() {
    const boat = document.getElementById("animation");
    let pos = 0;
    const move = setInterval(frame, 20);

    function frame() {
        if (pos === 125) {
            clearInterval(move);
        } else {
            pos ++;
            boat.style.marginLeft = pos + 'px';
        }
    }
}
//make the boat