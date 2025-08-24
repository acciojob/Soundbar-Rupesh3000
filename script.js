const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

// Attach click event to each sound button
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    stopSounds();
    const sound = btn.getAttribute("data-sound");
    const audio = new Audio(`./sounds/${sound}.mp3`);

    audio.addEventListener("error", () => {
      console.error(`Failed to load: ./sounds/${sound}.mp3`);
    });

    audio.play().catch(err => console.error("Play failed", err));
    btn.currentAudio = audio;
  });
});

// Stop button logic
stopBtn.addEventListener("click", stopSounds);

function stopSounds() {
  buttons.forEach(b => {
    if (b.currentAudio) {
      b.currentAudio.pause();
      b.currentAudio.currentTime = 0;
    }
  });
}
