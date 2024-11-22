// Obtener el modal
var modal = document.getElementById("vemergente");

// Obtener el botón que abre el modal
var btnAbrir = document.getElementById("btnAbrirEmergente");

// Obtener el <span> que cierra el modal
var spanCerrar = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el enlace, abre el modal
btnAbrir.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario haga clic en <span> (x), cierra el modal
spanCerrar.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier parte fuera del modal, lo cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}