const chatbox = document.getElementById("chatbox");
const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const openChatButton = document.getElementById("open-chat");
const closeChatButton = document.getElementById("close-chat");

let isChatboxOpen = true; // Set the initial state to open

// Function to toggle the chatbox visibility
function toggleChatbox() {
    chatContainer.classList.toggle("hidden");
    isChatboxOpen = !isChatboxOpen; // Toggle the state
}

// Add an event listener to the open chat button
openChatButton.addEventListener("click", toggleChatbox);

// Add an event listener to the close chat button
closeChatButton.addEventListener("click", toggleChatbox);

// Add an event listener to the send button
sendButton.addEventListener("click", function () {
    const userMessage = userInput.value;
    if (userMessage.trim() !== "") {
        addUserMessage(userMessage);
        respondToUser(userMessage);
        userInput.value = "";
    }
});

userInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const userMessage = userInput.value;
        addUserMessage(userMessage);
        respondToUser(userMessage);
        userInput.value = "";
    }
});

function addUserMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("mb-2", "text-right");
    messageElement.innerHTML = `<p class="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">${message}</p>`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function addBotMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("mb-2");
    messageElement.innerHTML = `<p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">${message}</p>`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function respondToUser(userMessage) {
    // Replace this with your chatbot logic
    setTimeout(() => {
        addBotMessage("This is a response from the chatbot.");
    }, 500);
}

// Automatically open the chatbox on page load
toggleChatbox();
  

    // Ambil elemen tombol daftar/login
    const loginButton = document.getElementById('login-button');
    // Ambil elemen popup login
    const loginPopup = document.getElementById('login-popup');
    // Ambil elemen tombol close pada popup login
    const loginCloseButton = loginPopup.querySelector('.popup-close');

    const SignupButton = document.getElementById('signup-text');

    const  signupText = document.getElementById('signup-text');

    const  loginText = document.getElementById('login-text');

    // Ambil elemen popup signup
    const signupPopup = document.getElementById('signup-popup');
    // Ambil elemen tombol close pada popup signup
    const signupCloseButton = signupPopup.querySelector('.popup-close');

    // Fungsi untuk menampilkan popup login
    function showLoginPopup() {
        loginPopup.classList.add('flex');
        loginPopup.classList.remove('hidden');
        // Fokuskan input email ketika popup muncul
        loginPopup.querySelector('input[name="email"]').focus();
    }

    // Fungsi untuk menyembunyikan popup login
    function hideLoginPopup() {
        loginPopup.classList.remove('flex');
        loginPopup.classList.add('hidden');
    }

    // Fungsi untuk menampilkan popup signup
    function showSignupPopup() {
        signupPopup.classList.add('flex');
        signupPopup.classList.remove('hidden');
        // Fokuskan input email ketika popup muncul
        signupPopup.querySelector('input[name="email"]').focus();
    }

    // Fungsi untuk menyembunyikan popup signup
    function hideSignupPopup() {
        signupPopup.classList.remove('flex');
        signupPopup.classList.add('hidden');
    }

    // Event listener untuk tombol daftar/login
    loginButton.addEventListener('click', showLoginPopup);

    SignupButton.addEventListener('click', showSignupPopup);

    // Event listener untuk tombol close pada popup login
    loginCloseButton.addEventListener('click', hideLoginPopup);

    // Event listener untuk tombol close pada popup signup
    signupCloseButton.addEventListener('click', hideSignupPopup);

    signupText.addEventListener('click', function() {
        hideLoginPopup();
        showSignupPopup();
    });

    loginText.addEventListener('click', function() {
        hideSignupPopup();
        showLoginPopup();
    });