document.getElementById('loginForm').addEventListener('submit', function(event) {
	event.preventDefault(); // Evita el envío del formulario
	window.location.href = 'admin.html'; // Redirige a cruds.html
});