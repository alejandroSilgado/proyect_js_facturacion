import { listaClientes } from 'invoce-developer/js/clientes.js';
const listaFacturas=[];

const subirFacturas = () => {
    for (let i = 0; i <= 10; i++) {
        const nuevaFactura = {
            fecha: parseFloat(faker.date.between(new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000), new Date(new Date().getTime() + 100 * 24 * 60 * 60 * 1000))),
            cliente: faker.commerce.productName(),
            precio: parseFloat(faker.commerce.price(10, 100, 2))
        };
        listaFacturas.push(nuevaFactura);
    }
};

const cargarFormularioFacturas = () => {
    const facturasForm = document.getElementById('facturas-form');
    const clientesSelect = document.getElementById('clientes');

    listaClientes.forEach(cliente => {
        const option = document.createElement('option');
        option.value = cliente.nombre.toLowerCase();
        option.textContent = cliente.nombre;
        clientesSelect.appendChild(option);
    });

    facturasForm.innerHTML = `
        <form>
            <label for="fechaFactura">Fecha de la factura:</label>
            <input type="date" id="fechaFactura" required>

            <label for="clientes">Cliente:</label>
            <select id="clientesSelect" required></select>

            <label for="precioProducto">Precio del producto:</label>
            <input type="number" id="precioProducto" required>

            <button type="button" onclick="crearItem()">Crear Item</button>
            <button type="button" onclick="mostrarListadoFacturas()">Ver Listado de Facturas</button>
            <!-- Aquí se puede añadir más funcionalidad, como modificar y eliminar clientes -->
        </form>
    `;
    const listadoFacturas = document.getElementById('listado-facturas');
    listadoFacturas.style.display = 'none';
}

const crearItem = () => {
    // Implementa la lógica para crear un nuevo elemento
}

const mostrarListadoProductos = () => {
    const facturasForm = document.getElementById('facturas-form');
    const listadoFacturas = document.getElementById('listado-facturas');

    facturasForm.style.display = 'none';
    listadoFacturas.style.display = 'block';

    const ul = document.createElement('ul');

    for (const facturas of listaFacturas) {
        const li = document.createElement('li');
        li.textContent = `Fecha: ${facturas.fecha}, Cliente: ${facturas.cliente}, Precio: ${facturas.precio}`;
        ul.appendChild(li);
    }

    listadoFacturas.innerHTML = '';
    listadoFacturas.appendChild(ul);

    const volverButton = document.createElement('button');
    volverButton.textContent = 'Volver a las facturas';
    volverButton.addEventListener('click', volverFormularioFacturas);
    listadoFacturas.appendChild(volverButton);
}

const volverFormularioFacturas = () => {
    const productosForm = document.getElementById('facturas-form');
    const listadoFacturas = document.getElementById('listado-facturas');

    listadoFacturas.style.display = 'none';
    productosForm.style.display = 'block';
}

console.log(listaFacturas);
