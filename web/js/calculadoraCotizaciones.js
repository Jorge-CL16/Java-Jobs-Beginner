document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('keypress', function(event) {
        const tecla = event.key;

        if ((tecla < '0' || tecla > '9') && tecla !== '.' && tecla !== '-') {
            event.preventDefault();
        }
        if (tecla === '.' && input.value.includes('.')) {
            event.preventDefault();
        }
        if (tecla === '-' && input.value.length > 0) {
            event.preventDefault();
        }
    });
});

function calcularCostoFlete () {
    let x1 = parseFloat(document.getElementById('txtX1').value);
    let x2 = parseFloat(document.getElementById('txtX2').value);
    let y1 = parseFloat(document.getElementById('txtY1').value);
    let y2 = parseFloat(document.getElementById('txtY2').value);
    
    let distancia = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    let tamañoViaje = document.getElementById('txtTamañoViaje');
    
    let costo = 0;
    
    if (distancia >= 0 && distancia < 200) {
        costo = distancia * 0.85;
        tamañoViaje.innerHTML = "<h2>Corto</h2>";
        tamañoViaje.classList.remove("text-warning", "text-danger");
        tamañoViaje.classList.add("text-success");

    }
    else if (distancia >= 200 && distancia < 500) {
        costo = distancia * 0.78;
        tamañoViaje.innerHTML = "<h2>Intermedio</h2>";
        tamañoViaje.classList.remove("text-success", "text-danger");
        tamañoViaje.classList.add("text-warning");
    }
    else {
        costo = distancia * 0.70;
        tamañoViaje.innerHTML = "<h2>Largo</h2>";
        tamañoViaje.classList.remove("text-warning", "text-success");
        tamañoViaje.classList.add("text-danger");
    }
    
    document.getElementById('txtDistancia').value = distancia;
    document.getElementById('txtCosto').value = costo;  
}