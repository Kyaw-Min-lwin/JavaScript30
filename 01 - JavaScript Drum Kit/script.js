document.addEventListener('keypress', (e) => {
    keyCode = findKey(e) - 32;
    let audio = document.querySelector(`audio[data-key = '${keyCode}']`);
    audio.play();
})


function findKey(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    return charCode;
}