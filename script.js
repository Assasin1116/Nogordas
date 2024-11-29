document
  .getElementById("pesoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const resultadoDiv = document.getElementById("resultado");
    const imagenDiv = document.getElementById("imagen");
    const audioDiv = document.getElementById("audio");

    document.getElementById("formSection").style.display = "none";
    document.getElementById("resultSection").style.display = "block";

    resultadoDiv.innerHTML = "";
    imagenDiv.innerHTML = "";
    audioDiv.innerHTML = "";

    if (peso > 79) {
      imagenDiv.style.display = "flex";
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const imageWidth = 150;
      const imageHeight = 150;

      let imagesInRow = Math.floor(screenWidth / imageWidth);
      let rows = Math.floor(screenHeight / imageHeight);

      for (let i = 0; i < imagesInRow + 100 * rows; i++) {
        const img = document.createElement("img");
        img.src = "nogordas.png";
        imagenDiv.appendChild(img);
      }

      const audioEmbed = document.createElement("iframe");
      audioEmbed.src = "oye.mp3";
      audioEmbed.width = "0";
      audioEmbed.height = "0";
      audioEmbed.style.border = "none";
      audioDiv.appendChild(audioEmbed);

      resultadoDiv.innerHTML =
        "<p>¡Pesas más de 80 kg! Aquí está la canción:</p>";
    } else {
      resultadoDiv.innerHTML =
        "<p>Puedes seguir tranquilo, no pesas más de 80 kg.</p>";
    }
  });
