document.addEventListener("DOMContentLoaded", function() {
	// Obtener el formulario de inicio de sesión
	var form = document.getElementById("loginForm");
  
	// Agregar un evento de envío al formulario
	form.addEventListener("submit", function(event) {
	  // Detener el envío del formulario
	  event.preventDefault();
  
	  // Obtener los valores de usuario y contraseña
	  var usuario = form.elements["username"].value;
	  var contraseña = form.elements["password"].value;
  
	  // Verificar si el usuario y la contraseña son correctos
	  if (usuario === "admin" && contraseña === "admin") {
		// Redirigir a admin.html si las credenciales son correctas
		window.location.href = "admin.html";
	  } else {
		// Mostrar una alerta si las credenciales son incorrectas
		alert("Usuario o contraseña incorrectos");
	  }
	});
  });