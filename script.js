// List of sounds (names should match files in "sounds" folder)
const sounds = ["sound1", "sound2", "sound3", "sound4"];

const buttonsContainer = document.getElementById("buttons");

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
    btn.currentAudio = audio; // attach audio to button
  });

  buttonsContainer.appendChild(btn);
});

// Create STOP button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", stopSounds);

buttonsContainer.appendChild(stopBtn);

// Function to stop all sounds
function stopSounds() {
  const btns = document.querySelectorAll(".btn");
  btns.forEach(b => {
    if (b.currentAudio) {
      b.currentAudio.pause();
      b.currentAudio.currentTime = 0;
    }
  });
}
