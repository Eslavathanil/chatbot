let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainerE1 = document.getElementById("chatContainer");
let userInputE1 = document.getElementById("userInput");

function sendmsgchatBot() {

    let usermsg = userInputE1.value;

    let msgcontainerE1 = document.createElement("div");
    msgcontainerE1.classList.add("msg-to-chatbot-container");
    chatContainerE1.appendChild(msgcontainerE1);

    let usermsgE1 = document.createElement("span");
    usermsgE1.textContent = usermsg;
    usermsgE1.classList.add("msg-to-chatbot");
    msgcontainerE1.appendChild(usermsgE1);

    userInputE1.value = "";
    getreplaybot();
}

function getreplaybot() {
    let noofchatbot = chatbotMsgList.length;
    let chatbotmsg = chatbotMsgList[Math.ceil(Math.random() * noofchatbot) - 1]

    let msgcontainerE1 = document.createElement("div");
    msgcontainerE1.classList.add("msg-from-chatbot-container");
    chatContainerE1.appendChild(msgcontainerE1);

    let chatbotmsgE1 = document.createElement("span");
    chatbotmsgE1.textContent = chatbotmsg;
    chatbotmsgE1.classList.add("msg-from-chatbot-container");
    msgcontainerE1.appendChild(chatbotmsgE1);
}