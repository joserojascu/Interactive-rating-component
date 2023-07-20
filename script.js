 // Evento para manejar el envío del formulario
 document.getElementById("submitBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener el valor del radio button seleccionado
    const selectedRating = document.querySelector("input[name='rating']:checked");

    if (selectedRating) {
      console.log(selectedRating.value)
      document.getElementById("selectedRating").textContent = " " + selectedRating.value + " ";

      document.querySelector(".form").style.display = "none";
      document.querySelector(".container-thank").style.display = "flex";
      
    }
  });