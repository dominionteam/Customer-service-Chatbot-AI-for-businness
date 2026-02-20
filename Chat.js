const form = document.getElementById('input-form');
const input = document.getElementById('user-input');
const messages = document.getElementById('messages');

form.addEventListener('submit', function(e){
  e.preventDefault();
  if(input.value.trim() === '') return;

  // User message
  const userMsg = document.createElement('div');
  userMsg.classList.add('message', 'user-message');
  userMsg.textContent = input.value;
  messages.appendChild(userMsg);

  // Bot response
  const botMsg = document.createElement('div');
  botMsg.classList.add('message', 'bot-message');
  botMsg.textContent = "Hello!, how may I help you please?";
  messages.appendChild(botMsg);

  // Scroll to bottom
  messages.scrollTop = messages.scrollHeight;

  input.value = '';
});