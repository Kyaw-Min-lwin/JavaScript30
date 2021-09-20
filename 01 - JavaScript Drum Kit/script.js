let buttons = document.querySelectorAll('.key');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let keyCode = button.dataset.key;
        let audio = document.querySelector(`audio[data-key = '${keyCode}']`);
        audio.play();

    })
})

document.addEventListener('keypress', (e) => {
    keyCode = findKey(e) - 32;
    let audio = document.querySelector(`audio[data-key = '${keyCode}']`);
    audio ? audio.play() : null;
})


function findKey(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    return charCode;
}