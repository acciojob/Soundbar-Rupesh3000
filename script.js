//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
let currentAudio = null;
let currentButton = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // stop button case
    if (button.classList.contains("stop")) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        console.log(`Stopped: ${currentButton?.dataset.sound}`);
        currentButton?.classList.remove("active");
      }
      return;
    }

    // agar pehle koi play ho raha hai to stop karo
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentButton?.classList.remove("active");
    }

    // naya file path banao
    const fileName = button.dataset.sound;
    const soundPath = `sounds/${fileName}.mp3`;

    // naya audio play karo
    currentAudio = new Audio(soundPath);
    currentAudio.play();

    // konsa play ho raha hai, ye show karo
    currentButton = button;
    currentButton.classList.add("active");
    console.log(`Playing: ${fileName}`);
  });
});
