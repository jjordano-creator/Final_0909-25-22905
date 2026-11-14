document.addEventListener('DOMContentLoaded', () => {
	const campoNombre = document.querySelector(
		'#nombre, [name="nombre"], #name, [name="name"]'
	);
	const calculadora = document.querySelector(
		'#calculadora, .calculadora, [data-calculadora], #calculator'
	);

	if (!campoNombre || !calculadora) return;

	const actualizarVisibilidad = () => {
		calculadora.hidden = campoNombre.value.trim() === '';
	};

	actualizarVisibilidad();
	campoNombre.addEventListener('input', actualizarVisibilidad);
});
    