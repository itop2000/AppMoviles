const botonColor = document.getElementById("cambiarColor");
botonColor.addEventListener("click", () => {
  console.log("Button clicked!");
  const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = colorAleatorio;
});