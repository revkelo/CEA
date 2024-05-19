function resetForms() {
	// Resetear los valores de todos los campos de entrada
	document.querySelectorAll('input').forEach(input => input.value = '');
}


function crearInstructor(event) {
	event.preventDefault();

	var nombre = document.getElementById('nombreInstructorCrear').value;
	var apellido = document.getElementById('apellidoInstructorCrear').value;
	var correo = document.getElementById('correoInstructorCrear').value;
	var telefono = document.getElementById('telefonoInstructorCrear').value;

	var url = 'http://localhost:8081/api/instructores';
	var params = new URLSearchParams();
	params.append('nombre', nombre);
	params.append('apellido', apellido);
	params.append('correo', correo);
	params.append('telefono', telefono);

	fetch(url, {
		method: 'POST',
		body: params
	})
		.then(response => {
			if (response.ok) {
				alert('Instructor creado exitosamente');
				resetForms();
			} else {
				throw new Error('Error al crear el instructor');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al crear el instructor');
		});
}

// Función para actualizar un instructor
function actualizarInstructor(event) {
	event.preventDefault();

	var id = document.getElementById('idInstructorActualizar').value;
	var nombre = document.getElementById('nombreInstructorActualizar').value;
	var apellido = document.getElementById('apellidoInstructorActualizar').value;
	var correo = document.getElementById('correoInstructorActualizar').value;
	var telefono = document.getElementById('telefonoInstructorActualizar').value;

	// Realizar una solicitud PUT a la API para actualizar el instructor
	// Aquí deberías especificar la URL correcta de tu API, incluyendo el ID del instructor a actualizar
	var url = 'http://localhost:8081/api/instructores/' + id;
	var data = {
		nombre: nombre,
		apellido: apellido,
		correo: correo,
		telefono: telefono
	};

	fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (response.ok) {
				alert('Instructor actualizado exitosamente'); resetForms();
				resetForms();
			} else {
				throw new Error('Error al actualizar el instructor');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al actualizar el instructor');
		});
}

// Función para eliminar un instructor
function eliminarInstructor(event) {
	event.preventDefault();

	var id = document.getElementById('idInstructorEliminar').value;

	// Realizar una solicitud DELETE a la API para eliminar el instructor
	// Aquí deberías especificar la URL correcta de tu API, incluyendo el ID del instructor a eliminar
	var url = 'http://localhost:8081/api/instructores/' + id;

	fetch(url, {
		method: 'DELETE'
	})
		.then(response => {
			if (response.ok) {
				alert('Instructor eliminado exitosamente'); resetForms();
				resetForms();
			} else {
				throw new Error('Error al eliminar el instructor');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al eliminar el instructor');
		});
}


function crearClasePractica(event) {
	event.preventDefault();

	var instructorId = document.getElementById('instructorCrear').value;
	var vehiculoId = document.getElementById('vehiculoCrear').value;
	var matriculadoId = document.getElementById('matriculadoCrear').value;
	var descripcion = document.getElementById('descripcionCrear').value;

	var url = 'http://localhost:8081/api/clasesPracticas';
	var params = new URLSearchParams();
	params.append('instructorId', instructorId);
	params.append('vehiculoId', vehiculoId);
	params.append('matriculadoId', matriculadoId);
	params.append('descripcion', descripcion);

	fetch(url, {
		method: 'POST',
		body: params
	})
		.then(response => {
			if (response.ok) {
				alert('Clase práctica creada exitosamente');
				resetForms();
			} else {
				throw new Error('Error al crear la clase práctica');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al crear la clase práctica');
		});
}


// Función para actualizar una clase práctica
function actualizarClasePractica(event) {
	event.preventDefault();

	var claseId = document.getElementById('idClaseActualizar').value;
	var instructorId = document.getElementById('instructorActualizar').value;
	var vehiculoId = document.getElementById('vehiculoActualizar').value;
	var matriculadoId = document.getElementById('matriculadoActualizar').value;
	var descripcion = document.getElementById('descripcionActualizar').value;

	// Realizar una solicitud PUT a la API para actualizar la clase práctica
	// Aquí deberías especificar la URL correcta de tu API, incluyendo el ID de la clase práctica a actualizar
	var url = 'http://localhost:8081/api/clasesPracticas/' + claseId;
	var data = {
		instructorId: instructorId,
		vehiculoId: vehiculoId,
		matriculadoId: matriculadoId,
		descripcion: descripcion
	};

	fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (response.ok) {
				alert('Clase práctica actualizada exitosamente'); resetForms();
				resetForms();
			} else {
				throw new Error('Error al actualizar la clase práctica');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al actualizar la clase práctica');
		});
}

// Función para eliminar una clase práctica
function eliminarClasePractica(event) {
	event.preventDefault();

	var claseId = document.getElementById('idClaseEliminar').value;

	// Realizar una solicitud DELETE a la API para eliminar la clase práctica
	// Aquí deberías especificar la URL correcta de tu API, incluyendo el ID de la clase práctica a eliminar
	var url = 'http://localhost:8081/api/clasesPracticas/' + claseId;

	fetch(url, {
		method: 'DELETE'
	})
		.then(response => {
			if (response.ok) {
				alert('Clase práctica eliminada exitosamente'); resetForms();
				resetForms();
			} else {
				throw new Error('Error al eliminar la clase práctica');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al eliminar la clase práctica');
		});
}

function crearVehiculo(event) {
	event.preventDefault();

	var placa = document.getElementById('placaCrear').value;
	var modelo = document.getElementById('modeloCrear').value;
	var tipoVehiculo = document.getElementById('tipoVehiculoCrear').value;
	var marca = document.getElementById('marcaCrear').value;
	var nivelVehiculo = document.getElementById('nivelVehiculoCrear').value;
	var disponibilidad = document.getElementById('disponibilidadCrear').value;

	var url = 'http://localhost:8081/api/vehiculos';
	var params = new URLSearchParams();
	params.append('placa', placa);
	params.append('modelo', modelo);
	params.append('tipoVehiculo', tipoVehiculo);
	params.append('marca', marca);
	params.append('nivelVehiculo', nivelVehiculo);
	params.append('disponibilidad', disponibilidad);

	fetch(url, {
		method: 'POST',
		body: params
	})
		.then(response => {
			if (response.ok) {
				alert('Vehículo creado exitosamente');
				resetForms();
			} else {
				throw new Error('Error al crear el vehículo');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al crear el vehículo');
		});
}


// Función para actualizar un vehículo
function actualizarVehiculo(event) {
	event.preventDefault();

	var idVehiculo = document.getElementById('idVehiculoActualizar').value;
	var placa = document.getElementById('placaActualizar').value;
	var modelo = document.getElementById('modeloActualizar').value;
	var tipoVehiculo = document.getElementById('tipoVehiculoActualizar').value;
	var marca = document.getElementById('marcaActualizar').value;
	var nivelVehiculo = document.getElementById('nivelVehiculoActualizar').value;
	var disponibilidad = document.getElementById('disponibilidadActualizar').value;

	var url = 'http://localhost:8081/api/vehiculos/' + idVehiculo;
	var data = {
		placa: placa,
		modelo: modelo,
		tipoVehiculo: tipoVehiculo,
		marca: marca,
		nivelVehiculo: nivelVehiculo,
		disponibilidad: disponibilidad
	};

	fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (response.ok) {
				alert('Vehículo actualizado exitosamente'); resetForms();
				resetForms();
			} else {
				throw new Error('Error al actualizar el vehículo');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al actualizar el vehículo');
		});
}

// Función para eliminar un vehículo
function eliminarVehiculo(event) {
	event.preventDefault();

	var idVehiculo = document.getElementById('idVehiculoEliminar').value;

	var url = 'http://localhost:8081/api/vehiculos/' + idVehiculo;

	fetch(url, {
		method: 'DELETE'
	})
		.then(response => {
			if (response.ok) {
				alert('Vehículo eliminado exitosamente'); resetForms();
				resetForms();
			} else {
				throw new Error('Error al eliminar el vehículo');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al eliminar el vehículo');
		});
}
// Función para crear una categoría
function crearCategoria(event) {
	event.preventDefault();

	var precio = document.getElementById('precioCrear').value;
	var horasTeoricas = document.getElementById('horasTeoricasCrear').value;
	var horasPracticas = document.getElementById('horasPracticasCrear').value;
	var nombreCategoria = document.getElementById('nombreCategoriaCrear').value;

	var url = 'http://localhost:8081/api/categorias';
	var params = new URLSearchParams();
	params.append('precio', precio);
	params.append('horasTeoricas', horasTeoricas);
	params.append('horasPracticas', horasPracticas);
	params.append('nombreCategoria', nombreCategoria);

	fetch(url, {
		method: 'POST',
		body: params
	})
		.then(response => {
			if (response.ok) {
				alert('Categoría creada exitosamente');
				resetForms();
			} else {
				throw new Error('Error al crear la categoría');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al crear la categoría');
		});
}


// Función para actualizar una categoría
function actualizarCategoria(event) {
	event.preventDefault();

	var idCategoria = document.getElementById('idCategoriaActualizar').value;
	var precio = document.getElementById('precioActualizar').value;
	var horasTeoricas = document.getElementById('horasTeoricasActualizar').value;
	var horasPracticas = document.getElementById('horasPracticasActualizar').value;
	var nombreCategoria = document.getElementById('nombreCategoriaActualizar').value;

	var url = 'http://localhost:8081/api/categorias/' + idCategoria;
	var data = {
		precio: precio,
		horasTeoricas: horasTeoricas,
		horasPracticas: horasPracticas,
		nombreCategoria: nombreCategoria
	};

	fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (response.ok) {
				alert('Categoría actualizada exitosamente'); resetForms();
				resetForms();
			} else {
				throw new Error('Error al actualizar la categoría');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al actualizar la categoría');
		});
}

// Función para eliminar una categoría
function eliminarCategoria(event) {
	event.preventDefault();

	var idCategoria = document.getElementById('idCategoriaEliminar').value;

	var url = 'http://localhost:8081/api/categorias/' + idCategoria;

	fetch(url, {
		method: 'DELETE'
	})
		.then(response => {
			if (response.ok) {
				alert('Categoría eliminada exitosamente'); resetForms();
				resetForms();
			} else {
				throw new Error('Error al eliminar la categoría');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al eliminar la categoría');
		});
}


// Función para crear un examen práctico
function crearExamenPractico(event) {
	event.preventDefault();

	var matriculado = document.getElementById('matriculadoCrear').value;
	var instructor = document.getElementById('instructorCrear').value;
	var vehiculo = document.getElementById('vehiculoCrear').value;
	var resultado = document.getElementById('resultadoCrear').value;

	var url = 'http://localhost:8081/api/examenes-practicos';
	var params = new URLSearchParams();
	params.append('matriculado', matriculado);
	params.append('instructor', instructor);
	params.append('vehiculo', vehiculo);
	params.append('resultado', resultado);

	fetch(url, {
		method: 'POST',
		body: params
	})
		.then(response => {
			if (response.ok) {
				alert('Examen práctico creado exitosamente');
				resetForms();
			} else {
				throw new Error('Error al crear el examen práctico');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al crear el examen práctico');
		});
}


// Función para actualizar un examen práctico
function actualizarExamenPractico(event) {
	event.preventDefault();

	var idExamen = document.getElementById('idExamenActualizar').value;
	var matriculado = document.getElementById('matriculadoActualizar').value;
	var instructor = document.getElementById('instructorActualizar').value;
	var vehiculo = document.getElementById('vehiculoActualizar').value;
	var resultado = document.getElementById('resultadoActualizar').value;

	var url = 'http://localhost:8081/api/examenes-practicos/' + idExamen;
	var data = {
		matriculado: matriculado,
		instructor: instructor,
		vehiculo: vehiculo,
		resultado: resultado
	};

	fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (response.ok) {
				alert('Examen práctico actualizado exitosamente'); resetForms();
				resetForms();
			} else {
				throw new Error('Error al actualizar el examen práctico');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al actualizar el examen práctico');
		});
}

// Función para eliminar un examen práctico
function eliminarExamenPractico(event) {
	event.preventDefault();

	var idExamen = document.getElementById('idExamenEliminar').value;

	var url = 'http://localhost:8081/api/examenes-practicos/' + idExamen;

	fetch(url, {
		method: 'DELETE'
	})
		.then(response => {
			if (response.ok) {
				alert('Examen práctico eliminado exitosamente'); resetForms();
				resetForms();
			} else {
				throw new Error('Error al eliminar el examen práctico');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al eliminar el examen práctico');
		});
}

// Función para crear una clase teórica
function crearClaseTeorica(event) {
	event.preventDefault();

	var instructor = document.getElementById('instructorCrear').value;
	var matriculado = document.getElementById('matriculadoCrear').value;
	var descripcion = document.getElementById('descripcionCrear').value;

	var url = 'http://localhost:8081/api/clases-teoricas';
	var params = new URLSearchParams();
	params.append('instructor', instructor);
	params.append('matriculado', matriculado);
	params.append('descripcion', descripcion);

	fetch(url, {
		method: 'POST',
		body: params
	})
		.then(response => {
			if (response.ok) {
				alert('Clase teórica creada exitosamente');
				resetForms();
			} else {
				throw new Error('Error al crear la clase teórica');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al crear la clase teórica');
		});
}


// Función para actualizar una clase teórica
function actualizarClaseTeorica(event) {
	event.preventDefault();

	var idClase = document.getElementById('idClaseActualizar').value;
	var instructor = document.getElementById('instructorActualizar').value;
	var matriculado = document.getElementById('matriculadoActualizar').value;
	var descripcion = document.getElementById('descripcionActualizar').value;

	var url = 'http://localhost:8081/api/clases-teoricas/' + idClase;
	var data = {
		instructor: instructor,
		matriculado: matriculado,
		descripcion: descripcion
	};

	fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (response.ok) {
				alert('Clase teórica actualizada exitosamente'); resetForms();
				resetForms();
			} else {
				throw new Error('Error al actualizar la clase teórica');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al actualizar la clase teórica');
		});
}

// Función para eliminar una clase teórica
function eliminarClaseTeorica(event) {
	event.preventDefault();

	var idClase = document.getElementById('idClaseEliminar').value;

	var url = 'http://localhost:8081/api/clases-teoricas/' + idClase;

	fetch(url, {
		method: 'DELETE'
	})
		.then(response => {
			if (response.ok) {
				alert('Clase teórica eliminada exitosamente'); resetForms();
				resetForms();
			} else {
				throw new Error('Error al eliminar la clase teórica');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al eliminar la clase teórica');
		});
}

function crearMatriculado(event) {
	event.preventDefault();

	var cliente = document.getElementById('clienteCrear').value;
	var categoria = document.getElementById('categoriaCrear').value;
	var fechaInicio = document.getElementById('fechaInicioCrear').value;
	var fechaFin = document.getElementById('fechaFinCrear').value;

	var url = 'http://localhost:8081/api/matriculados';
	var params = new URLSearchParams();
	params.append('cliente', cliente);
	params.append('categoria', categoria);
	params.append('fechaInicio', fechaInicio);
	params.append('fechaFin', fechaFin);

	fetch(url, {
		method: 'POST',
		body: params
	})
		.then(response => {
			if (response.ok) {
				alert('Matriculado creado exitosamente');
				resetForms();
			} else {
				throw new Error('Error al crear el matriculado');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al crear el matriculado');
		});
}


// Función para actualizar un matriculado
function actualizarMatriculado(event) {
	event.preventDefault();

	var idMatriculado = document.getElementById('idMatriculadoActualizar').value;
	var cliente = document.getElementById('clienteActualizar').value;
	var categoria = document.getElementById('categoriaActualizar').value;
	var fechaInicio = document.getElementById('fechaInicioActualizar').value;
	var fechaFin = document.getElementById('fechaFinActualizar').value;

	var url = 'http://localhost:8081/api/matriculados/' + idMatriculado;
	var data = {
		cliente: cliente,
		categoria: categoria,
		fechaInicio: fechaInicio,
		fechaFin: fechaFin
	};

	fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (response.ok) {
				alert('Matriculado actualizado exitosamente'); resetForms();
			} else {
				throw new Error('Error al actualizar el matriculado');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al actualizar el matriculado');
		});
}

// Función para eliminar un matriculado
function eliminarMatriculado(event) {
	event.preventDefault();

	var idMatriculado = document.getElementById('idMatriculadoEliminar').value;

	var url = 'http://localhost:8081/api/matriculados/' + idMatriculado;

	fetch(url, {
		method: 'DELETE'
	})
		.then(response => {
			if (response.ok) {
				alert('Matriculado eliminado exitosamente'); resetForms();
			} else {
				throw new Error('Error al eliminar el matriculado');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al eliminar el matriculado');
		});
}
function crearCliente(event) {
	event.preventDefault();

	var nombre = document.getElementById('nombreCrear').value;
	var apellido = document.getElementById('apellidoCrear').value;
	var telefono = document.getElementById('telefonoCrear').value;
	var correo = document.getElementById('correoCrear').value;
	var cedula = document.getElementById('cedulaCrear').value;

	var url = 'http://localhost:8081/sql/cliente'; // Corregido el nombre de la ruta
	var params = new URLSearchParams();
	params.append('nombre', nombre);
	params.append('apellido', apellido);
	params.append('telefono', telefono);
	params.append('correo', correo);
	params.append('cedula', cedula);

	fetch(url, {
		method: 'POST',
		body: params
	})
		.then(response => {
			if (response.ok) {
				return response.text();
			} else {
				throw new Error('Error en la solicitud');
			}
		})
		.then(data => {
			console.log(data);
			alert('Cliente creado exitosamente');
			resetForms();
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al crear el cliente');
		});
}

function actualizarCliente(event) {
    event.preventDefault();

    var idCliente = document.getElementById('idClienteActualizar').value;
    var nombre = document.getElementById('nombreActualizar').value;
    var apellido = document.getElementById('apellidoActualizar').value;
    var telefono = document.getElementById('telefonoActualizar').value;
    var correo = document.getElementById('correoActualizar').value;
    var cedula = document.getElementById('cedulaActualizar').value;

    var url = 'http://localhost:8081/sql/cliente/' + idCliente;
    var params = new URLSearchParams();
    params.append('nombre', nombre);
    params.append('apellido', apellido);
    params.append('telefono', telefono);
    params.append('correo', correo);
    params.append('cedula', cedula);

    fetch(url, {
        method: 'PUT',
        body: params
    })
        .then(response => {
            if (response.ok) {
                return response.text(); // Convertir la respuesta a texto
            } else {
                throw new Error('Error al actualizar el cliente');
            }
        })
        .then(data => {
            alert(data); 
   
            resetForms();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al actualizar el cliente');
        });
}



function eliminarCliente(event) {
	event.preventDefault();

	var idCliente = document.getElementById('idClienteEliminar').value;

	var url = 'http://localhost:8081/sql/cliente/' + idCliente;

	fetch(url, {
		method: 'DELETE'
	})
		.then(response => {
			if (response.ok) {
				return response.text(); // Convierte la respuesta a texto
			} else {
				throw new Error('Error al eliminar el cliente');
			}
		})
		.then(data => {
			alert(data);
			resetForms();
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al eliminar el cliente');
		});
}

