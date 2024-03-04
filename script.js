document.addEventListener("DOMContentLoaded", function () {
  const messageContainer = document.getElementById("daily-message");
  const nextMessageBtn = document.getElementById("next-message-btn");

  // Fetch messages from JSON file
  fetch("messages.json")
    .then((response) => response.json())
    .then((data) => {
      const messages = data.messages;

      // Display a random message on page load
      displayRandomMessage(messages);

      // Add click event to the button for next message
      nextMessageBtn.addEventListener("click", function () {
        displayRandomMessage(messages);
      });
    })
    .catch((error) => console.error("Error fetching messages:", error));

  function displayRandomMessage(messages) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    messageContainer.textContent = randomMessage;
  }
});
