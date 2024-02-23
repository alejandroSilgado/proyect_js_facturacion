const listaProductos=[];

const cargarProductos=()=>{   
    for(let i=0;i<=10;i++){
        const nuevoProducto={
            codigo: `PROD${i}`,
            nombre:faker.commerce.productName(),
            precio: parseFloat(faker.commerce.price(10, 100, 2))
        };       
        listaProductos.push(nuevoProducto);
    }    
};

const cargarFormularioProductos=()=>{
      const productosForm = document.getElementById('productos-form');
      productosForm.innerHTML = `
        <form>
            <label for="codigoProducto">Codigo del producto:</label>
            <input type="number" id="codigoProducto" required>
            <label for="cliente">Cliente:</label>
            <input type="text" id="nombreProducto" required>
            <label for="precioProducto">Precio del producto:</label>
            <input type="number"s id="precioProducto" required>
            <button type="button" onclick="crearProducto()">Crear Producto</button>
            <button type="button" onclick="mostrarListadoProductos()">Ver Listado de Productos</button>
            <!-- Aquí se puede añadir más funcionalidad, como modificar y eliminar clientes -->
        </form>
    `;
    const listadoProductos = document.getElementById('listado-productos');
    listadoProductos.style.display='none';
}

const crearProducto=()=>{
    const codigoInput=document.getElementById('codigoProducto');
    const nombreInput=document.getElementById('nombreProducto');
    const precioInput=document.getElementById('precioProducto');

    const codigo=codigoInput.value;
    const nombre=nombreInput.value;
    const precio=precioInput.value;

    const nuevoProducto={
        codigo:codigo,
        nombre:nombre,
        precio: precio
    }

    listaProductos.push(nuevoProducto);

    codigoInput.value='';
    nombreInput.value='';
    precioInput.value='';

    alert('Producto creado con éxito!');
    console.log(listaProductos);

    return nuevoProducto;

}

const mostrarListadoProductos=()=>{
    const productosForm = document.getElementById('productos-form');
    const listadoProductos = document.getElementById('listado-productos');
    
    productosForm.style.display='none';
    listadoProductos.style.display='block';

    const ul=document.createElement('ul');

    for(const producto of listaProductos){
        const li=document.createElement('li');
        li.textContent= `Codigo: ${producto.codigo}, Referencia: ${producto.nombre}, Precio: ${producto.precio}`;
        ul.appendChild(li);
    }

    listadoProductos.innerHTML='';
    listadoProductos.appendChild(ul);

    const volverButton=document.createElement('button');
    volverButton.textContent='Volver al Formulario';
    volverButton.addEventListener('click',volverFormularioProductos);
    listadoProductos.appendChild(volverButton);
    
}

const volverFormularioProductos=()=>{
    const productosForm = document.getElementById('productos-form');
    const listadoProductos = document.getElementById('listado-productos');

    listadoProductos.style.display='none';
    productosForm.style.display='block';
    
}

console.log(listaProductos);