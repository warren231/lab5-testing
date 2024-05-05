// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;

function init() {
  // TODO
  const voiceSelect = document.querySelector("#voice-select");
  const textarea = document.querySelector("textarea");
  const talkButton = document.querySelector("#explore button");
  const faceImg = document.querySelector("#explore img");
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener("click", function() {
    const utterThis = new SpeechSynthesisUtterance(textarea.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    console.log(faceImg);
    synth.speak(utterThis);
    let hasSpoken = false;
    let speakCheckerID = setInterval(function() {
      if (synth.speaking) {
        faceImg.setAttribute("src", "assets/images/smiling-open.png");
        hasSpoken = true;
      } else {
        faceImg.setAttribute("src", "assets/images/smiling.png");
        if (hasSpoken) {
          clearInterval(speakCheckerID);
        }
      }
    }, 50);
  })
}