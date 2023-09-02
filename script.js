const localVideo = document.getElementById("local-video");
const remoteVideo = document.getElementById("remote-video");

// Access user's camera and microphone

async function startMediaStream() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = stream;
  } catch (error) {
    console.error("Error accessing media devices:", error);
  }
}

startMediaStream();

const chatDisplay = document.getElementById("chat-display");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const message = chatInput.value.trim();
  if (message !== "") {

    // For demonstration purposes, we'll just display the message locally
    displayChatMessage("You: " + message);
    chatInput.value = "";
  }
});

function displayChatMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  chatDisplay.appendChild(messageElement);
  chatDisplay.scrollTop = chatDisplay.scrollHeight; // Auto-scroll to the latest message
}
