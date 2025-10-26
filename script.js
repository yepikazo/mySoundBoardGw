const isi = document.getElementById('isi');
const sounds = [ "acumalaka", "amogus", "ayonima", "brain fart", "owi kaget",];

sounds.forEach(sfx => {
    const btn = document.createElement('button');
    btn.classList.add('sound-button');
    btn.id = sfx;
    btn.innerText = sfx;
    isi.appendChild(btn);

    btn.addEventListener('click', () => {
        stop();
        const audio = new Audio(`sounds/${sfx}.mp3`);
        audio.play();
    });
});

function stop(){
    sounds.forEach(sfx => {
        const audio = new Audio(`sounds/${sfx}.mp3`);
        audio.pause();
        audio.currentTime = 0;
    });
}