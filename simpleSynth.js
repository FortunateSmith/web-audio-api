// const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

const audioElement = document.querySelector("audio");

const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

const playButton = document.querySelector("button");

playButton.addEventListener("click", () => {
  console.log("CLICKED");
});

playButton.addEventListener(
  "click",
  () => {
    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    // Play or Pause track depending on state
    if (playButton.dataset.playing === "false") {
      console.log(playButton.dataset);
      audioElement.play();
      playButton.dataset.playing = "true";
    } else if (playButton.dataset.playing === "true") {
      console.log(playButton.dataset);
      audioElement.pause();
      playButton.dataset.playing = "false";
    }
  },
  false
);

audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing === "false";
  },
  false
);
