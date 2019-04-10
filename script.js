
window.addEventListener("keydown", function (event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return false; //stop the function from running altogether
    audio.currentTime = 0; //rewind to the start 
    audio.play();
    key.classList.add('playing'); //key.addClass('playing') in jquery
    audio.classList.add('audio-playing');

});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == "32") {
        const audios = document.getElementsByClassName('audio-playing');
        if (!audios) return false; //stop the function from running altogether
        for(let audio of audios){
            audio.pause();
        }
    }
});




function removeTransition(e) {
    console.log(e);
    // if (e.propertyName != 'transform') return; // skip it if its not a transform
    // console.log(e.propertyName); // nie dziala
    // this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');

keys.forEach(function(key){
    return key.addEventListener('transitionend', removeTransition)
})

// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

