// expose.js

const jsConfetti = new JSConfetti();
window.addEventListener('DOMContentLoaded', init);

function init() {
  // setting up HTML element selectors
  const hornSelect = document.querySelector("#horn-select");
  const hornImg = document.querySelector("#expose img");
  const volumeImg = document.querySelector("#volume-controls img");
  const audio = document.querySelector("audio");
  const volumeSelect = document.querySelector("#volume");
  const audioButton = document.querySelector("button");

  let option = hornSelect.value;

  hornSelect.addEventListener("input", function() {
    option = hornSelect.value;
    hornImg.setAttribute("src", "assets/images/" + option + ".svg");
    audio.setAttribute("src", "assets/audio/" + option + ".mp3");
  });

  volumeSelect.addEventListener("input", function() {
    let volume = Number(volumeSelect.value);
    audio.volume = volume / 100;
    
    let volumeLevel = 0;
    if (volume >= 67) {
      volumeLevel = 3;
    } else if (volume >= 33) {
      volumeLevel = 2;
    } else if (volume > 0) {
      volumeLevel = 1;
    }
    volumeImg.setAttribute("src", "assets/icons/volume-level-" + volumeLevel + ".svg");
  });

  audioButton.addEventListener("click", function() {
    if (audio.getAttribute("src") != "") { // only play audio if it's been linked to an audio file
      audio.play();
      if (option == "party-horn") {
        jsConfetti.addConfetti();
      }
    }
  });
}