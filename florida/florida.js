function myMove() {
    const boat = document.getElementById("animation");
    let pos = -125;
    const move = setInterval(frame, 20);

    function frame() {
        if (pos === 0) {
            clearInterval(move);
        } else {
            pos ++;
            boat.style.bottom = pos + 'px';
        }
    }
}