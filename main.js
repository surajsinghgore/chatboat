const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I did not understand that.";

    if (message.includes('hello')) {
      speech.text = "hello. can you tell me your name?";
    }
    if (message.includes('how are you')) {
      speech.text = "I am fine, thanks. How are you?";
    }

    if (message.includes('fine')) {
      speech.text = "Nice to hear that. How can I assist you today?";
    }
    if (message.includes('good')) {
      speech.text = "Nice to hear that. How can I assist you today?";
    }
    if (message.includes('sad')) {
      speech.text = "Nice to hear that. How can I assist you today?";
    }
    if (message.includes('excelent')) {
      speech.text = "Nice to hear that. How can I assist you today?";
    }
if (message.includes('not good')) {
      speech.text = "Nice to hear that. How can I assist you today?";
    }
if (message.includes('play song')) {
      speech.text = "you can go on youtube and play your music.";
    }
    if (message.includes('play music')) {
      speech.text = "you can go on youtube and play your music.";
    }

    if (message.includes('weather')) {
      speech.text = "Of course. Where are you currently?";
    }
    if (message.includes('link of YouTube')) {
      speech.text = "of course you can visit ,https://www.youtube.com";
    }
 if (message.includes('Yatharth')) {
      speech.text = "you are such a bad boy leave me and  go away from me";
    }

 

    if (message.includes('London')) {
      speech.text = "It is 18 degrees and sunny.";
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});