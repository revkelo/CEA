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
	var cedula = document.getElementById('cedulaInstructorCrear').value;
	var tipo = document.getElementById('tipoInstructorCrear').value;
	var disponibilidad = document.getElementById('disponibilidadInstructorCrear').value;

	var url = 'http://localhost:8081/instructor';
	var data = {
		nombre: nombre,
		apellido: apellido,
		correo: correo,
		telefono: telefono,
		cedula: cedula,
		tipo_instructor: tipo,
		disponibilidad: disponibilidad
	};

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
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
	var cedula = document.getElementById('cedulaInstructorActualizar').value;
	var tipo = document.getElementById('tipoInstructorActualizar').value;
	var disponibilidad = document.getElementById('disponibilidadInstructorActualizar').value;


	// Realizar una solicitud PUT a la API para actualizar el instructor
	// Aquí deberías especificar la URL correcta de tu API, incluyendo el ID del instructor a actualizar
	var url = 'http://localhost:8081/instructor/' + id;
	var data = {
		nombre: nombre,
		apellido: apellido,
		correo: correo,
		telefono: telefono,
		cedula: cedula,
		tipo_instructor: tipo,
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

	var cedula = document.getElementById('cedulaInstructorEliminar').value;

	// Realizar una solicitud DELETE a la API para eliminar el instructor
	// Aquí deberías especificar la URL correcta de tu API, incluyendo el ID del instructor a eliminar
	var url = 'http://localhost:8081/instructor/' + cedula;

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

	var instructorId = document.getElementById('i').value;
	var vehiculoId = document.getElementById('v').value;
	var matriculadoId = document.getElementById('m').value;
	var descripcion = document.getElementById('d').value; // Esto ya es una cadena

	var formData = new FormData();
	formData.append('ID_instructor', instructorId);
	formData.append('ID_vehiculo', vehiculoId);
	formData.append('ID_matriculado', matriculadoId);
	formData.append('Descripcion', descripcion); // No es necesario convertir explícitamente a cadena

	console.log('Form data:', Array.from(formData.entries())); // Log para verificar datos

	var url = 'http://localhost:8081/clase-practica/agregar';

	fetch(url, {
		method: 'POST',
		body: formData
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



function actualizarClasePractica(event) {
	event.preventDefault();

	var claseId = document.getElementById('idClaseActualizar').value;
	var instructorId = document.getElementById('instructorActualizar').value;
	var vehiculoId = document.getElementById('vehiculoActualizar').value;
	var matriculadoId = document.getElementById('matriculadoActualizar').value;
	var descripcion = document.getElementById('descripcionActualizar').value;

	// Validar que los campos necesarios no estén vacíos
	if (!claseId || !instructorId || !vehiculoId || !matriculadoId || !descripcion) {
		alert('Por favor, complete todos los campos necesarios.');
		return;
	}

	// Crear un objeto FormData
	var formData = new FormData();
	formData.append('id', claseId)
	formData.append('ID_instructor', instructorId);
	formData.append('ID_vehiculo', vehiculoId);
	formData.append('ID_matriculado', matriculadoId);
	formData.append('Descripcion', descripcion);

	console.log('Datos de la clase práctica a actualizar:', Array.from(formData.entries())); // Log para verificar datos

	// URL de la solicitud
	var url = 'http://localhost:8081/clase-practica/' + claseId;

	// Realizar la solicitud PUT
	fetch(url, {
		method: 'PUT',
		body: formData
	})
		.then(response => {
			if (response.ok) {
				alert('Clase práctica actualizada exitosamente');
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
	var url = 'http://localhost:8081/clase-practica/' + claseId;

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

function crearClaseTeorica(event) {
    event.preventDefault();

    var instructorId = document.getElementById('instructorTCrear').value;
    var matriculadoId = document.getElementById('matriculadoTCrear').value;
    var descripcion = document.getElementById('descripcionTCrear').value;

    var url = 'http://localhost:8081/claseteorica/Agregar';
    var params = 'ID_instructor=' + encodeURIComponent(instructorId) +
                 '&ID_matriculado=' + encodeURIComponent(matriculadoId) +
                 '&descripcion=' + encodeURIComponent(descripcion);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params,
        mode: 'no-cors'
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

function actualizarClaseTeorica(event) {
    event.preventDefault();

    var claseId = document.getElementById('idClaseTActualizar').value;
    var instructorId = document.getElementById('instructorTActualizar').value;
    var matriculadoId = document.getElementById('matriculadoTActualizar').value;
    var vehiculoID = document.getElementById('VehiculoAclaseT').value;
    var descripcion = document.getElementById('descripcionActualizar').value;

    var url = 'http://localhost:8081/clase-teorica/' + claseId;
    var params = 'ID_instructor=' + encodeURIComponent(instructorId) +
                 '&ID_matriculado=' + encodeURIComponent(matriculadoId) +
                 '&vehiculoID=' + encodeURIComponent(vehiculoID) +
                 '&descripcion=' + encodeURIComponent(descripcion);

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
    })
    .then(response => {
        if (response.ok) {
            alert('Clase teórica actualizada exitosamente');
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

function eliminarClaseTeorica(event) {
	event.preventDefault();

	var claseId = document.getElementById('idClaseEliminar').value;

	var url = 'http://localhost:8081/clase-teorica/' + claseId;

	fetch(url, {
		method: 'DELETE'
	})
		.then(response => {
			if (response.ok) {
				alert('Clase teórica eliminada exitosamente');
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




function crearVehiculo(event) {
	event.preventDefault();

	// Collect form data
	var placa = document.getElementById('placaCrear').value;
	var modelo = document.getElementById('modeloCrear').value;
	var tipoVehiculo = document.getElementById('tipoVehiculoCrear').value;
	var marca = document.getElementById('marcaCrear').value;
	var nivelVehiculo = document.getElementById('nivelVehiculoCrear').value;
	var disponibilidad = document.getElementById('disponibilidadCrear').value;

	// Create JSON object
	var vehiculoData = {
		placa: placa,
		modelo: modelo,
		tipoVehiculo: tipoVehiculo,
		marca: marca,
		nivelVehiculo: nivelVehiculo,
		disponibilidad: disponibilidad
	};

	// Define URL and options for fetch request
	var url = 'http://localhost:8081/vehiculo';

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(vehiculoData)
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

	var idVehiculo = document.getElementById('id').value;
	var placa = document.getElementById('placaActualizar').value;
	var modelo = document.getElementById('modeloActualizar').value;
	var tipoVehiculo = document.getElementById('tipoVehiculoActualizar').value;
	var marca = document.getElementById('marcaActualizar').value;
	var nivelVehiculo = document.getElementById('nivelVehiculoActualizar').value;
	var disponibilidad = document.getElementById('disponibilidadActualizar').value;

	var url = 'http://localhost:8081/vehiculo/' + idVehiculo;
	var data = {
		idVehiculo: idVehiculo,
		placa: placa,
		modelo: modelo,
		tipoVehiculo: tipoVehiculo,
		marca: marca,
		nivelVehiculo: nivelVehiculo,
		disponibilidad: disponibilidad
	};
	console.log(data)
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

	var url = 'http://localhost:8081/vehiculo/' + idVehiculo;

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

	var nombreCategoria = document.getElementById('nombreCategoriaCrear').value;
	var precio = parseFloat(document.getElementById('precioCrear').value);
	var horasTeoricas = document.getElementById('horasTeoricasCrear').value;
	var horasPracticas = document.getElementById('horasPracticasCrear').value;

	var url = 'http://localhost:8081/categoria';
	var data = {
		nombre_categoria: nombreCategoria,
		precio: precio,
		horas_teoricas: horasTeoricas,
		horas_practicas: horasPracticas
	};

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
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

	var getiD_categoria = document.getElementById('idCategoriaActualizar').value;
	var nombreCategoria = document.getElementById('nombreCategoriaActualizar').value;
	var precio = document.getElementById('precioActualizar').value;
	var horasTeoricas = document.getElementById('horasTeoricasActualizar').value;
	var horasPracticas = document.getElementById('horasPracticasActualizar').value;

	var url = 'http://localhost:8081/categoria/' + getiD_categoria;
	var data = {
		iD_categoria: getiD_categoria, // Convierte a entero si es necesario
		nombre_categoria: nombreCategoria,
		precio: precio, // Convierte a flotante si es necesario
		horas_teoricas: horasTeoricas,
		horas_practicas: horasPracticas
	};


	console.log(data);

	fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (response.ok) {
				alert('Categoría actualizada exitosamente');
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

	var url = 'http://localhost:8081/categoria/' + idCategoria;

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


function crearExamenPractico(event) {
	event.preventDefault();

	// Crear un objeto FormData desde el formulario
	var form = document.getElementById('examenForm');
	var formData = new FormData(form);

	console.log('Enviando datos:', formData);

	// Definir la URL y las opciones para la solicitud fetch
	var url = 'http://localhost:8081/examen-practico/agregar';

	fetch(url, {
		method: 'POST',
		body: formData
	})
		.then(response => {
			if (response.ok) {
				alert('Examen práctico creado exitosamente');
				resetForms();
			} else {
				console.error('Error del servidor:', response.statusText);
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

	var idExamen = document.getElementById('idExamenPracticoActualizar').value;
	var matriculado = document.getElementById('matriculadoActualizarP').value;
	var instructor = document.getElementById('instructorActualizarP').value;
	var vehiculo = document.getElementById('vehiculoActualizarP').value;
	var resultado = document.getElementById('resultadoActualizarP').value;

	var url = 'http://localhost:8081/examen-practico/' + idExamen;
	var params = 'id=' + encodeURIComponent(idExamen) +
		'&ID_matriculado=' + encodeURIComponent(matriculado) +
		'&ID_instructor=' + encodeURIComponent(instructor) +
		'&ID_vehiculo=' + encodeURIComponent(vehiculo) +
		'&resultado=' + encodeURIComponent(resultado);

	fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: params
	})
		.then(response => {
			if (response.ok) {
				alert('Examen práctico actualizado exitosamente');
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

	var url = 'http://localhost:8081/examenes-practicos/' + idExamen;

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

	var url = 'http://localhost:8081/clases-teorica/agregar';
	var params = {
		instructor: instructor,
		matriculado: matriculado,
		descripcion: descripcion
	};

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(params)
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

	var url = 'http://localhost:8081/clases-teoricas/' + idClase;
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

	var url = 'http://localhost:8081/clases-teoricas/' + idClase;

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

	var clienteId = document.getElementById('clienteCrear').value; // Cambio en la variable cliente
	var categoria = document.getElementById('categoriaCrear').value;
	var fechaInicio = document.getElementById('fechaInicioCrear').value;
	var fechaFin = document.getElementById('fechaFinCrear').value;

	var url = 'http://localhost:8081/matriculados';
	var data = {

		fecha_inicio: fechaInicio,
		fecha_fin: fechaFin,
		id_cliente: clienteId,
		id_categoria: categoria
	};

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (response.ok) {
				return response.json(); // Suponiendo que el servidor responde con JSON
			} else {
				throw new Error('Error al crear el matriculado');
			}
		})
		.then(data => {
			alert('Matriculado creado exitosamente');
			resetForms();
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

	var url = 'http://localhost:8081/matriculados/' + idMatriculado;
	var data = {
		fecha_inicio: fechaInicio,
		fecha_fin: fechaFin,
		id_cliente: cliente,
		id_categoria: categoria
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
				alert('Matriculado actualizado exitosamente');
				resetForms(); // Assuming you have a function to reset the form fields
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

	var url = 'http://localhost:8081/matriculados/' + idMatriculado;

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

	var url = 'http://localhost:8081/cliente'; // URL correcta de la ruta

	var cliente = {
		nombre: nombre,
		apellido: apellido,
		telefono: telefono,
		correo: correo,
		cedula: cedula
	};

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(cliente)
	})
		.then(response => {
			if (response.ok) {
				return response.json();
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

	var url = 'http://localhost:8081/cliente/' + idCliente;
	var data = {
		nombre: nombre,
		apellido: apellido,
		telefono: telefono,
		correo: correo,
		cedula: cedula
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
				return response.text(); // Convertir la respuesta a texto
			} else {
				throw new Error('Error al actualizar el cliente');
			}
		})
		.then(data => {
			alert("Actualizado Correctamente ", data);
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

	var url = 'http://localhost:8081/cliente/' + idCliente;

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
			alert("Eliminado Correctamente ", data);
			resetForms();
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al eliminar el cliente');
		});

}

function crearExamenTeorico(event) {
	event.preventDefault();

	// Obtener los valores del formulario
	var matriculado = document.getElementById('matri').value;
	var resultado = document.getElementById('resultadoCrear').value;

	// Crear un objeto FormData
	var formData = new FormData();
	formData.append('ID_matriculado', matriculado);
	formData.append('resultado', resultado);

	console.log('Datos del examen teórico:', Array.from(formData.entries())); // Log para verificar datos

	// URL de la solicitud
	var url = 'http://localhost:8081/examen-teorico/agregar';

	// Realizar la solicitud POST
	fetch(url, {
		method: 'POST',
		body: formData
	})
		.then(response => {
			if (response.ok) {
				alert('Examen teórico creado exitosamente');
				resetForms();
			} else {
				throw new Error('Error al crear el examen teórico');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al crear el examen teórico');
		});
}



function actualizarExamenTeorico(event) {
	event.preventDefault();

	var idExamen = document.getElementById('idExamenTeoricoActualizar').value;
	var matriculado = document.getElementById('matriculadoTActualizarT').value;
	var resultado = document.getElementById('resultadoTActualizar').value;

	// Validar que los campos necesarios no estén vacíos
	if (!idExamen || !matriculado) {
		alert('Por favor, complete todos los campos necesarios.');
		return;
	}

	// Crear un objeto FormData
	var formData = new FormData();
	formData.append('id', idExamen);
	formData.append('ID_matriculado', matriculado);
	formData.append('resultado', resultado);

	console.log('Datos del examen teórico a actualizar:', Array.from(formData.entries())); // Log para verificar datos

	// URL de la solicitud
	var url = 'http://localhost:8081/examen-teorico/' + idExamen;

	// Realizar la solicitud PUT
	fetch(url, {
		method: 'PUT',
		body: formData
	})
		.then(response => {
			if (response.ok) {
				alert('Examen teórico actualizado exitosamente');
				resetForms();
			} else {
				throw new Error('Error al actualizar el examen teórico');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al actualizar el examen teórico');
		});
}


// Función para eliminar un examen teorico
function eliminarExamenTeorico(event) {
	event.preventDefault();

	var idExamen = document.getElementById('idExamenEliminar').value;

	var url = 'http://localhost:8081/examenes-practicos/' + idExamen;

	fetch(url, {
		method: 'DELETE'
	})
		.then(response => {
			if (response.ok) {
				alert('Examen teorico eliminado exitosamente'); resetForms();
				resetForms();
			} else {
				throw new Error('Error al eliminar el examen teorico');
			}
		})
		.catch(error => {
			console.error('Error:', error);
			alert('Error al eliminar el examen teorico');
		});
}

