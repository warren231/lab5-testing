// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.querySelector("#horn-select");
  const hornImg = document.querySelector("#expose img");
  const volumeImg = document.querySelector("#volume-controls img");
  const audio = document.querySelector("audio");
  const volumeSelect = document.querySelector("#volume");
  const audioButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  let option = hornSelect.value;

  hornSelect.addEventListener("input", function() {
    option = hornSelect.value;
    hornImg.setAttribute("src", "assets/images/" + option + ".svg");
    audio.setAttribute("src", "assets/audio/" + option + ".mp3");
  });

  volumeSelect.addEventListener("input", function() {
    let volume = Number(volumeSelect.value);
    audio.volume = volume / 100;
    let volumeLevel = Math.ceil(volume / (100 / 3));
    volumeImg.setAttribute("src", "assets/icons/volume-level-" + volumeLevel + ".svg");
  });

  audioButton.addEventListener("click", function() {
    if (audio.getAttribute("src") != "") {
      audio.play();
      if (option == "party-horn") {
        jsConfetti.addConfetti();
      }
    }
  });
}