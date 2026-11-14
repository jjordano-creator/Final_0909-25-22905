document.addEventListener('DOMContentLoaded', () => {
	const campoNombre = document.querySelector(
		'#nombre, [name="nombre"], #name, [name="name"]'
	);
	const calculadora = document.querySelector(
		'#calculadora, .calculadora, [data-calculadora], #calculator'
	);
	const campoCantidad = document.querySelector(
		'#cantidad, [name="cantidad"], #quantity, [name="quantity"]'
	);
	const campoPrecio = document.querySelector(
		'#precio, [name="precio"], #price, [name="price"]'
	);

	if (campoNombre && calculadora) {
		const actualizarVisibilidad = () => {
			calculadora.hidden = campoNombre.value.trim() === '';
		};

		actualizarVisibilidad();
		campoNombre.addEventListener('input', actualizarVisibilidad);
	}

	if (!campoCantidad || !campoPrecio || !calculadora) return;

	let resultado = calculadora.querySelector(
		'#resultado, [data-resultado], [name="resultado"]'
	);
	if (!resultado) {
		resultado = document.createElement('output');
		resultado.id = 'resultado';
		resultado.setAttribute('aria-live', 'polite');
		calculadora.appendChild(resultado);
	}

	const calcular = () => {
		const cantidad = Number(campoCantidad.value);
		const precio = Number(campoPrecio.value);

		if (
			campoCantidad.value.trim() === '' ||
			campoPrecio.value.trim() === '' ||
			!Number.isFinite(cantidad) ||
			!Number.isFinite(precio)
		) {
			resultado.textContent = '';
			return;
		}

		resultado.textContent = (cantidad * precio).toLocaleString('es-ES', {
			maximumFractionDigits: 2
		});
	};

	campoCantidad.addEventListener('input', calcular);
	campoPrecio.addEventListener('input', calcular);
	calcular();
});
    