// Function to convert color names to hex
function colorNameToHex(color) {
  const ctx = document.createElement("canvas").getContext("2d");
  ctx.fillStyle = color;
  return ctx.fillStyle;
}

// Function to generate a random color
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

$(document).ready(function () {
  // Prompt user for initial color
  const userColor = prompt(
    "Please enter a color in plain English (e.g., 'sky blue'):"
  );
  let currentColor = colorNameToHex(userColor);

  // Apply initial color with transition
  $("body").css({
    "background-color": currentColor,
    transition: "background-color 3s",
  });

  // Change color every 3 seconds
  setInterval(function () {
    const newColor = getRandomColor();
    $("body").css("background-color", newColor);
    currentColor = newColor;
  }, 3000);
});
